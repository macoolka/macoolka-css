---
title: common/text/index.ts
nav_order: 9
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [EProps (接口)](#eprops-%E6%8E%A5%E5%8F%A3)
- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [SProps (接口)](#sprops-%E6%8E%A5%E5%8F%A3)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [Theme (类型)](#theme-%E7%B1%BB%E5%9E%8B)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)
- [theme (常量)](#theme-%E5%B8%B8%E9%87%8F)

---

# EProps (接口)

**签名**

```ts
interface EProps {}
```

v0.2.0 中添加

# Props (接口)

Text properties

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

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme & ColorTheme>
```

v0.2.0 中添加

# Theme (类型)

**签名**

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
