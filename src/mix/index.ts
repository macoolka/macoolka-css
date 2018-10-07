import * as effect from './effect';
import * as text from './text';
import { CssNode } from '../base/CssNode';
import { Input as RuleInput, parse as parseRule } from '../base/rule';
import { RuleC, parseRuleC } from '../base/ruleC';
import { parseMedia, MediaInput } from '../basic';
import { parseModule, Theme as ModuleTheme, theme, ModuleOutput } from '../modules';
import { BaseProps } from '../base/types';
import { compose } from 'mocoolka-fp/lib/function';
export { toString } from '../base/print';
import { concatRule } from '../base/rule';
export {
    theme
};
export type Theme = ModuleTheme;
export const rule = concatRule(effect.rule, text.rule);
type _Props = effect.Props & text.Props;
export type Props = MediaInput<ModuleOutput<_Props>>;
export type ModuleOutput<P> = RuleInput<P, Props>;
export const parseMixer = <P, T= any>(t: T & Theme) => (i: CssNode<ModuleOutput<P>>): CssNode<BaseProps> =>
    compose(parseModule(t), parseRule(rule)(t), parseMedia<ModuleOutput<_Props>>(t))(i);
export const parsePropRule = <I, IEnum extends { [key: string]: string }, T= any,
    >(rules: RuleC<I, IEnum, Props, T>) => (t: T & Theme) =>
        (i: CssNode<MediaInput<ModuleOutput<I & IEnum>>>): CssNode<BaseProps> => {
            const mediaResult = parseMedia<ModuleOutput<I & IEnum>>(t)(i);
            return parseRuleC(parseMixer(t))(rules as any)(t)(mediaResult);

        };
