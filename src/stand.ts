import {
    parse
} from './CssRule';
import {  ruleModule,Rule as AdvanceRule} from './advance';

import {  extendRule ,Rule as SelectorRule} from './selector';
import { parseProp as _parseProp, GetRuleTheme,GetRuleProp ,CssNode} from './CssRule'


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
@name properties
@title Properties
 */


export const standRuleModule = extendRule<AdvanceRule>(ruleModule)
export type StandRule = SelectorRule<AdvanceRule>
export const parseStandProp = _parseProp(standRuleModule);
export const parseStand = parse(standRuleModule)
export type StandTheme = GetRuleTheme<StandRule>
export type StandProps=CssNode<GetRuleProp<StandRule>>



