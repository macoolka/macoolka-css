import {  StandardProperties,  SvgProperties } from 'csstype';
export * from 'csstype';
export {MediaInput} from './basic';
/**
 * The Provide MDN CssNode
 */
export type BaseProps= StandardProperties<string> & SvgProperties<string>;
import {Rule, parse as _parse, parseFromNodeToNode, InputNode, RuleEnumProp, parseToNodeWithGetter,    fromEnity, Input,
    InputOverwrite, parseOverWrite, foldRule, nodeToStringGetter, SNode,
    toEntity} from './KeyMap';
const parseRule = _parse;
const parseRuleOverwrite = parseOverWrite;
type EnumProperty= RuleEnumProp;
type CssTheme= object;
type CssProperties= object;
const parseToString = nodeToStringGetter(0);
const parse = parseFromNodeToNode;
export type CssNode <P extends CssProperties>= SNode<P>;
export {
    Rule,
    parseRule,
    foldRule,
    EnumProperty,
    CssProperties,
    CssTheme,
    InputNode,
    parse,
    parseToNodeWithGetter,
    parseRuleOverwrite,
    fromEnity,
    toEntity,
    Input,
    InputOverwrite,
    parseToString,
};

export type OutProps<P extends CssProperties>= Input<P, BaseProps>;
export type OutRule<I extends object= {}, IEnums extends EnumProperty= {},
  T extends CssTheme= {}>= Rule<I, IEnums, BaseProps, T>;
