<section class='chapter'>

# 基本属性

## 基本属性包含颜色、布局、边框、文本、Box 等属性。

基本属性是在单位属性的基础上定义的常用的属性。
* 属性直接选取方案中的变量，避免用户频繁操作方案
* 属性一般为枚举类型，避免项目中存在太多的参数

<article>

## 颜色类属性

定义文本、背景、边框的的颜色

<section class="cols3">
<div>

### mkTextColor（定义文本颜色）

文本颜色具体值定义在方案中。

等价于 color={value}
</div>
<div>

彩色

| 属性值 | 描述  | 
| --- | --- | 
| main | 主色  | 
| accent | 强调色 | 
| success | 成功 | 
| warning | 警告 | 
| alert | 错误 | 

</div>
<div>

单色

| 属性值 | 描述  | 
| --- | --- | 
| disabled | 状态不能颜色 | 
| primary | 主要文本 | 
| secondary | 辅助文本 | 
| hint | 文本提示 | 

</div>

</section>

</article>


</section>