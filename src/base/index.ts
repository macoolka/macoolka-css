export { cssNodeToStringGetter } from './print';
import {CssProperties} from './CssProperties';
import {Css} from './Css';
import {CssSelector} from './CssSelector';
export {BaseProps} from './types';
import { CssNode } from '../base/CssNode';
import { Rule, parse as parseRule} from './rule';
import { RuleC, parseRuleC} from './ruleC';
export {
    Rule,
    RuleC,
    Css,
    CssSelector,
    CssProperties,
    CssNode,
    parseRule,
    parseRuleC,
};

/* export const parse = <I, IEnums extends { [key: string]: string }, O, T=
 { [key: string]: any }>(rules: Rule<I, IEnums, O, T>) => (theme: T) =>
    (i: CssNode<ObjectOverwrite<O, Partial<I&IEnums>>>): CssNode<O> =>
    map(i, ruleMap<I, IEnums, O, T>(rules)(theme)); */
/* export const parseToString = <I, IEnums extends { [key: string]: string }, O, T=
 { [key: string]: any }>(rules: Rule<I, IEnums, O, T>) => (theme: T) =>
    (i: CssNode<ObjectOverwrite<O, Partial<I&IEnums>>>): string =>
    map(i, ruleMap<I, IEnums, O, T>(rules)(theme)).toString(); */
