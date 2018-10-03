import * as border from './border';
import * as box from './box';
import * as color from './color';
import * as container from './container';
import * as effect from './effect';
import * as flex from './flex';
import * as text from './text';
import { CssNode, map } from '../base/CssNode';
import { parse as _parse } from '../base/';
import { Rule, map as ruleMap, Input as RuleInput } from '../base/rule';
import * as media from '../basic/media';
import {Props as BasicProps} from '../basic';
import * as unit from '../basic/unit';
import { BaseProps } from '../base/types';
import { compose } from 'mocoolka-fp/lib/function';
export { toString } from '../base/print';
import { concatRule } from '../base/rule';
export type Theme = border.Theme & box.Theme & color.Theme & container.Theme & effect.Theme & text.Theme & media.Theme;
export const theme: Theme = { ...border.theme, ...box.theme, ...color.theme,
     ...container.theme, ...effect.theme, ...text.theme , ...media.theme};
export const rule = concatRule(concatRule(concatRule(
    concatRule(concatRule(concatRule(border.rule, box.rule), color.rule), container.rule)
    , effect.rule), flex.rule), text.rule);
export type _Props = border.Props & box.Props & color.Props& container.Props& effect.Props& flex.Props& text.Props;
export type Props= RuleInput<_Props, BasicProps>;

const mmap = (t: Theme) => ruleMap(rule)(t);
export const parseRule = <I, IEnum extends { [key: string]: string }, T= any,
    >(rules: Rule<I, IEnum, Props, T>) => (t: T & Theme) =>
        (i: CssNode<RuleInput<
            media.Props<RuleInput<I & IEnum, Props>>, RuleInput<I & IEnum, Props>>>): CssNode<BaseProps> => {
            type inputType = RuleInput<I & IEnum, Props>;
            const mapRule = ruleMap<I, IEnum, Props, T>(rules)(t);
            const unitRule = ruleMap<unit.Props, {}, BaseProps, T>(unit.rule)(t);
            const meidaMap = ruleMap<media.Props<inputType>, {}, inputType, T & Theme>(media.rule<inputType>())(t);
            const mediaResult = map(i, meidaMap);
            const currentResult = map(mediaResult, mapRule);
            const moduleResult = map(currentResult, mmap(theme));
            return map(moduleResult, unitRule);
            // return map(i, compose(unitRule, mmap(theme), mapRule, meidaMap));
        };

export const parse = (t: Theme) =>
    (i: CssNode<RuleInput<media.Props<Props>, Props>>): CssNode<BaseProps> => {
        const meidaMap = ruleMap<media.Props<Props>, {}, Props, Theme>(media.rule<Props>())(t);
        const unitRule = ruleMap<unit.Props, {}, BaseProps, Theme>(unit.rule)(t);
        return map(i, compose(unitRule, mmap(theme), meidaMap));
    };
