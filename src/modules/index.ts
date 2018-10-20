import * as border from './border';
import * as box from './box';
import * as color from './color';
import * as container from './container';
import * as effect from './effect';
import * as flex from './flex';
import * as text from './text';
import { Rule,
      foldRule , EnumProperty, CssProperties,
       parseRule, Input, toEntity, fromEnity, InputNode, BaseProps} from '../css';
import * as media from '../basic/media';
import {   UnitProps , OutRule as OutBasicRule, parseUnitRule} from '../basic';
export type Theme = border.Theme & box.Theme &
color.Theme & container.Theme & effect.Theme & text.Theme & media.Theme;
export const theme: Theme = {
    ...border.theme, ...box.theme, ...color.theme,
    ...container.theme, ...effect.theme, ...text.theme, ...media.theme,
};
type SProps = border.SProps & box.SProps & color.SProps
    & container.SProps & effect.SProps & flex.SProps & text.SProps;
type EProps = border.EProps & box.EProps & color.EProps
    & container.EProps & effect.EProps & flex.EProps & text.EProps;
export const rule: OutBasicRule<SProps, EProps, Theme> =
    foldRule<SProps, EProps, UnitProps, Theme>()([border.rule, box.rule, color.rule,
    container.rule, effect.rule, flex.rule, text.rule] as any);
export type ModuleProps= Input<SProps&EProps, UnitProps>;
/* export interface ModuleProps extends IProps, UnitProps {

} */
export type OutProps<P extends CssProperties>= Input<P, ModuleProps>;
export type OutRule<I extends CssProperties, IEnum extends EnumProperty, T extends Theme= Theme>=
Rule<I, IEnum, ModuleProps, T>;
export const parseModule = parseUnitRule(rule, theme);
export const parseModuleRule = <I extends CssProperties= {}, IEnum extends EnumProperty= {}, T extends Theme= Theme>
(rules: Rule<I, IEnum, ModuleProps, T>, t: T) =>
parseRule(rules, t).compose(parseModule);
export const parseModuleProp = <S extends CssProperties= {}, E extends EnumProperty= {}, T extends Theme= Theme>
(rules: Rule<S, E, ModuleProps, T>, t: T ) => (a: InputNode<Input<S & E & ModuleProps, BaseProps>, T>): BaseProps =>
toEntity(parseRule(rules, t).compose(parseModule).get(fromEnity(a)));

export const parseModuleProp1 = (a: InputNode<Input< ModuleProps, BaseProps>, Theme>): BaseProps =>
toEntity(parseModule.get(fromEnity(a)));
