import { CssNode } from '../base/CssNode';
import { Rule, Input as RuleInput, parse as parseRule } from '../base/rule';
import {  UnitProps, rule as unit } from './unit';
import { Props as MediaProps, theme as mediaTheme, rule as mediaRule, Theme as MediaTheme } from './media';
import { BaseProps } from '../base/types';
import { compose } from 'mocoolka-fp/lib/function';
const theme = mediaTheme;
type Theme = MediaTheme;
export {
    theme,
    Theme,
    MediaProps,
    UnitProps,
};
export const parseUnitRule = <I, IEnum extends { [key: string]: string }, T= any,
    >(rules: Rule<I, IEnum, UnitProps, T>) =>
     (t: T) =>
        (i: CssNode<UnitOutput<I&IEnum>>): CssNode<BaseProps> => {
            return compose(parseRule(unit)(t), parseRule(rules)(t))(i);
        };
export type MediaInput<P>= RuleInput<MediaProps<P>, P >;
export type UnitOutput<P>= RuleInput<P, UnitProps>;
export const parseUnit = <P, T= any>(t: T) =>
(i: CssNode<UnitOutput<P>>): CssNode<BaseProps> =>
 parseRule(unit)(t)(i);
export const parseMedia = <P, T= any>(t: T & MediaTheme) =>
 (i: CssNode<MediaInput<P>>): CssNode<P> =>
  parseRule(mediaRule<P>())(t)(i);
