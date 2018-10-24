import { Rule,  Input, parseRule as _parseRule,   CssTheme,
     CssProperties, parseRuleOverwrite, toEntity, fromEnity, InputNode, BaseProps} from '../css';
import {  UnitProps, rule as unitRule } from './unit';
import { Props as MediaProps, theme as mediaTheme, rule as mediaRule, Theme as MediaTheme } from './media';

const theme = mediaTheme;
type Theme = MediaTheme;
export {
    theme,
    Theme,
    MediaProps,
    UnitProps,
   
};
export type MediaInput<P extends CssProperties>= Input<MediaProps<P>, P >;
export type OutProps<P extends CssProperties>= Input<P, UnitProps>;
export type OutTheme<T extends CssTheme>=MediaTheme&T
export type OutRule<I extends CssProperties, IEnum extends object, T extends MediaTheme=MediaTheme>=
Rule<I, IEnum, MediaInput<UnitProps>, OutTheme<T>>;

export const parseUnitRule = <I extends CssProperties, IEnum extends CssProperties, T extends MediaTheme= MediaTheme>
(rules: Rule<I, IEnum, MediaInput<UnitProps>, T>, t: T) =>
_parseRule(rules, t).compose(parseUnit);
export const parseUnitProp = <S extends CssProperties, E extends CssProperties, T extends MediaTheme= MediaTheme>
(rules: Rule<S, E, UnitProps, T>, t: T) => (a: InputNode<S & E & UnitProps, T>): BaseProps =>
toEntity(_parseRule(rules, t).compose(parseUnit).get(fromEnity(a)))
;

export const parseMedia = <I extends CssProperties,
 T extends MediaTheme= MediaTheme>(t: T) => _parseRule(mediaRule<I, T>(), t);
export const parseUnit = parseRuleOverwrite(unitRule, {});

export const parseRule = <I extends object= {},
    IEnums extends object= {}, O extends object= {}, T extends Theme=Theme>
    (rule: Rule<I, IEnums, MediaInput<O>, T>,
     themeDefaultValue: T) =>  _parseRule(rule,themeDefaultValue).compose(parseMedia<O,T>(themeDefaultValue))


