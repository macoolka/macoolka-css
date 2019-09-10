/**
 * @file
 */
import { ExtendRule, RuleModule, Rule as _Rule } from '../CssRule';
import { isNumber } from 'macoolka-predicate';
import { getMonoid } from 'fp-ts/lib/Record';
import { fold } from 'fp-ts/lib/Monoid';
import { getObjectSemigroup } from 'fp-ts/lib/Semigroup';
import { UnitNumberProps, BaseProps } from './types';


/** 
Unit Property

Unit Property is extends Orginal Property

The set a default unit when property's value is number

<article>

Px Properties

<section class="cols2">
<div>

Including properties:

- backgroundSize
- borderBottomWidth
- borderLeftWidth
- borderRadius
- borderRightWidth,
- borderTopWidth
- borderWidth
- bottom
- fontSize
- left
- letterSpacing
- margin
- marginTop
- marginBottom
- marginLeft
- marginRight
- padding
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight
- right
- top
- flexBasis

</div>
<div>


```css
width:5 
```
equals
```css
width:5px 
```

</div>

</section>

</article>

<article>

Px or Percent Properties

- The will used % when number value is in middle of 0 and 1
- Others used px

<section class="cols2">
<div>

Including properties:

- width
- height
- maxWidth
- minWidth
- maxHeight
- minHeight

</div>
<div>


```css
width:0.5 
```
equals
```css
width:50% 
```

</div>

</section>

</article>

<article>

Ms Properties


<section class="cols2">
<div>

Including properties:

- transitionDuration
- transitionDelay
- animationDuration
- animationDelay

</div>
<div>


```css
transitionDelay: 500 
```
equals
```css
transitionDelay: 500ms 
```

</div>

</section>

</article> 

*@desczh
单位属性

单位属性是对基本属性的扩展。

单位属性主要目的是对没有写明单位的属性赋缺省单位。

单位属性覆盖原始属性，其它属性在单位属性上进行扩展。

例如
```css
width:5 
```
等于
```css
width:5px 
```

<article>

缺省单位px

<section class="cols2">
<div>

包含的属性名

- backgroundSize
- borderBottomWidth
- borderLeftWidth
- borderRadius
- borderRightWidth,
- borderTopWidth
- borderWidth
- bottom
- fontSize
- left
- letterSpacing
- margin
- marginTop
- marginBottom
- marginLeft
- marginRight
- padding
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight
- right
- top
- flexBasis

</div>
<div>

例如
```css
width:5 
```
等于
```css
width:5px 
```

</div>

</section>

</article>

<article>

缺省单位px或%

- 值在0-1的范围内用%
- 大于1用px

<section class="cols2">
<div>

包含的属性名

- width
- height
- maxWidth
- minWidth
- maxHeight
- minHeight

</div>
<div>

例如
```css
width:0.5 
```
等于
```css
width:50% 
```

</div>

</section>

</article>

<article>

缺省单位ms


<section class="cols2">
<div>

包含的属性名

- transitionDuration
- transitionDelay
- animationDuration
- animationDelay

</div>
<div>

例如
```css
transitionDelay: 500 
```
等于
```css
transitionDelay: 500ms 
```

</div>

</section>

</article>

*
* @memberof css
* @name unit
* @title Unit Property
*/

export interface Props {

}


const M = getMonoid(getObjectSemigroup<any>());
const pxOrPercent = (n: any): any => !isNumber(n) || n > 1 || n <= 0 ? px(n) : (n * 100) + '%';
const px = (n: any): any => isNumber(n) ? n + 'px' : n;
const ms = (n: any): any => isNumber(n) ? n + 'ms' : n;
/**
 * The Prop name that prop value's unit maybe is px
 * @desczh
 * 单位为px的属性名集合
 * 这些属性名对应的值单位是px
 */
const pxProps = [
    'backgroundSize', 'borderBottomWidth', 'borderLeftWidth', 'borderRadius', 'borderRightWidth',
    'borderTopWidth', 'borderWidth', 'bottom', 'fontSize',
    'left', 'letterSpacing', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'right', 'top',
    'flexBasis',
];
/**
 * The Prop name that prop value's unit maybe is px or Percent
 * @desczh
 * 单位为px或Percent的属性名集合
 * 这些属性名对应的值单位是px或Percent
 */
const pxOrPercentProps = ['width', 'height', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight'];
/**
 * The Prop name that prop value's unit maybe is ms
 * @desczh
 * 单位为ms的属性名集合
 * 这些属性名对应的值单位是ms
 */
const msProps = ['transitionDuration', 'transitionDelay', 'animationDuration', 'animationDelay'];
const pxArray = pxProps.map((a) => ({
    [a]: ({ value }: any) => ({ [a]: px(value) }),
}));
const pxOrPercentArray = pxOrPercentProps.map((a) => ({
    [a]: ({ value }: any) => ({ [a]: pxOrPercent(value) }),
}));
const msPropsArray = msProps.map((a) => ({
    [a]: ({ value }: any) => ({ [a]: ms(value) }),
}));
/**
 * Base Rule is output that is origial css
 * All Rule will final parse to the rule
 * @desczh
 * 基本规则输出是原始的css
 * 所有的规则最后解析到这里
 * @desczh
 */
export type BaseRule = _Rule<{}, {}, BaseProps, {}>
export type Rule = ExtendRule<BaseRule, UnitNumberProps, {}>
export const rule: Rule = {
    rule: fold(M)(pxArray.concat(pxOrPercentArray).concat(msPropsArray)),

};
export const ruleModule: RuleModule<Rule> = {
    theme: {},
    rule,

}
