import * as border from './border';
import * as box from './box';
import * as color from './color';
import * as container from './container';
import * as effect from './effect';
import * as flex from './flex';
import * as text from './text';
import { CssNode } from '../base/CssNode';
import { Rule, Input as RuleInput, parse as parseRule, parseRule as _parseRule, fold as foldRule } from '../base/rule';
import * as media from '../basic/media';
import { parseMedia, parseUnit, UnitOutput, UnitProps } from '../basic';
import { BaseProps } from '../base/types';
import { compose } from 'mocoolka-fp/lib/function';
export { toString } from '../base/print';
export type Theme = border.Theme & box.Theme & color.Theme & container.Theme & effect.Theme & text.Theme & media.Theme;
export const theme: Theme = {
    ...border.theme, ...box.theme, ...color.theme,
    ...container.theme, ...effect.theme, ...text.theme, ...media.theme,
};

interface IProps extends Partial<border.Props & box.Props
    & color.Props & container.Props & effect.Props & flex.Props & text.Props> {

}
type SProps = border.SProps & box.SProps & color.SProps
    & container.SProps & effect.SProps & flex.SProps & text.SProps;
type EProps = border.EProps & box.EProps & color.EProps
    & container.EProps & effect.EProps & flex.EProps & text.EProps;
export const rule: Rule<SProps, EProps, UnitProps, Theme> =
    foldRule()([border.rule, box.rule, color.rule,
    container.rule, effect.rule, flex.rule, text.rule]);
export interface ModuleProps extends IProps, UnitProps {

}
export type ModuleOutput<P> = RuleInput<P, ModuleProps>;
export const parseModule = <P, T= any>(t: T & Theme) =>
    (i: CssNode<ModuleOutput<P>>): CssNode<BaseProps> =>
        compose(parseUnit(t), parseRule(rule)(t), parseMedia<UnitOutput<IProps>>(t))(i);
export const parseModuleRule = <I, IEnum extends { [key: string]: string }, T= any,
    >(rules: Rule<I, IEnum, ModuleProps, T>) => (t: T & Theme) =>
        (i: CssNode<ModuleOutput<I & IEnum>>): CssNode<BaseProps> =>
            _parseRule(parseModule(t))(rules)(t)(i);
