---
title: common/container/index.ts
nav_order: 6
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [EProps (interface)](#eprops-interface)
- [Props (interface)](#props-interface)
- [Container Property](#container-property)
- [SProps (interface)](#sprops-interface)
- [Rule (type alias)](#rule-type-alias)
- [Theme (type alias)](#theme-type-alias)
- [ruleModule (constant)](#rulemodule-constant)
- [theme (constant)](#theme-constant)

---

# EProps (interface)

**Signature**

```ts
interface EProps {
  /**
   *absolute position layout
   */
  mkAbsolute?: 'left' | 'right' | 'top' | 'bottom' | 'full'
  /**
   *block layout
   */
  mkBlock?: 'center'
  /**
   *fixed position layout
   */
  mkFixed?: 'left' | 'right' | 'top' | 'bottom' | 'full'
  /**
   *flex layout
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
   *background image layout
   */
  mkImage?: 'center' | 'fullHeight' | 'fullWidth'
  /**
   *inline flex layout
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
   *scroll bar
   */
  mkScrollBar?: 'horizontal' | 'vertical' | 'both' | 'none'
  /**
   *Sticky layout
   */
  mkSticky?: 'left' | 'right' | 'top' | 'bottom' | 'full'
  /**
   *visibility
   */
  mkVisible?: 'hidden' | 'none' | 'elementInvisible' | 'hiddenWidth' | 'hiddenHeight' | 'visibleHeight' | 'visible'
}
```

Added in v0.2.0

# Props (interface)

# Container Property

The define container's layout and some about container's property

- Container is contain other element and not visible

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
   *The element position is absolute and center in parent.
   */
  mkAbsoluteCenter?: {
    width: number
    height: number
  }
  /**
   *The element position is absolute and top and right in parent.
   */
  mkAbsoluteTopRight?: {
    width: number
    height: number
  }
  /**
   *zIndex
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

Added in v0.2.0

# Rule (type alias)

**Signature**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

Added in v0.2.0

# Theme (type alias)

**Signature**

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
