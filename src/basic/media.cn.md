<section class='chapter'>

# 媒体属性

## 媒体属性提供快捷的定义@media。

语法
```js

 mkMedia: [
   { width: '10px' },
   { width: '300px' },
   { width: '700' },
   { width: '800' }
 ]

```
生成

```css
@media screen and (max-width: 120em) {
  width: 700;
}
@media screen and (max-width: 93em) {
  width: 300px;
}
@media screen and (max-width: 80em) {
  width: 100%;
}
@media screen and (max-width: 50em) {
  width: 10px;
}
```

* 数组中的4个值分别对应4个屏幕宽度
* 值可以是属性也可以为选择器

</section>