import { CssNode, map } from '../base/CssNode';
import { parse as _parse } from '../base/';
import { Rule, map as ruleMap, Input as RuleInput} from '../base/rule';
import { Props as UnitProps, Input as UnitInput, rule as unit } from './unit';
import * as media from './media';
import { BaseProps } from '../base/types';
import { compose } from 'mocoolka-fp/lib/function';
const theme = media.theme;
type Theme= media.Theme;
export {
    theme,
    Theme,
};
const unitMap = ruleMap(unit)({});
export type Props= RuleInput<UnitProps, BaseProps>;
export const parse = <I, IEnum extends {[key: string]: string}, T= any,
>(rules: Rule<I, IEnum, UnitProps, T>) => (t: T&media.Theme) =>
    (i: CssNode<RuleInput<
        media.Props<RuleInput<I&IEnum, UnitInput>>, RuleInput<I&IEnum, UnitInput>>>): CssNode<BaseProps> => {
        type inputType= RuleInput<I&IEnum, UnitInput>;
        const mapRule = ruleMap<I, IEnum, UnitInput, T>(rules)(t);
        const meidaMap = ruleMap<media.Props<inputType>, {}, inputType, T&media.Theme>(media.rule<inputType>())(t);
        return map(i,  compose(unitMap, mapRule, meidaMap));

    };
