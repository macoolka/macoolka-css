import * as effect from './effect';
import * as text from './text';
import {
    ExtendRule, RuleModule as _RuleModule,foldRuleModule
} from '../CssRule';

import { Rule as ParentRule } from '../common';

export type Theme = text.Theme;
export interface SProps extends effect.SProps, text.SProps {

}
export interface EProps extends effect.EProps, text.EProps {

}
export interface Props extends SProps, EProps {

};
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
export type RuleModule=_RuleModule<Rule> 



export const ruleModule=foldRuleModule<Rule>()([
    effect.ruleModule,text.ruleModule
])