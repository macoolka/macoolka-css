import * as border from './border';
import * as box from './box';
import * as color from './color';
import * as container from './container';
import * as effect from './effect';
import * as flex from './flex';
import * as text from './text';
import {
    ExtendRule, foldRuleModule
} from '../CssRule';
import { Rule as ParentRule } from '../basic';
/**
# 基本属性

## 基本属性包含颜色、布局、边框、文本、Box 等属性。

基本属性是在单位属性的基础上定义的常用的属性。
- 属性直接选取方案中的变量，避免用户频繁操作方案
- 属性一般为枚举类型，避免项目中存在太多的参数
@language cn
 */
/**
# Common Property

## Common Property is property collection  including color layout border text box.

Common Property is extends from unit property.
- property actual's value normal is in the theme.
- property value's type normal is enum type for avoid using param in project
@mk
@name common
@memberof properties
@title Common Property
 */

export interface Theme extends border.Theme, box.Theme,
    color.Theme, container.Theme, effect.Theme, text.Theme {

}
/* export const theme: Theme = {
    ...border.theme, ...box.theme, ...color.theme,
    ...container.theme, ...effect.theme, ...text.theme,
}; */
export const lens = {
    ...box.lens
}
export interface SProps extends border.SProps, box.SProps, color.SProps
    , container.SProps, effect.SProps, flex.SProps, text.SProps {

}
export interface EProps extends border.EProps, box.EProps, color.EProps
    , container.EProps, effect.EProps, flex.EProps, text.EProps {

}
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>

export const ruleModule = foldRuleModule<Rule>()([
    border.ruleModule,
    box.ruleModule,
    color.ruleModule,
    container.ruleModule,
    effect.ruleModule,
    flex.ruleModule,
    text.ruleModule
])






