---
title: basic/unit.ts
nav_order: 2
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [BaseRule (类型)](#baserule-%E7%B1%BB%E5%9E%8B)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [rule (常量)](#rule-%E5%B8%B8%E9%87%8F)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)

---

# Props (接口)

单位属性

单位属性是对基本属性的扩展。

单位属性主要目的是对没有写明单位的属性赋缺省单位。

单位属性覆盖原始属性，其它属性在单位属性上进行扩展。

例如

```css
width: 5;
```

等于

```css
width: 5px;
```

<article>

缺省单位 px

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
width: 5;
```

等于

```css
width: 5px;
```

</div>

</section>

</article>

<article>

缺省单位 px 或%

- 值在 0-1 的范围内用%
- 大于 1 用 px

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
width: 0.5;
```

等于

```css
width: 50%;
```

</div>

</section>

</article>

<article>

缺省单位 ms

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
transitiondelay: 500;
```

等于

```css
transitiondelay: 500ms;
```

</div>

</section>

</article>

**签名**

```ts
interface Props {}
```

v0.2.0 中添加

# BaseRule (类型)

**签名**

```ts
export type BaseRule = _Rule<{}, {}, BaseProps, {}>
```

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<BaseRule, UnitNumberProps, {}>
```

v0.2.0 中添加

# rule (常量)

**签名**

```ts

export const rule: Rule = ...

```

v0.2.0 中添加

# ruleModule (常量)

**签名**

```ts

export const ruleModule: RuleModule<Rule> = ...

```

v0.2.0 中添加
