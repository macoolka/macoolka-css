export { cssNodeToStringGetter } from './print';
import {CssProperties} from './CssProperties';
import {Css} from './Css';
import {CssSelector} from './CssSelector';
export {BaseProps} from './types';
import { CssNode, map as nodeMap } from '../base/CssNode';
import { Rule, map as ruleMap} from './rule';
import { ObjectOverwrite } from 'mocoolka-fp/lib/TypeLevel';
export {
    Rule,
    Css,
    CssSelector,
    CssProperties,
    CssNode,
};

export const parse = <I, IEnums extends { [key: string]: string }, O, T=
 { [key: string]: any }>(rules: Rule<I, IEnums, O, T>) => (theme: T) =>
    (i: CssNode<ObjectOverwrite<O, Partial<I&IEnums>>>): CssNode<O> =>
    nodeMap(i, ruleMap<I, IEnums, O, T>(rules)(theme));
export const parseToString = <I, IEnums extends { [key: string]: string }, O, T=
 { [key: string]: any }>(rules: Rule<I, IEnums, O, T>) => (theme: T) =>
    (i: CssNode<ObjectOverwrite<O, Partial<I&IEnums>>>): string =>
    nodeMap(i, ruleMap<I, IEnums, O, T>(rules)(theme)).toString();
