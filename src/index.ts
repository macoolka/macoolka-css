import { RuleC } from './base/ruleC';
import { CssNode } from './base/CssNode';
import { parse as parseMixer, parsePropRule, MixProps, Theme, theme,
     ModuleOutput, parsePropRuleString, parseMixerString } from './mix';
import {  MediaInput } from './basic';
export const parse = parseMixerString;
export const parseRule = parsePropRuleString;
export const parseJSS = parseMixer;
export const parseRuleJSS = parsePropRule;
export type Rule<SProp, EProp  extends { [key: string]: string }= {}>= RuleC<SProp, EProp, MixProps, Theme>;
export type OutputProps<T>= ModuleOutput<T>;
export type OutputPropsMedia <T>= MediaInput<ModuleOutput<T>>;
import {Animations, animations} from './modules/effect/animations';
export type Props= MixProps;
export {
    Theme,
    theme,
    Animations,
    animations,
    CssNode,
};
// todo:add absolute ms defaultvalue
