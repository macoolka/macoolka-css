---
title: common/text/index.ts
nav_order: 9
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [EProps (interface)](#eprops-interface)
- [Props (interface)](#props-interface)
- [SProps (interface)](#sprops-interface)
- [Rule (type alias)](#rule-type-alias)
- [Theme (type alias)](#theme-type-alias)
- [ruleModule (constant)](#rulemodule-constant)
- [theme (constant)](#theme-constant)

---

# EProps (interface)

**Signature**

```ts
interface EProps {}
```

Added in v0.2.0

# Props (interface)

Text properties

**Signature**

```ts
interface Props extends EProps, SProps {}
```

Added in v0.2.0

# SProps (interface)

**Signature**

```ts
interface SProps {
  /**
   *font family
   */
  mkFontFamily?: 'sansSerif' | 'serif' | 'monospace'
  /**
   *font size
   */
  mkFontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'p' | 'caption' | 'overline'
  /**
   *font weight
   */
  mkFontWeight?: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black'
  /**
   *add margin bottom
   */
  mkParagraph?: boolean
  /**
   *text align
   */
  mkTextAlign?: 'left' | 'right' | 'center' | 'justify' | 'inherit'
  /**
   *text decoration
   */
  mkTextDecoration?: 'none' | 'underline' | 'overline' | 'line-through' | 'inherit'
  /**
   *text direction
   */
  mkTextDirection?: 'ltr' | 'rtl' | 'inherit'
  /**
   *text with italic style
   */
  mkTextItalic?: boolean
  /**
   *text wrap
   */
  mkTextNoWrap?: boolean
  /**
   *text with strong style
   */
  mkTextStrong?: boolean
  /**
   *text transform
   */
  mkTextTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'inherit'
  /**
   *text underline
   */
  mkTextUnderlined?: boolean
}
```

Added in v0.2.0

# Rule (type alias)

**Signature**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme & ColorTheme>
```

Added in v0.2.0

# Theme (type alias)

**Signature**

```ts
export type Theme = {
  font: {
    weight: {
      thin: number
      light: number
      regular: number
      medium: number
      bold: number
      black: number
    }
    size: {
      h1: number
      h2: number
      h3: number
      h4: number
      h5: number
      h6: number
      subtitle: number
      p: number
      caption: number
      overline: number
    }
    family: {
      sansSerif: string
      serif: string
      monospace: string
    }
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
