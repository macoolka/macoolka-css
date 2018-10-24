<section class='chapter'>

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
   

</section>