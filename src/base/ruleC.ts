
import { CssNode, map as nodeMap, fold as nodeFold } from './CssNode';
import { fromNullable } from 'mocoolka-fp/lib/Option';
import { CssProperties } from './CssProperties';
import { Rule, map as ruleMap, Input } from './rule';
/**
 * The define rule how covert from a properties type to another properties type
 */
export type RuleC<I extends CssProperties= {},
    IEnums extends { [key: string]: string }= {}, O extends CssProperties= {}, T= any> = Rule<I, IEnums, O, T> & {
        style?: CssNode<O>
    };

export const parseRuleC = <I, IEnum extends { [key: string]: string },
 O extends CssProperties= {}, RO extends CssProperties= O, T= any >(f: ((p: CssNode<O>) =>
  CssNode<RO>)= a =>
  (a as any as  CssNode<RO>)) =>
   ({ rule, ruleEnum, style }: RuleC<I, IEnum, O, T>) =>
    (t: T) =>
        (i: CssNode<Input<I & IEnum, O>>): CssNode<RO> => {
            const ruleValue = f(nodeMap(i, ruleMap({ rule, ruleEnum })(t)));
            const styleValue = fromNullable(style).map(f).getOrElse({} as RO);
            return nodeFold<RO>()([styleValue, ruleValue]);
        };
