---
title: common/flex/index.ts
nav_order: 8
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [EProps (interface)](#eprops-interface)
- [FlexContainerProps (interface)](#flexcontainerprops-interface)
- [FlexItemProps (interface)](#flexitemprops-interface)
- [Props (interface)](#props-interface)
- [SProps (interface)](#sprops-interface)
- [Rule (type alias)](#rule-type-alias)
- [flexContainerRule (constant)](#flexcontainerrule-constant)
- [flexItemRule (constant)](#flexitemrule-constant)
- [ruleModule (constant)](#rulemodule-constant)

---

# EProps (interface)

**Signature**

```ts
interface EProps {}
```

Added in v0.2.0

# FlexContainerProps (interface)

**Signature**

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

Added in v0.2.0

# FlexItemProps (interface)

**Signature**

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

Added in v0.2.0

# Props (interface)

Flex properties

**Signature**

```ts
interface Props extends SProps, EProps {}
```

Added in v0.2.0

# SProps (interface)

**Signature**

```ts
interface SProps extends FlexContainerProps, FlexItemProps {}
```

Added in v0.2.0

# Rule (type alias)

**Signature**

```ts
export type Rule = ExtendRule<ParentRule, Props, {}>
```

Added in v0.2.0

# flexContainerRule (constant)

**Signature**

```ts

export const flexContainerRule: ExtendRule<ParentRule, FlexContainerProps, {}> = ...

```

Added in v0.2.0

# flexItemRule (constant)

**Signature**

```ts

export const flexItemRule: ExtendRule<ParentRule, FlexItemProps, {}> = ...

```

Added in v0.2.0

# ruleModule (constant)

**Signature**

```ts

export const ruleModule: any = ...

```

Added in v0.2.0
