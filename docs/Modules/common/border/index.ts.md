---
title: common/border/index.ts
nav_order: 3
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [EProps (interface)](#eprops-interface)
- [Props (interface)](#props-interface)
- [Border Property](#border-property)
- [SProps (interface)](#sprops-interface)
- [Theme (interface)](#theme-interface)
- [Rule (type alias)](#rule-type-alias)
- [ruleModule (constant)](#rulemodule-constant)
- [theme (constant)](#theme-constant)

---

# EProps (interface)

**Signature**

```ts
interface EProps {
  /**
   *border sytle
   */
  mkBorder?: 'none' | 'bordered' | 'top' | 'bottom' | 'left' | 'right' | 'topBar' | 'bottomBar' | 'leftBar' | 'rightBar'
}
```

Added in v0.2.0

# Props (interface)

# Border Property

The define border style and box shadow

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
   *border radius
   */
  mkBorderRadius?: Level
  /**
   *Circle shape
   */
  mkRounded?: boolean
  /**
   *box shadow
   */
  mkShadow?: keyof Theme['border']['shadows']
}
```

Added in v0.2.0

# Theme (interface)

**Signature**

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

Added in v0.2.0

# Rule (type alias)

**Signature**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

Added in v0.2.0

# ruleModule (constant)

**Signature**

```ts

export const : any = ...

```

Added in v0.2.0

# theme (constant)

**Signature**

```ts

export const theme: Theme = ...

```

Added in v0.2.0
