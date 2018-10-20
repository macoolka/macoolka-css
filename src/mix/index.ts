import * as effect from './effect';
import * as text from './text';

import {
    Input, foldRule, Rule, parseRule as _parseRule, CssProperties,
    EnumProperty, parseToString, toEntity, fromEnity, InputNode, BaseProps, MediaInput
} from '../css';

import { Theme as ModuleTheme, theme, OutRule, parseModuleRule, OutProps as moduleOutProps } from '../modules';
import { parseMedia as _parseMedia } from '../basic';
export {
    theme,
    parseToString
};
export type Theme = ModuleTheme;

type SProps = effect.SProps & text.SProps;
type EProps = effect.EProps & text.EProps;
export type Props = moduleOutProps<SProps & EProps>;
const rule: OutRule<SProps, EProps, Theme> = foldRule()([effect.rule, text.rule]) as OutRule<SProps, EProps, Theme>;

export type OutProps<P extends CssProperties> = Input<P, Props>;
export type OutRule<I extends CssProperties, IEnum extends EnumProperty, T extends Theme= Theme> =
    Rule<I, IEnum, MediaInput<Props>, T>;
export const parseJSSRule = parseModuleRule(rule, theme);

// export const parse = parseModuleRule(rule, theme).compose(parseToString);

export const parseMediaRuleMap = _parseMedia<Props, Theme>(theme).compose(parseModuleRule(rule, theme));
// export const parseMedia = parseMediaJss.compose(parseToString);
export const parseRuleMap = <I extends CssProperties, IEnum extends EnumProperty, T extends Theme= Theme>
    (rules: Rule<I, IEnum, Props, T>, t: T) =>
    _parseMedia<Input<I & IEnum, Props>, T>(t).compose(_parseRule(rules, t)).compose(parseMediaRuleMap);

/* export const parseRule = <I extends CssProperties, IEnum extends EnumProperty, T extends Theme>
    (rules: Rule<I, IEnum, ModuleProps, T>, t: T) =>
    parseRuleJSS(rules, t); */

export const parseRuleJSS = <S extends CssProperties= {}, E extends EnumProperty= {}, T extends Theme= Theme>
    (rules: Rule<S, E, Props, T>, t: T) => (a: InputNode<OutProps<S & E>, T>): BaseProps =>
        toEntity(_parseRule(rules, t).compose(parseJSSRule).get(fromEnity(a)));
export const parseRule = <S extends CssProperties= {}, E extends EnumProperty= {}, T extends Theme= Theme>
    (rules: Rule<S, E, Props, T>, t: T) => (a: InputNode<OutProps<S & E>, T>): string =>
        parseToString.get(toEntity(_parseRule(rules, t).compose(parseJSSRule).get(fromEnity(a))));

export const parse = (a: InputNode<Props, Theme>): string =>
    parseToString.get(toEntity(parseJSSRule.get(fromEnity(a))));
export const parseJss = (a: InputNode<Props, Theme>): BaseProps =>
    toEntity(parseJSSRule.get(fromEnity(a)));

export const parseMedia = (a: InputNode<MediaInput<Props>, Theme>): string =>
    parseToString.get(toEntity(parseMediaRuleMap.get(fromEnity(a))));
export const parseMediaJss = (a: InputNode<MediaInput<Props>, Theme>): BaseProps =>
    toEntity(parseMediaRuleMap.get(fromEnity(a)));

export const parseMediaRule = <S extends CssProperties= {}, E extends EnumProperty= {}, T extends Theme= Theme>
    (rules: Rule<S, E, Props, T>, t: T) => (a: InputNode<MediaInput<OutProps<S & E>>, T>): string =>
        parseToString.get(toEntity(_parseRule(rules, t).compose(parseMediaRuleMap).get(fromEnity(a))));
export const parseMediaRuleJss = <S extends CssProperties= {}, E extends EnumProperty= {}, T extends Theme= Theme>
    (rules: Rule<S, E, Props, T>, t: T) => (a: InputNode<MediaInput<OutProps<S & E>>, T>): BaseProps =>
        toEntity(_parseRule(rules, t).compose(parseMediaRuleMap).get(fromEnity(a)));
