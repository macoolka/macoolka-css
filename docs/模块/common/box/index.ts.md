---
title: common/box/index.ts
nav_order: 4
parent: 模块
---

# 概述

Border

---

<h2 class="text-delta">目录</h2>

- [EProps (接口)](#eprops-%E6%8E%A5%E5%8F%A3)
- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [盒子属性](#%E7%9B%92%E5%AD%90%E5%B1%9E%E6%80%A7)
- [SProps (接口)](#sprops-%E6%8E%A5%E5%8F%A3)
- [Box (类型)](#box-%E7%B1%BB%E5%9E%8B)
- [ContentWith (类型)](#contentwith-%E7%B1%BB%E5%9E%8B)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [SpaceKeys (类型)](#spacekeys-%E7%B1%BB%E5%9E%8B)
- [Theme (类型)](#theme-%E7%B1%BB%E5%9E%8B)
- [lens (常量)](#lens-%E5%B8%B8%E9%87%8F)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)
- [theme (常量)](#theme-%E5%B8%B8%E9%87%8F)
- [mapProps (函数)](#mapprops-%E5%87%BD%E6%95%B0)

---

# EProps (接口)

**签名**

```ts
interface EProps {
  /**
   *高度
   */
  mkHeight?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *最大高度
   */
  mkMaxHeight?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *最大宽度
   */
  mkMaxWidth?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *最小高度
   */
  mkMinHeight?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *最小宽度
   */
  mkMinWidth?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *宽度
   */
  mkWidth?: 'full' | 'fullScreen' | 'none' | 'inherit'
}
```

v0.2.0 中添加

# Props (接口)

# 盒子属性

定义了盒子的高度、宽度、内边距、外边距

元素根据大小被拆分为三种类型

- 内容元素 > 容器元素 > 普通元素

距离拆分为两种。

- 泳道 > 普通

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
   *水平外边距(数值)
   */
  marginH?: number | string
  /**
   *垂直外边距
   */
  marginV?: number | string
  /**
   *Bar高度
   */
  mkBarHeight?: Level
  /**
   *子元素底边距
   */
  mkChildMarginBottom?: Level
  /**
   *子元素左边距
   */
  mkChildMarginLeft?: Level
  /**
   *子元素右边距
   */
  mkChildMarginRight?: Level
  /**
   *子元素顶边距
   */
  mkChildMarginTop?: Level
  /**
   *容器高度
   */
  mkContainerHeight?: Level
  /**
   *容器宽度
   */
  mkContainerWidth?: Level
  /**
   *内容区宽度
   */
  mkContentWidth?: Level | 'nav'
  /**
   *元素高度
   */
  mkElementHeight?: Level
  /**
   *元素宽度
   */
  mkElementWidth?: Level
  /**
   *外边距
   */
  mkMargin?: SpaceKeys
  /**
   *底部外边距
   */
  mkMarginBottom?: SpaceKeys
  /**
   *泳道外边距
   */
  mkMarginGutter?: Level
  /**
   *泳道底部外边距
   */
  mkMarginGutterBottom?: Level
  /**
   *泳道水平外边距
   */
  mkMarginGutterH?: Level
  /**
   *泳道左边外边距
   */
  mkMarginGutterLeft?: Level
  /**
   *泳道右边外边距
   */
  mkMarginGutterRight?: Level
  /**
   *泳道顶部外边距
   */
  mkMarginGutterTop?: Level
  /**
   *泳道垂直外边距
   */
  mkMarginGutterV?: Level
  /**
   *水平外边距
   */
  mkMarginH?: SpaceKeys
  /**
   *左边外边距
   */
  mkMarginLeft?: SpaceKeys
  /**
   *右边外边距
   */
  mkMarginRight?: SpaceKeys
  /**
   *顶部外边距
   */
  mkMarginTop?: SpaceKeys
  /**
   *垂直外边距
   */
  mkMarginV?: SpaceKeys
  /**
   *内边距
   */
  mkPadding?: SpaceKeys
  /**
   *底部内边距
   */
  mkPaddingBottom?: SpaceKeys
  /**
   *泳道内边距
   */
  mkPaddingGutter?: Level
  /**
   *泳道底部内边距
   */
  mkPaddingGutterBottom?: Level
  /**
   *泳道水平内边距
   */
  mkPaddingGutterH?: Level
  /**
   *泳道左边内边距
   */
  mkPaddingGutterLeft?: Level
  /**
   *泳道右边内边距
   */
  mkPaddingGutterRight?: Level
  /**
   *泳道顶部内边距
   */
  mkPaddingGutterTop?: Level
  /**
   *泳道垂直内边距
   */
  mkPaddingGutterV?: Level
  /**
   *水平内边距
   */
  mkPaddingH?: SpaceKeys
  /**
   *左边内边距
   */
  mkPaddingLeft?: SpaceKeys
  /**
   *右边内边距
   */
  mkPaddingRight?: SpaceKeys
  /**
   *顶部内边距
   */
  mkPaddingTop?: SpaceKeys
  /**
   *垂直内边距
   */
  mkPaddingV?: SpaceKeys
  /**
   *正方形长度
   */
  mkSquare?: 'full' | 'fullScreen' | number
  /**
   *文本框高度
   */
  mkTextFieldHeight?: Level
  /**
   *水平内边距
   */
  paddingH?: number | string
  /**
   *垂直内边距
   */
  paddingV?: number | string
}
```

v0.2.0 中添加

# Box (类型)

**签名**

```ts
type Box = {
  contentWidth: ContentWith
  space: LevelNode & { mini: number; smallX: number; mediumX: number }
  gutter: LevelNode
  container: LevelNode
  element: LevelNode
  textfield: LevelNode
  barHeight: LevelNode
}
```

v0.2.0 中添加

# ContentWith (类型)

**签名**

```ts
type ContentWith = LevelNode & {
  nav: number
}
```

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

v0.2.0 中添加

# SpaceKeys (类型)

**签名**

```ts
type SpaceKeys = keyof Box['space']
```

v0.2.0 中添加

# Theme (类型)

**签名**

```ts
export type Theme = {
  box: Box
}
```

v0.2.0 中添加

# lens (常量)

**签名**

```ts

export const lens: { boxLens: Lens<Theme, Box>; boxGutterLens: Lens<Theme, LevelNode>; boxSpaceLens: Lens<Theme, LevelNode & { mini: number; smallX: number; mediumX: number; }>; boxContentWidthLens: Lens<Theme, ContentWith>; boxElementWidthLens: Lens<Theme, LevelNode>; boxContainerLens: Lens<Theme, LevelNode>; boxBarHeightLens: Lens<Theme, LevelNode>; } = ...

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

# mapProps (函数)

**签名**

```ts

export const mapProps = <T>(name: keyof T) => <P>({ value }: { value: P }) => ...

```

v0.2.0 中添加
