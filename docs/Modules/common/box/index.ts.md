---
title: common/box/index.ts
nav_order: 4
parent: Modules
---

# Overview

Border

---

<h2 class="text-delta">Table of contents</h2>

- [EProps (interface)](#eprops-interface)
- [Props (interface)](#props-interface)
- [Box Property](#box-property)
- [SProps (interface)](#sprops-interface)
- [Box (type alias)](#box-type-alias)
- [ContentWith (type alias)](#contentwith-type-alias)
- [Rule (type alias)](#rule-type-alias)
- [SpaceKeys (type alias)](#spacekeys-type-alias)
- [Theme (type alias)](#theme-type-alias)
- [lens (constant)](#lens-constant)
- [ruleModule (constant)](#rulemodule-constant)
- [theme (constant)](#theme-constant)
- [mapProps (function)](#mapprops-function)

---

# EProps (interface)

**Signature**

```ts
interface EProps {
  /**
   *height
   */
  mkHeight?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *max height
   */
  mkMaxHeight?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *max width
   */
  mkMaxWidth?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *min height
   */
  mkMinHeight?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *min width
   */
  mkMinWidth?: 'full' | 'fullScreen' | 'none' | 'inherit'
  /**
   *width
   */
  mkWidth?: 'full' | 'fullScreen' | 'none' | 'inherit'
}
```

Added in v0.2.0

# Props (interface)

# Box Property

The define box widht height margin padding

The all element split to three kind.

- Content > Container > Element

The space split to two kind.

- gutter > common

**Signature**

```ts
interface Props extends SProps, EProps {}
```

Added in v0.2.0

# SProps (interface)

**Signature**

```ts
interface SProps {
  /**
   *both marginLeft and marginRight
   */
  marginH?: number | string
  /**
   *both marginTop and marginBottom
   */
  marginV?: number | string
  /**
   *bar height
   */
  mkBarHeight?: Level
  /**
   *children element margin bottom
   */
  mkChildMarginBottom?: Level
  /**
   *children element margin left
   */
  mkChildMarginLeft?: Level
  /**
   *children element margin right
   */
  mkChildMarginRight?: Level
  /**
   *children element margin top
   */
  mkChildMarginTop?: Level
  /**
   *container height
   */
  mkContainerHeight?: Level
  /**
   *container width
   */
  mkContainerWidth?: Level
  /**
   *content width
   */
  mkContentWidth?: Level | 'nav'
  /**
   *element height
   */
  mkElementHeight?: Level
  /**
   *element width
   */
  mkElementWidth?: Level
  /**
   *common margin
   */
  mkMargin?: SpaceKeys
  /**
   *common margin bottom
   */
  mkMarginBottom?: SpaceKeys
  /**
   *gutter margin
   */
  mkMarginGutter?: Level
  /**
   *gutter margin bottom
   */
  mkMarginGutterBottom?: Level
  /**
   *gutter margin x
   */
  mkMarginGutterH?: Level
  /**
   *gutter margin left
   */
  mkMarginGutterLeft?: Level
  /**
   *gutter margin right
   */
  mkMarginGutterRight?: Level
  /**
   *gutter margin top
   */
  mkMarginGutterTop?: Level
  /**
   *gutter margin y
   */
  mkMarginGutterV?: Level
  /**
   *common margin x
   */
  mkMarginH?: SpaceKeys
  /**
   *common margin left
   */
  mkMarginLeft?: SpaceKeys
  /**
   *common margin right
   */
  mkMarginRight?: SpaceKeys
  /**
   *common margin top
   */
  mkMarginTop?: SpaceKeys
  /**
   *common margin y
   */
  mkMarginV?: SpaceKeys
  /**
   *common padding
   */
  mkPadding?: SpaceKeys
  /**
   *common padding bottom
   */
  mkPaddingBottom?: SpaceKeys
  /**
   *gutter padding
   */
  mkPaddingGutter?: Level
  /**
   *gutter padding bottom
   */
  mkPaddingGutterBottom?: Level
  /**
   *gutter padding x
   */
  mkPaddingGutterH?: Level
  /**
   *gutter padding left
   */
  mkPaddingGutterLeft?: Level
  /**
   *gutter padding right
   */
  mkPaddingGutterRight?: Level
  /**
   *gutter padding top
   */
  mkPaddingGutterTop?: Level
  /**
   *gutter padding y
   */
  mkPaddingGutterV?: Level
  /**
   *common padding x
   */
  mkPaddingH?: SpaceKeys
  /**
   *common padding left
   */
  mkPaddingLeft?: SpaceKeys
  /**
   *common padding right
   */
  mkPaddingRight?: SpaceKeys
  /**
   *common padding top
   */
  mkPaddingTop?: SpaceKeys
  /**
   *common padding y
   */
  mkPaddingV?: SpaceKeys
  /**
   *width=height
   */
  mkSquare?: 'full' | 'fullScreen' | number
  /**
   *textfield height
   */
  mkTextFieldHeight?: Level
  /**
   *both paddingLeft and paddingRight
   */
  paddingH?: number | string
  /**
   *both paddingTop and paddingBottom
   */
  paddingV?: number | string
}
```

Added in v0.2.0

# Box (type alias)

**Signature**

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

Added in v0.2.0

# ContentWith (type alias)

**Signature**

```ts
type ContentWith = LevelNode & {
  nav: number
}
```

Added in v0.2.0

# Rule (type alias)

**Signature**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

Added in v0.2.0

# SpaceKeys (type alias)

**Signature**

```ts
type SpaceKeys = keyof Box['space']
```

Added in v0.2.0

# Theme (type alias)

**Signature**

```ts
export type Theme = {
  box: Box
}
```

Added in v0.2.0

# lens (constant)

**Signature**

```ts

export const lens: { boxLens: Lens<Theme, Box>; boxGutterLens: Lens<Theme, LevelNode>; boxSpaceLens: Lens<Theme, LevelNode & { mini: number; smallX: number; mediumX: number; }>; boxContentWidthLens: Lens<Theme, ContentWith>; boxElementWidthLens: Lens<Theme, LevelNode>; boxContainerLens: Lens<Theme, LevelNode>; boxBarHeightLens: Lens<Theme, LevelNode>; } = ...

```

Added in v0.2.0

# ruleModule (constant)

**Signature**

```ts

export const ruleModule: any = ...

```

Added in v0.2.0

# theme (constant)

**Signature**

```ts

export const theme: Theme = ...

```

Added in v0.2.0

# mapProps (function)

**Signature**

```ts

export const mapProps = <T>(name: keyof T) => <P>({ value }: { value: P }) => ...

```

Added in v0.2.0
