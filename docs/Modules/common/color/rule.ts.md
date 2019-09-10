---
title: common/color/rule.ts
nav_order: 5
parent: Modules
---

# Overview

Border

---

<h2 class="text-delta">Table of contents</h2>

- [ColorValue (interface)](#colorvalue-interface)
- [EProps (interface)](#eprops-interface)
- [Props (interface)](#props-interface)
- [Color Property](#color-property)
- [SProps (interface)](#sprops-interface)
- [BorderColor (type alias)](#bordercolor-type-alias)
- [Color (type alias)](#color-type-alias)
- [ColorObject (type alias)](#colorobject-type-alias)
- [OriginColor (type alias)](#origincolor-type-alias)
- [Rule (type alias)](#rule-type-alias)
- [TextColor (type alias)](#textcolor-type-alias)
- [ruleModule (constant)](#rulemodule-constant)
- [getColorValue (function)](#getcolorvalue-function)
- [getDefaultColorTextValue (function)](#getdefaultcolortextvalue-function)
- [getTextColor (function)](#gettextcolor-function)
- [getTextColorValue (function)](#gettextcolorvalue-function)

---

# ColorValue (interface)

**Signature**

```ts
interface ColorValue {
  inverted?: boolean
  level?: Level
  name?: Color
  opacity?: Opacity
}
```

Added in v0.2.0

# EProps (interface)

**Signature**

```ts
interface EProps {}
```

Added in v0.2.0

# Props (interface)

# Color Property

The define text color,background color and border color.

The color value be define in theme.

Jss color={value} | backgroundColor={value} | borderColor={value}

mkColor define text color and background color.

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
   *background  color
   */
  mkBgColor?: ColorObject
  /**
   *border color
   */
  mkBorderColor?: ColorObject
  /**
   *background color with auto text color
   */
  mkColor?: ColorObject
  /**
   *opacity
   */
  mkOpacity?: Opacity
  /**
   *text color
   */
  mkTextColor?: ColorObject
}
```

Added in v0.2.0

# BorderColor (type alias)

**Signature**

```ts
export type BorderColor = Color
```

Added in v0.2.0

# Color (type alias)

**Signature**

```ts
export type Color = ColorNames | OriginColor
```

Added in v0.2.0

# ColorObject (type alias)

**Signature**

```ts
export type ColorObject = Color | ColorValue
```

Added in v0.2.0

# OriginColor (type alias)

**Signature**

```ts
export type OriginColor = 'inherit' | 'currentColor' | 'transparent'
```

Added in v0.2.0

# Rule (type alias)

**Signature**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

Added in v0.2.0

# TextColor (type alias)

**Signature**

```ts
export type TextColor = Color
```

Added in v0.2.0

# ruleModule (constant)

**Signature**

```ts

export const ruleModule: any = ...

```

Added in v0.2.0

# getColorValue (function)

**Signature**

```ts

export const getColorValue = ({ theme, source }: { theme: Theme, source?: any }) => ...

```

Added in v0.2.0

# getDefaultColorTextValue (function)

**Signature**

```ts

export const getDefaultColorTextValue = ({ value, source }: { value: ColorObject, source?: any }): {
    name: Color,
    level: Level,
    inverted: boolean,
    opacity: Opacity
} => ...

```

Added in v0.2.0

# getTextColor (function)

**Signature**

```ts

export const getTextColor = ({ source }: { source?: any }) => ...

```

Added in v0.2.0

# getTextColorValue (function)

**Signature**

```ts

export const getTextColorValue = ({ theme, source }: { theme: Theme, source?: any }) => ...

```

Added in v0.2.0
