import * as border from './border';
import * as box from './box';
import * as color from './color';
import * as container from './container';
import * as effect from './effect';
import * as flex from './flex';
import * as text from './text';
import { CssNode } from '../base/CssNode';
import {Rule, Input as RuleInput, parse as parseRule, parseRule as _parseRule } from '../base/rule';
import * as media from '../basic/media';
import {parseMedia, parseUnit, MediaInput, UnitOutput} from '../basic';
// import * as unit from '../basic/unit';
import { BaseProps } from '../base/types';
import { compose } from 'mocoolka-fp/lib/function';
export { toString } from '../base/print';
import { concatRule } from '../base/rule';
export type Theme = border.Theme & box.Theme & color.Theme & container.Theme & effect.Theme & text.Theme & media.Theme;
export const theme: Theme = { ...border.theme, ...box.theme, ...color.theme,
     ...container.theme, ...effect.theme, ...text.theme , ...media.theme};
const rule = concatRule(concatRule(concatRule(
    concatRule(concatRule(concatRule(border.rule, box.rule), color.rule), container.rule)
    , effect.rule), flex.rule), text.rule);
type _Props = border.Props & box.Props & color.Props& container.Props& effect.Props& flex.Props& text.Props;
export type Props= MediaInput<UnitOutput<_Props>>;
export type ModuleOutput<P>= RuleInput<P, Props>;
export const parseModule = <P, T= any>(t: T & Theme) => (i: CssNode<ModuleOutput<P>>): CssNode<BaseProps> =>
compose(parseUnit(t), parseRule(rule)(t), parseMedia<UnitOutput<_Props>>(t))(i);
/* export const parsePropRule = <I, IEnum extends { [key: string]: string }, T= any,
    >(rules: RuleC<I, IEnum, Props, T>) => (t: T & Theme) =>
        (i: CssNode<MediaInput<ModuleOutput<I&IEnum>>>): CssNode<BaseProps> => {
               const mediaResult= parseMedia<ModuleOutput<I&IEnum>>(t)(i);
              return  parseRuleC(parseModule(t))(rules as any)(t)(mediaResult);

        }; */
export const parseModuleRule = <I, IEnum extends { [key: string]: string }, T= any,
        >(rules: Rule<I, IEnum, Props, T>) => (t: T&Theme) =>
            (i: CssNode<ModuleOutput<I&IEnum>>): CssNode<BaseProps> =>
                  _parseRule(parseModule(t))(rules)(t)(i);

/* export const parse = (t: Theme) =>
    (i: CssNode<RuleInput<media.Props<Props>, Props>>): CssNode<BaseProps> => {
        const meidaMap = ruleMap<media.Props<Props>, {}, Props, Theme>(media.rule<Props>())(t);
        const unitRule = ruleMap<unit.Props, {}, BaseProps, Theme>(unit.rule)(t);
        return map(i, compose(unitRule, mmap(theme), meidaMap));
    }; */
