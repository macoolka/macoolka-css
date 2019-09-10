---
title: common/border/index.ts
nav_order: 3
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [EProps (接口)](#eprops-%E6%8E%A5%E5%8F%A3)
- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [边框属性](#%E8%BE%B9%E6%A1%86%E5%B1%9E%E6%80%A7)
- [SProps (接口)](#sprops-%E6%8E%A5%E5%8F%A3)
- [Theme (接口)](#theme-%E6%8E%A5%E5%8F%A3)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)
- [theme (常量)](#theme-%E5%B8%B8%E9%87%8F)

---

# EProps (接口)

**签名**

```ts
interface EProps {
  /**
   *边框样式
   */
  mkBorder?: 'none' | 'bordered' | 'top' | 'bottom' | 'left' | 'right' | 'topBar' | 'bottomBar' | 'leftBar' | 'rightBar'
}
```

v0.2.0 中添加

# Props (接口)

# 边框属性

定义边框和阴影

**签名**

```ts
interface Props extends SProps, EProps {}
```

v0.2.0 中添加

# SProps (接口)

**签名**

```ts
interface SProps {
  /**
   *边框曲率
   */
  mkBorderRadius?: Level
  /**
   *圆形
   */
  mkRounded?: boolean
  /**
   *阴影值
   */
  mkShadow?: keyof Theme['border']['shadows']
}
```

v0.2.0 中添加

# Theme (接口)

**签名**

```ts
interface Theme {
  border: {
    shadows: {
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
      12: string
      13: string
      14: string
      15: string
      16: string
      17: string
      18: string
      19: string
      20: string
      21: string
      22: string
      23: string
      24: string
    }
    radius: {
      [key in Level]: number
    }
  }
}
```

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

v0.2.0 中添加

# ruleModule (常量)

**签名**

```ts

export const : any = ...

```

v0.2.0 中添加

# theme (常量)

**签名**

```ts

export const theme: Theme = ...

```

v0.2.0 中添加
