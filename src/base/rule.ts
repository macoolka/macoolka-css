import { CssNode, map as nodeMap, fold as nodeFold } from './CssNode';
import r from 'mocoolka-fp/lib/Record';
import { fromPredicate, fromNullable, getMonoid, Option } from 'mocoolka-fp/lib/Option';
import { isFunction, isObject, isString, isArray } from 'mocoolka-fp/lib/predicate';
import { mapValues, omit } from 'mocoolka-fp/lib/object';
import { parseProps, CssProperties, properties } from './CssProperties';
import { headArrayOption } from 'mocoolka-fp/lib/Array';
import { or } from 'mocoolka-fp/lib/function';
/**
 * The define rule how covert from a properties type to another properties type
 */
/* type ObjectUpdateFunction<O, P, T, U extends keyof O> =
    { [k in U]: (O[k] | ((a: P, b: T) => O[k])) } & ObjectOmit<O, U>; */
// type ObjectUpdateAll<O, P, T, > = ObjectUpdateFunction<O, P, T, keyof O>;
export const fold = r;
export type RuleStand<I extends CssProperties, O extends CssProperties, T= any> = {
    [name in keyof I]: (
        ((a: I[name], theme: T) => CssNode<O>)
        // |CssNode<O>
       // | (CssNode<ObjectUpdateAll<O, I[name], T>>)
       // | keyof O | Array<keyof O>
    )
};
const processRuleFunction = <A, T, R>(value: A, theme: T) =>
    (func: (value: A, theme: T) => R) => func(value, theme);
const processNode = <A, T>(value: A, theme: T) => <P>(node: CssNode<P>) =>
nodeMap(node, (a: P) =>
        mapValues((a as {}), v =>
            fromPredicate(isFunction)(v).map(processRuleFunction(value, theme)).getOrElse(value))
    );
const mapWithPropsRules = <I extends CssProperties, O extends CssProperties, T= any>(rules: RuleStand<I, O, T>) =>
    (theme: T) => (i: Input<I, O>): O => {
        let result: any = {};
        Object.keys(i).forEach(key => {
            const value = i[key];
            const ruleValue = (rules)[key];
            const result1 = headArrayOption([
                fromPredicate(or(isString, isArray))(ruleValue).map(parseProps<I>(value)),
                fromPredicate(isFunction)(ruleValue).map(processRuleFunction(value, theme)),
                fromPredicate(isObject)(ruleValue).map(processNode(value, theme))]).getOrElse({});
            result = { ...result, ...result1 };
        });

        return result;
    };

/* type ObjectUpdateThemeFunction<O, T, U extends keyof O> =
    { [k in U]: (O[k] | ((theme: T) => O[k])) } & ObjectOmit<O, U>;
type ObjectUpdateThemeAll<O, T, > = ObjectUpdateThemeFunction<O, T, keyof O>; */

export type RuleEnums<I extends { [key: string]: string }, O extends CssProperties, T= any> = {
    [name in keyof I]: { [key in I[name]]: (
        ((theme: T) => CssNode<O>)
        // |CssNode<O>
        // | (CssNode<ObjectUpdateThemeAll<O, T>>)
        )
    }
};

const processThemeFunction = <T, R>(theme: T) => (func: (theme: T) => R) => func(theme);

const processThemeNode = <T>(theme: T) => <P>(node: CssNode<P>) =>
nodeMap(node, (a: P) =>
        mapValues((a as {}), v =>
            fromPredicate(isFunction)(v).map(processThemeFunction(theme)).getOrElse(v))
    );

const mapWithPropsRuleEnums = <I extends { [key: string]: string }, O extends CssProperties, T= any>
    (rules: RuleEnums<I, O, T>) => (theme: T) =>
        (i: Input<I, O>): O => {
            let result: any = {};
            Object.keys(i).forEach(key => {
                const value = i[key];
                const ruleValue = rules[key];
                const style = ruleValue ? (ruleValue as any)[value] : undefined;
                const result1 = headArrayOption([
                    fromPredicate(isFunction)(style).map(processThemeFunction(theme)),
                    fromPredicate(isObject)(style).map(processThemeNode(theme))]).getOrElse({});
                result = { ...result, ...result1 };
            });
            return result;
        };
export type Rule<I extends CssProperties= {},
    IEnums extends { [key: string]: string }= {}, O extends CssProperties= {}, T= any> = {
        rule?: RuleStand<I, O, T>,
        ruleEnum?: RuleEnums<IEnums, O, T>,
    };
export const concatRule = <I extends CssProperties= {}, IEnums extends { [key: string]: string }= {}, T= any,
    I1 extends CssProperties= {}, IEnums1 extends { [key: string]: string }= {}, T1= any, O extends CssProperties= {}>
    (a: Rule<I, IEnums, O, T>, b: Rule<I1, IEnums1, O, T1>): Rule<I & I1, IEnums & IEnums1, O, T & T1> => r()([a, b]);

export type Input<I, O> = O & Partial<I>;
export const map = <I extends CssProperties, IEnums extends { [key: string]: string }, O extends CssProperties, T= any>
    ({ rule, ruleEnum }: Rule<I, IEnums, O, T>) => (theme: T) =>
        (i: Input<I&IEnums, O>): O => {
            const propMonoid = properties<O>();
            const { concat } = getMonoid(propMonoid);
            const ruleKeys = fromNullable(rule).map(a => Object.keys(a)).getOrElse([]);
            const ruleEnumKeys = fromNullable(ruleEnum).map(a => Object.keys(a)).getOrElse([]);
            // customValue is biggest level
            const customValue = omit(i, ruleKeys.concat(ruleEnumKeys)) as any as O;
            const ruleResult = fromNullable(rule).map(a => mapWithPropsRules(a)(theme)(i)) as Option<O>;
            const ruleEnumsResult = fromNullable(ruleEnum).map(a => mapWithPropsRuleEnums(a)(theme)(i)) as Option<O>;
            const ruleValue = concat(ruleEnumsResult, ruleResult).getOrElse(propMonoid.empty);
            return nodeFold<O>()([ruleValue, customValue]);
        };
export const parse = <I, IEnum extends { [key: string]: string }, O extends CssProperties= {}, T= any,
    >({ rule, ruleEnum }: Rule<I, IEnum, O, T>) => (t: T) =>
        (i: CssNode<Input<I&IEnum, O>>): CssNode<O> => {
            return nodeMap(i, map({ rule, ruleEnum })(t));
        };
export const parseP = <I, IEnum extends { [key: string]: string }, O extends CssProperties= {}, T= any,
        >({ rule, ruleEnum }: Rule<I, IEnum, O, T>) => (t: T) =>
        <P= Input<I&IEnum, O>>(i: CssNode<P>): CssNode<O> => {
                return nodeMap((i as any), map({ rule, ruleEnum })(t));
            };

export const parseRule = <I, IEnum extends { [key: string]: string },
 O extends CssProperties= {}, RO extends CssProperties= O, T= any>
 (f: ((p: CssNode<O>) => CssNode<RO>)= a => (a as any as  CssNode<RO>)) =>
         ({ rule, ruleEnum }: Rule<I, IEnum, O, T>) => (t: T) =>
            (i: CssNode<Input<I & IEnum, O>>): CssNode<RO> =>
                f(nodeMap(i, map({ rule, ruleEnum })(t)));
