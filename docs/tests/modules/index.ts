import * as border from './border';
import * as box from './box';
import * as color from './color';
import * as container from './container';
import * as effect from './effect';
import * as flex from './flex';
import * as text from './text';
import { Rule,
      foldRule ,  CssProperties,
        Input, toEntity, fromEnity, InputNode, BaseProps} from '../css';
import * as media from '../basic/media';
import {   UnitProps , OutRule as OutBasicRule, parseUnitRule,MediaInput,parseRule} from '../basic';
export interface Theme extends border.Theme , box.Theme ,
color.Theme , container.Theme , effect.Theme , text.Theme , media.Theme{

}
export const theme: Theme = {
    ...border.theme, ...box.theme, ...color.theme,
    ...container.theme, ...effect.theme, ...text.theme, ...media.theme,
};
interface SProps extends border.SProps , box.SProps , color.SProps
    ,container.SProps , effect.SProps , flex.SProps ,text.SProps{

    }
interface EProps extends border.EProps , box.EProps , color.EProps
    ,container.EProps , effect.EProps , flex.EProps , text.EProps{

    }
interface Props extends SProps,EProps{

}
export const rule: OutBasicRule<SProps, EProps, Theme> =
    foldRule<SProps, EProps, MediaInput<UnitProps>, Theme>()([border.rule, box.rule, color.rule,
    container.rule, effect.rule, flex.rule, text.rule] as any);
export interface ModuleProps extends Props, UnitProps{

};
/* export interface ModuleProps extends IProps, UnitProps {

} */
export type OutProps<P extends CssProperties>= Input<P, ModuleProps>;
export type OutRule<I extends CssProperties, IEnum extends CssProperties, T extends Theme= Theme>=
Rule<I, IEnum, MediaInput<ModuleProps>, T>;
export const parseModule =(t:Theme=theme)=> parseUnitRule(rule, t);
export const parseModuleRule = <I extends CssProperties= {}, IEnum extends CssProperties= {}, T extends Theme= Theme>
(rules: Rule<I, IEnum, MediaInput<ModuleProps>, T>, t: T) =>
parseRule(rules, t).compose(parseModule(t));
export const parseModuleProp = <S extends CssProperties= {}, E extends CssProperties= {}, T extends Theme= Theme>
(rules: Rule<S, E, MediaInput<ModuleProps>, T>, t: T ) => (a: InputNode<Input<S & E & ModuleProps, BaseProps>, T>): BaseProps =>
toEntity(parseRule(rules, t).compose(parseModule(t)).get(fromEnity(a)));

export const parseModuleProp1 = (a: InputNode<MediaInput<Input< ModuleProps, BaseProps>>, Theme>): BaseProps =>
toEntity(parseModule(a.theme).get(fromEnity(a)));
