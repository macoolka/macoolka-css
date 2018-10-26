
import { StringMap, keyMap, fold as mapFold } from './KeyMap';
import { SNode, parseSNode, Node, InputNode } from './Node';
import { mapValues, get,  pick, omit, set } from 'mocoolka-fp/lib/object';
import { Overwrite } from 'mocoolka-fp/lib/TypeLevel';
import { Monoid, monoidString, fold as _fold } from 'mocoolka-fp/lib/Monoid';
import { Getter } from 'mocoolka-fp/lib/Monocle';
import { isFunction, isEmpty } from 'mocoolka-fp/lib/predicate';
import { record } from 'mocoolka-fp/lib/Record';
import {arrayCompareArrayToArray} from 'mocoolka-fp/lib/Compare';
import {fromNullable} from 'mocoolka-fp/lib/Option';
export type RuleValue<I extends object, K extends keyof I, T extends object> = {
    value: NonNullable<I[K]>,
    name: K,
    theme: T,
    source: I,
};
export type RuleValueFunction<I extends object,
    K extends keyof I, T extends object, O extends object> =
    (a: RuleValue<I, K, T>) => SNode<O>;

export type StandRule<I extends object, O extends object, T extends object> = {
    [K in keyof I]: RuleValueFunction<I, K, T, O> | SNode<O>
};

export type Input<I extends object, O extends object> = O & I;
export type InputOverwrite<I extends object, O extends object> = Overwrite<O, I>;
export type Data<O extends object, T extends object> = { data: StringMap<O>, theme?: T };
export const parse = <I extends object, O extends object, T extends object>
    (rule: StandRule<I, O, T>, themeDefaultValue: T, nameMonoid: Monoid<string> = monoidString) =>
    new Getter<Data<Input<I, O>, T>, Data<O, T>>(({ data, theme }) => {
        const themeM = theme ? theme : themeDefaultValue;
        const ruleKeys = Object.keys(rule);
        const leftRight = keyMap.partition(data, a => arrayCompareArrayToArray.contains_some(Object.keys(a))(ruleKeys));
        const left = leftRight.left as any as StringMap<O>;

        const leftMap: StringMap<O>[] = [];
        const rightResult = keyMap.chain(leftRight.right, (a, tag) => {
            const ruleValues = pick(a, ruleKeys);
            const orginalValue = omit(a, ruleKeys);
            const as: StringMap<O>[] = [];
            const orginMap = keyMap.of({ [tag]: orginalValue }) as any as StringMap<O>;
            leftMap.push(orginMap);
            mapValues(ruleValues, (value, name) => {
                fromNullable(value).map(_=>{
                    const ruleValue = get(rule, name);
                    const r2: SNode<O> = isFunction(ruleValue) ? ruleValue({
                        value,
                        name,
                        theme: themeM,
                        source: data.value,
                    }) as SNode<O> : ruleValue;
                    const addNameNode: Node<O> = {};
                    fromNullable(r2).map(_=>{
                    const nodeValue = parseSNode(r2);
                    mapValues(nodeValue, (v, key) => {
                        addNameNode[nameMonoid.concat(tag, key)] = v;
                    });
                    as.push(keyMap.of(addNameNode));
                    })
                })


            });
            return mapFold<O>()(as);
        });
        return {
            data: mapFold<O>()([rightResult, mapFold<O>()(leftMap), left]),
            theme: themeM,
        };
    });

export const fromEnity = <I extends object, O extends object, T extends object>
    (input: InputNode<Input<I, O>, T>): Data<Input<I, O>, T> => ({
        theme: input.theme,
        data: keyMap.of(parseSNode(omit(input, 'theme'))),
    });
export const toEntity = <O extends object, T extends object>
    (input: Data<O, T>): InputNode<O, T> => {
    const selector = omit(input.data.value, '');
    const result = get(input.data.value, '');
    if (!isEmpty(selector)) {
        return set(result, 'selector', selector);
    }
    return result;
};
/**
 * Properties is css properties's type
 * @type
 */
export const getMonoid = <I extends object= {},
    O extends object= {},
    T extends object= {}>() => record<StandRule<I, O, T>>();
export const fold = <I extends object= {},
    O extends object= {},
    T extends object= {}>() => _fold(getMonoid<I, O, T>());
