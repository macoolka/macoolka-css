---
title: common/effect/index.ts
nav_order: 7
parent: Modules
---

# Overview

Border

---

<h2 class="text-delta">Table of contents</h2>

- [EProps (interface)](#eprops-interface)
- [Props (interface)](#props-interface)
- [Effect Property](#effect-property)
- [SProps (interface)](#sprops-interface)
- [Animations (type alias)](#animations-type-alias)
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
   *flip
   */
  mkFlip?: 'horizontal' | 'vertical'
}
```

Added in v0.2.0

# Props (interface)

# Effect Property

The define Element's transition and animations

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
   *animation
   */
  mkAnimation?:
    | Animations
    | {
        name: Animations
        duration?: keyof Theme['effect']['duration']
        ease?: keyof Theme['effect']['ease']
        delay?: keyof Theme['effect']['duration']
        count?: number | 'infinite'
      }
  mkAnimationCount?: number | 'infinite'
  mkAnimationDelay?: keyof Theme['effect']['duration']
  mkAnimationDuration?: keyof Theme['effect']['duration']
  mkAnimationTimingFunction?: keyof Theme['effect']['ease']
  /**
   *rotate angle
   */
  mkRotate?: number
  /**
   *transition
   */
  mkTransition?:
    | string
    | {
        property: string
        duration?: keyof Theme['effect']['duration']
        ease?: keyof Theme['effect']['ease']
        delay?: keyof Theme['effect']['duration']
      }
  mkTransitionDelay?: keyof Theme['effect']['duration']
  mkTransitionDuration?: keyof Theme['effect']['duration']
  mkTransitionTimingFunction?: keyof Theme['effect']['ease']
}
```

Added in v0.2.0

# Animations (type alias)

**Signature**

```ts
export type Animations =
  | 'bounce'
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceInUp'
  | 'bounceOut'
  | 'bounceOutDown'
  | 'bounceOutLeft'
  | 'bounceOutRight'
  | 'bounceOutUp'
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownSmall'
  | 'fadeInDownBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeOut'
  | 'fadeOutDown'
  | 'fadeOutDownBig'
  | 'fadeOutLeft'
  | 'fadeOutLeftBig'
  | 'fadeOutRight'
  | 'fadeOutRightBig'
  | 'fadeOutUp'
  | 'fadeOutUpBig'
  | 'flash'
  | 'flip'
  | 'flipInX'
  | 'flipInY'
  | 'flipOutX'
  | 'flipOutY'
  | 'hide'
  | 'hinge'
  | 'jello'
  | 'lightSpeedIn'
  | 'lightSpeedOut'
  | 'pulse'
  | 'rotateIn'
  | 'rotateInDownLeft'
  | 'rotateInDownRight'
  | 'rotateInUpLeft'
  | 'rotateInUpRight'
  | 'rotateOut'
  | 'rotateOutDownLeft'
  | 'rotateOutDownRight'
  | 'rotateOutUpLeft'
  | 'rotateOutUpRight'
  | 'rollIn'
  | 'rollOut'
  | 'rubberBand'
  | 'shake'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideOutDown'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'slideOutUp'
  | 'spin'
  | 'swing'
  | 'tada'
  | 'wobble'
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomInUp'
  | 'zoomOut'
  | 'zoomOutDown'
  | 'zoomOutLeft'
  | 'zoomOutRight'
  | 'zoomOutUp'
  | 'rippleEnter'
  | 'rippleExit'
  | 'pulsate'
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
  effect: {
    animations: { [k in Animations]?: string }
    ease: {
      easeInOut: string
      easeOut: string
      easeIn: string
      sharp: string
    }
    duration: {
      none: number
      shortest: number
      shorter: number
      short: number
      standard: number
      complex: number
      enteringScreen: number
      leavingScreen: number
      long: number
      longer: number
      longest: number
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
