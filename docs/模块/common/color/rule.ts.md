---
title: common/color/rule.ts
nav_order: 5
parent: 模块
---

# 概述

Border

---

<h2 class="text-delta">目录</h2>

- [ColorValue (接口)](#colorvalue-%E6%8E%A5%E5%8F%A3)
- [EProps (接口)](#eprops-%E6%8E%A5%E5%8F%A3)
- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [颜色属性](#%E9%A2%9C%E8%89%B2%E5%B1%9E%E6%80%A7)
- [SProps (接口)](#sprops-%E6%8E%A5%E5%8F%A3)
- [BorderColor (类型)](#bordercolor-%E7%B1%BB%E5%9E%8B)
- [Color (类型)](#color-%E7%B1%BB%E5%9E%8B)
- [ColorObject (类型)](#colorobject-%E7%B1%BB%E5%9E%8B)
- [OriginColor (类型)](#origincolor-%E7%B1%BB%E5%9E%8B)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [TextColor (类型)](#textcolor-%E7%B1%BB%E5%9E%8B)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)
- [getColorValue (函数)](#getcolorvalue-%E5%87%BD%E6%95%B0)
- [getDefaultColorTextValue (函数)](#getdefaultcolortextvalue-%E5%87%BD%E6%95%B0)
- [getTextColor (函数)](#gettextcolor-%E5%87%BD%E6%95%B0)
- [getTextColorValue (函数)](#gettextcolorvalue-%E5%87%BD%E6%95%B0)

---

# ColorValue (接口)

**签名**

```ts
interface ColorValue {
  inverted?: boolean
  level?: Level
  name?: Color
  opacity?: Opacity
}
```

v0.2.0 中添加

# EProps (接口)

**签名**

```ts
interface EProps {}
```

v0.2.0 中添加

# Props (接口)

# 颜色属性

定义文本、背景、边框的的颜色

颜色具体值定义在方案中。

等价于 color={value} | backgroundColor={value} | borderColor={value}

mkColor 同时定义本文颜色和背景颜色。其中文本颜色会自动根据当前背景颜色亮度赋值

**签名**

```ts
interface Props extends EProps, SProps {}
```

v0.2.0 中添加

# SProps (接口)

**签名**

```ts
interface SProps {
  /**
   *背景颜色
   */
  mkBgColor?: ColorObject
  /**
   *边框颜色
   */
  mkBorderColor?: ColorObject
  /**
   *背景颜色-文本颜色根据亮度自动赋值
   */
  mkColor?: ColorObject
  /**
   *透明度
   */
  mkOpacity?: Opacity
  /**
   *文本颜色
   */
  mkTextColor?: ColorObject
}
```

v0.2.0 中添加

# BorderColor (类型)

**签名**

```ts
export type BorderColor = Color
```

v0.2.0 中添加

# Color (类型)

**签名**

```ts
export type Color = ColorNames | OriginColor
```

v0.2.0 中添加

# ColorObject (类型)

**签名**

```ts
export type ColorObject = Color | ColorValue
```

v0.2.0 中添加

# OriginColor (类型)

**签名**

```ts
export type OriginColor = 'inherit' | 'currentColor' | 'transparent'
```

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

v0.2.0 中添加

# TextColor (类型)

**签名**

```ts
export type TextColor = Color
```

v0.2.0 中添加

# ruleModule (常量)

**签名**

```ts

export const ruleModule: any = ...

```

v0.2.0 中添加

# getColorValue (函数)

**签名**

```ts

export const getColorValue = ({ theme, source }: { theme: Theme, source?: any }) => ...

```

v0.2.0 中添加

# getDefaultColorTextValue (函数)

**签名**

```ts

export const getDefaultColorTextValue = ({ value, source }: { value: ColorObject, source?: any }): {
    name: Color,
    level: Level,
    inverted: boolean,
    opacity: Opacity
} => ...

```

v0.2.0 中添加

# getTextColor (函数)

**签名**

```ts

export const getTextColor = ({ source }: { source?: any }) => ...

```

v0.2.0 中添加

# getTextColorValue (函数)

**签名**

```ts

export const getTextColorValue = ({ theme, source }: { theme: Theme, source?: any }) => ...

```

v0.2.0 中添加
