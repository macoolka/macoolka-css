import * as effect from './effect';
import * as text from './text';
import * as media from './media';
import {
    Input, foldRule, Rule,  CssProperties,
     parseToString, toEntity, fromEnity, InputNode, BaseProps
} from '../css';

import { Theme as ModuleTheme, theme, OutRule, parseModuleRule, ModuleProps } from '../modules';
import { MediaInput,parseRule as _parseRule,} from '../basic';
export {
    theme,
    parseToString,
    ModuleProps
};
export type Theme = ModuleTheme;

interface SProps extends  effect.SProps  , text.SProps , media.SProps{

}
interface EProps  extends  effect.EProps  , text.EProps , media.EProps{

}
export interface Props extends SProps,EProps ,ModuleProps{

};
const rule: OutRule<SProps, EProps, Theme> = foldRule()([effect.rule, text.rule]) as OutRule<SProps, EProps, Theme>;

export type OutProps<P extends CssProperties> = Input<P, Props>;
export type OutRule<I extends CssProperties, IEnum extends CssProperties, T extends Theme= Theme> =
    Rule<I, IEnum, MediaInput<Props>, T>;
export const parseJSSRule = (t:Theme=theme)=>parseModuleRule(rule, t);


export const parseRuleMap = <I extends CssProperties, IEnum extends CssProperties, T extends Theme= Theme>
    (rules: Rule<I, IEnum, MediaInput<Props>, T>, t: T) =>
    _parseRule(rules, t).compose(parseJSSRule(t));


export const parseRuleJSS = <S extends CssProperties= {}, E extends CssProperties= {}, T extends Theme= Theme>
    (rules: Rule<S, E, Props, T>, t: T) => (a: InputNode<MediaInput<OutProps<S & E>>, T>): BaseProps =>
        toEntity(_parseRule(rules, t).compose(parseJSSRule(t)).get(fromEnity(a)));
export const parseRule = <S extends CssProperties= {}, E extends CssProperties= {}, T extends Theme= Theme>
    (rules: Rule<S, E, Props, T>, t: T) => (a: InputNode<MediaInput<OutProps<S & E>>, T>): string =>
        parseToString(toEntity(_parseRule(rules, t).compose(parseJSSRule(t)).get(fromEnity(a))));

export const parse = (a: MediaInput<InputNode<MediaInput<Props>, Theme>>): string =>
    parseToString(toEntity(parseJSSRule(a.theme).get(fromEnity(a))));
export const parseJss = (a: MediaInput<InputNode<Props, Theme>>): BaseProps =>
    toEntity(parseJSSRule(a.theme).get(fromEnity(a)));

