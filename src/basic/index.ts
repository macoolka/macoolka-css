import { Rule,  Input, parseRule,  EnumProperty, CssTheme,
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
export type OutRule<I extends CssProperties, IEnum extends EnumProperty, T extends CssTheme= {}>=
Rule<I, IEnum, UnitProps, T>;

export const parseUnitRule = <I extends CssProperties, IEnum extends EnumProperty, T extends CssTheme= {}>
(rules: Rule<I, IEnum, UnitProps, T>, t: T) =>
parseRule(rules, t).compose(parseUnit);
export const parseUnitProp = <S extends CssProperties, E extends EnumProperty, T extends CssTheme= {}>
(rules: Rule<S, E, UnitProps, T>, t: T) => (a: InputNode<Input<S & E & UnitProps, BaseProps>, T>): BaseProps =>
toEntity(parseRule(rules, t).compose(parseUnit).get(fromEnity(a)))
;
export const parseMedia = <I extends CssProperties,
 T extends MediaTheme= MediaTheme>(t: T) => parseRule(mediaRule<I, T>(), t);
export const parseUnit = parseRuleOverwrite(unitRule, {});

/*      (t: T) =>
        (i: CssNode<UnitOutput<I&IEnum>>): CssNode<BaseProps> => {
            return compose(parseRule(unit)(t), parse(rules)(t))(i);
        };
        export const parseUnitRule1 = <I, IEnum extends { [key: string]: string }, T= any,
        >(rules: Rule<I, IEnum, UnitProps, T>) =>
         (t: T) =>new Getter<CssNode<UnitOutput<I&IEnum>>,CssNode<BaseProps>>(a=>{
            return compose(parseRule(unit)(t), parse(rules)(t))(a);
         })

export const parseUnit = <P, T= any>(t: T) =>
(i: CssNode<UnitOutput<P>>): CssNode<BaseProps> =>
 parseRule(unit)(t)(i);
export const parseMedia = <P, T= any>(t: T & MediaTheme) =>
 (i: CssNode<MediaInput<P>>): CssNode<P> =>
  parseRule(mediaRule<P>())(t)(i); */
