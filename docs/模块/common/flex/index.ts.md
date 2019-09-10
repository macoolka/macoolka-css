---
title: common/flex/index.ts
nav_order: 8
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [EProps (接口)](#eprops-%E6%8E%A5%E5%8F%A3)
- [FlexContainerProps (接口)](#flexcontainerprops-%E6%8E%A5%E5%8F%A3)
- [FlexItemProps (接口)](#flexitemprops-%E6%8E%A5%E5%8F%A3)
- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [SProps (接口)](#sprops-%E6%8E%A5%E5%8F%A3)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [flexContainerRule (常量)](#flexcontainerrule-%E5%B8%B8%E9%87%8F)
- [flexItemRule (常量)](#flexitemrule-%E5%B8%B8%E9%87%8F)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)

---

# EProps (接口)

**签名**

```ts
interface EProps {}
```

v0.2.0 中添加

# FlexContainerProps (接口)

**签名**

```ts
interface FlexContainerProps {
  /**
   *Align the flex items
   */
  mkFlexAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'inherit'
  /**
   *Align the flex lines.
   */
  mkFlexAlignLines?:
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start'
    | 'inherit'
  /**
   *Align the flex items vertically.
   */
  mkFlexAlignV?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'inherit'
  /**
   *The direction to stack the flex items.
   */
  mkFlexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit'
  /**
   *Items should wrap or not.
   */
  mkFlexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit'
}
```

v0.2.0 中添加

# FlexItemProps (接口)

**签名**

```ts
interface FlexItemProps {
  /**
   *Align the flex item
   */
  mkFlexItemAlign?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'auto'
    | 'baseline'
    | 'left'
    | 'normal'
    | 'right'
    | 'stretch'
    | 'inherit'
  /**
   *Align the flex item vertically.
   */
  mkFlexItemAlignV?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'auto'
    | 'baseline'
    | 'normal'
    | 'stretch'
    | 'inherit'
  /**
   *The item will grow relative to the flex items.
   */
  mkFlexItemGrow?: number
  /**
   *The order of the flex item.
   */
  mkFlexItemOrder?: number
  /**
   *The item will shrink relative to the flex items.
   */
  mkFlexItemShrink?: number
  /**
   *The initial length of a item.
   */
  mkFlexItemWidth?: number | string
}
```

v0.2.0 中添加

# Props (接口)

Flex properties

**签名**

```ts
interface Props extends SProps, EProps {}
```

v0.2.0 中添加

# SProps (接口)

**签名**

```ts
interface SProps extends FlexContainerProps, FlexItemProps {}
```

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<ParentRule, Props, {}>
```

v0.2.0 中添加

# flexContainerRule (常量)

**签名**

```ts

export const flexContainerRule: ExtendRule<ParentRule, FlexContainerProps, {}> = ...

```

v0.2.0 中添加

# flexItemRule (常量)

**签名**

```ts

export const flexItemRule: ExtendRule<ParentRule, FlexItemProps, {}> = ...

```

v0.2.0 中添加

# ruleModule (常量)

**签名**

```ts

export const ruleModule: any = ...

```

v0.2.0 中添加
