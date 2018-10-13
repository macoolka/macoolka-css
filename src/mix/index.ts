import * as effect from './effect';
import * as text from './text';
import { CssNode } from '../base/CssNode';
import { Input as RuleInput, parse as parseRule , fold, Rule} from '../base/rule';
import { RuleC, parseRuleC } from '../base/ruleC';
import { parseMedia, MediaInput } from '../basic';
import { parseModule, Theme as ModuleTheme, theme, ModuleOutput, ModuleProps } from '../modules';
import { BaseProps } from '../base/types';
import { compose } from 'mocoolka-fp/lib/function';
import { toString } from '../base/print';
export {
    theme,
    toString
};
export type Theme = ModuleTheme;

interface IProps extends Partial<effect.Props&text.Props> {

}
export declare interface MixProps extends Partial<effect.Props>, Partial<text.Props>, ModuleProps {

}
// export type MixProps = ModuleOutput<_Props>;
export type ModuleOutput<P> = RuleInput<P, MixProps>;
export type SProps= effect.SProps& text.SProps;
export type EProps= effect.EProps& text.EProps;
export const rule: Rule<SProps, EProps, ModuleProps, Theme> = fold()([effect.rule, text.rule]);
export const parseMixer = <P= {}, T= any>(t: T & Theme) => (i: CssNode<ModuleOutput<P>>): CssNode<BaseProps> =>
    compose(parseModule(t), parseRule(rule)(t))(i);
export const parseMediaMixer = <P= {}, T= any>(t: T & Theme) =>
 (i: CssNode<MediaInput<ModuleOutput<P>>>): CssNode<BaseProps> =>
    compose(parseModule(t), parseRule(rule)(t), parseMedia<ModuleOutput<IProps>>(t))(i);
export const parse = (t: Theme) => (i: MediaInput<CssNode<MixProps>>): CssNode<BaseProps> =>
    compose(parseModule(t), parseRule(rule)(t), parseMedia<ModuleOutput<IProps>>(t))(i);
export const parsePropRule = <I, IEnum extends { [key: string]: string }, T= any,
    >(rules: RuleC<I, IEnum, MixProps, T>) => (t: T & Theme) =>
        (i: CssNode<MediaInput<ModuleOutput<I & IEnum>>>): CssNode<BaseProps> => {
            const mediaResult = parseMedia<ModuleOutput<I & IEnum>>(t)(i);
            return parseRuleC(parseMixer(t))(rules as any)(t)(mediaResult);
        };
export const parseMixerString = <P, T= any>(t: T & Theme) => compose(toString, parseMediaMixer<P, T>(t));
export const parsePropRuleString = <I, IEnum extends { [key: string]: string }, T= any,
    >(rules: RuleC<I, IEnum, MixProps, T>) => (t: T & Theme) => compose(toString, parsePropRule(rules)(t));
