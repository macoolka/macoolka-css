---
title: common/effect/index.ts
nav_order: 7
parent: 模块
---

# 概述

Border

---

<h2 class="text-delta">目录</h2>

- [EProps (接口)](#eprops-%E6%8E%A5%E5%8F%A3)
- [Props (接口)](#props-%E6%8E%A5%E5%8F%A3)
- [效果属性](#%E6%95%88%E6%9E%9C%E5%B1%9E%E6%80%A7)
- [SProps (接口)](#sprops-%E6%8E%A5%E5%8F%A3)
- [Animations (类型)](#animations-%E7%B1%BB%E5%9E%8B)
- [Rule (类型)](#rule-%E7%B1%BB%E5%9E%8B)
- [Theme (类型)](#theme-%E7%B1%BB%E5%9E%8B)
- [ruleModule (常量)](#rulemodule-%E5%B8%B8%E9%87%8F)
- [theme (常量)](#theme-%E5%B8%B8%E9%87%8F)

---

# EProps (接口)

**签名**

```ts
interface EProps {
  /**
   *水平或垂直翻转
   */
  mkFlip?: 'horizontal' | 'vertical'
}
```

v0.2.0 中添加

# Props (接口)

# 效果属性

定义了元素的变换和动画

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
   *动画
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
   *旋转角度
   */
  mkRotate?: number
  /**
   *转换
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

v0.2.0 中添加

# Animations (类型)

**签名**

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

v0.2.0 中添加

# Rule (类型)

**签名**

```ts
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
```

v0.2.0 中添加

# Theme (类型)

**签名**

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
