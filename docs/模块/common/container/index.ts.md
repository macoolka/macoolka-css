---
title: common/container/index.ts
nav_order: 6
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [EProps (接口)](#eprops-%E6%8E%A5%E5%8F%A3)
- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [容器属性](#%E5%AE%B9%E5%99%A8%E5%B1%9E%E6%80%A7)
- [SProps (接口)](#sprops-%E6%8E%A5%E5%8F%A3)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [Theme (类型)](#theme-%E7%B1%BB%E5%9E%8B)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)
- [theme (常量)](#theme-%E5%B8%B8%E9%87%8F)

---

# EProps (接口)

**签名**

```ts
interface EProps {
  /**
   *绝对位置布局
   */
  mkAbsolute?: 'left' | 'right' | 'top' | 'bottom' | 'full'
  /**
   *块级布局
   */
  mkBlock?: 'center'
  /**
   *固定位置布局
   */
  mkFixed?: 'left' | 'right' | 'top' | 'bottom' | 'full'
  /**
   *FLEX布局
   */
  mkFlex?:
    | 'center'
    | 'column'
    | 'columnCenter'
    | 'row'
    | 'rowCenter'
    | 'rowReverse'
    | 'rowReverseCenter'
    | 'columnReverse'
    | 'columnReverseCenter'
    | 'rowAuto'
    | 'rowAutoCenter'
  /**
   *背景图片布局
   */
  mkImage?: 'center' | 'fullHeight' | 'fullWidth'
  /**
   *内联FLEX布局
   */
  mkInlineFlex?:
    | 'center'
    | 'column'
    | 'columnCenter'
    | 'row'
    | 'rowCenter'
    | 'rowReverse'
    | 'rowReverseCenter'
    | 'columnReverse'
    | 'columnReverseCenter'
    | 'rowAuto'
    | 'rowAutoCenter'
  /**
   *滚动条
   */
  mkScrollBar?: 'horizontal' | 'vertical' | 'both' | 'none'
  /**
   *Sticky layout
   */
  mkSticky?: 'left' | 'right' | 'top' | 'bottom' | 'full'
  /**
   *可视
   */
  mkVisible?: 'hidden' | 'none' | 'elementInvisible' | 'hiddenWidth' | 'hiddenHeight' | 'visibleHeight' | 'visible'
}
```

v0.2.0 中添加

# Props (接口)

# 容器属性

容器属性定义容器的布局和一些与容器有关的其它属性

- 容器一般包含其他元素，本身并不可见

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
   *在绝对位置中居中
   */
  mkAbsoluteCenter?: {
    width: number
    height: number
  }
  /**
   *在绝对位置顶右
   */
  mkAbsoluteTopRight?: {
    width: number
    height: number
  }
  /**
   *Z轴数值
   */
  mkZIndex?:
    | 'moon'
    | 'tooltip'
    | 'alertDesktop'
    | 'popup'
    | 'modal'
    | 'overlay'
    | 'dropdown'
    | 'alertMobile'
    | 'appBar'
    | 'nav'
    | 'bar'
    | 'base'
}
```

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

v0.2.0 中添加

# Theme (类型)

**签名**

```ts
export type Theme = {
  zIndex: {
    moon: number
    tooltip: number
    alertDesktop: number
    popup: number
    modal: number
    overlay: number
    dropdown: number
    alertMobile: number
    appBar: number
    nav: number
    bar: number
    base: number
  }
}
```

v0.2.0 中添加

# ruleModule (常量)

**签名**

```ts

export const ruleModule: any = ...

```

v0.2.0 中添加

# theme (常量)

**签名**

```ts

export const theme: Theme = ...

```

v0.2.0 中添加
