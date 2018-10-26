import { OutRule, InputOverwrite, BaseProps } from '../css';
import { isNumber } from 'mocoolka-fp/lib/predicate';
import { getDictionaryMonoid, fold } from 'mocoolka-fp/lib/Monoid';
import { getObjectSemigroup } from 'mocoolka-fp/lib/Semigroup';
import { UnitNumberProps } from './types';
/* 
# Unit Property

## Unit Property is extends Orginal Property

The set a default unit when property's value is number

```css
width:5 
```
equal
```css
width:5px 
```

<article>

## Px Properties

<section class="cols2">
<div>

### Including

* backgroundSize
* borderBottomWidth
* borderLeftWidth
* borderRadius
* borderRightWidth,
* borderTopWidth
* borderWidth
* bottom
* fontSize
* left
* letterSpacing
* lineHeight
* margin
* marginTop
* marginBottom
* marginLeft
* marginRight
* padding
* paddingTop
* paddingBottom
* paddingLeft
* paddingRight
* right
* top
* flexBasis

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

## Px or Percent Properties

* The will used % whene number value is in middle of 0 and 1
* Others used px

<section class="cols2">
<div>

## Include

* width
* height
* maxWidth
* minWidth
* maxHeight
* minHeight

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

## Ms Properties


<section class="cols2">
<div>

### including

* transitionDuration
* transitionDelay
* animationDuration
* animationDelay

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

@mk
@name unit
@title Unit Property
*/
/**
# 单位属性

## 单位属性是对基本属性的扩展。

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

## 缺省单位px

<section class="cols2">
<div>

### 包含的属性名

* backgroundSize
* borderBottomWidth
* borderLeftWidth
* borderRadius
* borderRightWidth,
* borderTopWidth
* borderWidth
* bottom
* fontSize
* left
* letterSpacing
* lineHeight
* margin
* marginTop
* marginBottom
* marginLeft
* marginRight
* padding
* paddingTop
* paddingBottom
* paddingLeft
* paddingRight
* right
* top
* flexBasis

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

## 缺省单位px或%

* 值在0-1的范围内用%
* 大于1用px

<section class="cols2">
<div>

## 包含的属性名

* width
* height
* maxWidth
* minWidth
* maxHeight
* minHeight

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

## 缺省单位ms


<section class="cols2">
<div>

### 包含的属性名

* transitionDuration
* transitionDelay
* animationDuration
* animationDelay

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
@language cn
@title 单位属性
 */
export interface Props {

}


const M = getDictionaryMonoid(getObjectSemigroup<any>());
const pxOrPercent = (n: any): any => !isNumber(n) || n > 1 ? px(n) : (n * 100) + '%';
const px = (n: any): any => isNumber(n) ? n + 'px' : n;
const ms = (n: any): any => isNumber(n) ? n + 'ms' : n;
export const pxProps = [
    'backgroundSize', 'borderBottomWidth', 'borderLeftWidth', 'borderRadius', 'borderRightWidth',
    'borderTopWidth', 'borderWidth', 'bottom', 'fontSize',
    'left', 'letterSpacing', 'lineHeight', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'right', 'top',
    'flexBasis',
];
export const pxOrPercentProps = ['width', 'height', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight'];
export const msProps = ['transitionDuration', 'transitionDelay', 'animationDuration', 'animationDelay'];
const pxArray = pxProps.map((a) => ({
    [a]: ({ value }: any) => ({ [a]: px(value) }),
}));
const pxOrPercentArray = pxOrPercentProps.map((a) => ({
    [a]: ({ value }: any) => ({ [a]: pxOrPercent(value) }),
}));
const msPropsArray = msProps.map((a) => ({
    [a]: ({ value }: any) => ({ [a]: ms(value) }),
}));
export const rule: OutRule<UnitNumberProps> = {
    rule: fold(M)(pxArray.concat(pxOrPercentArray).concat(msPropsArray)),
};
export type UnitProps = InputOverwrite<UnitNumberProps, BaseProps>;
