
import { SNode } from './Node';
import { mapValues,get } from 'mocoolka-fp/lib/object';
import { isFunction,isString,isNumber } from 'mocoolka-fp/lib/predicate';
import { RuleValue, StandRule, parse as _parse } from './StandRule';
import { Monoid, monoidString, fold as _fold } from 'mocoolka-fp/lib/Monoid';
export * from './StandRule';
// export interface RuleEnumProp  { [key: string]: string | undefined };
/* type RuleEnumValueFunction<I extends RuleEnumProp, K extends keyof I, T extends object, O extends object> = {
    [name in NonNullable<I[K]>]: RuleValueFunction<I, K, T, O> | Node<O>
};
 */
export type EnumRule<I extends object , O extends object, T extends object> = {
    [K in keyof I]: {
        [name in NonNullable<I[K] extends string ? I[K] : never>]: ((a: {
            value: NonNullable<I[K]>,
            name: K,
            theme: T,
            source: I,
        }) => SNode<O>) | SNode<O>;
    };
};

export const enumCssRuleGetCssRule =
    <I extends object, O extends object, T extends object>
        (ruleEnum: EnumRule<I, O, T>) =>
        mapValues(ruleEnum, a => {
            const fn = (b: RuleValue<I, keyof I, T>): SNode<O> => {
                if(isString(b.value) || isNumber(b.value)){
                    if (isFunction(get(a,b.value))) {
                        return (get(a,b.value))(b);
                    }
    
                    return get(a,b.value) ;
                }
                return ({}) as SNode<O>

            };

            return fn;
        }) as StandRule<I, O, T>;

export const parse = <I extends object, O extends object, T extends object>
    (rule: EnumRule<I, O, T>, themeDefaultValue: T, nameMonoid: Monoid<string> = monoidString) =>
    _parse(enumCssRuleGetCssRule(rule), themeDefaultValue, nameMonoid);
