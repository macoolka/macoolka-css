---
title: basic/unit.ts
nav_order: 2
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [Props (interface)](#props-interface)
- [BaseRule (type alias)](#baserule-type-alias)
- [Rule (type alias)](#rule-type-alias)
- [rule (constant)](#rule-constant)
- [ruleModule (constant)](#rulemodule-constant)

---

# Props (interface)

Unit Property

Unit Property is extends Orginal Property

The set a default unit when property's value is number

<article>

Px Properties

<section class="cols2">
<div>

Including properties:

- backgroundSize
- borderBottomWidth
- borderLeftWidth
- borderRadius
- borderRightWidth,
- borderTopWidth
- borderWidth
- bottom
- fontSize
- left
- letterSpacing
- margin
- marginTop
- marginBottom
- marginLeft
- marginRight
- padding
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight
- right
- top
- flexBasis

</div>
<div>

```css
width: 5;
```

equals

```css
width: 5px;
```

</div>

</section>

</article>

<article>

Px or Percent Properties

- The will used % when number value is in middle of 0 and 1
- Others used px

<section class="cols2">
<div>

Including properties:

- width
- height
- maxWidth
- minWidth
- maxHeight
- minHeight

</div>
<div>

```css
width: 0.5;
```

equals

```css
width: 50%;
```

</div>

</section>

</article>

<article>

Ms Properties

<section class="cols2">
<div>

Including properties:

- transitionDuration
- transitionDelay
- animationDuration
- animationDelay

</div>
<div>

```css
transitiondelay: 500;
```

equals

```css
transitiondelay: 500ms;
```

</div>

</section>

</article>

**Signature**

```ts
interface Props {}
```

Added in v0.2.0

# BaseRule (type alias)

Base Rule is output that is origial css
All Rule will final parse to the rule

**Signature**

```ts
export type BaseRule = _Rule<{}, {}, BaseProps, {}>
```

Added in v0.2.0

# Rule (type alias)

**Signature**

```ts
export type Rule = ExtendRule<BaseRule, UnitNumberProps, {}>
```

Added in v0.2.0

# rule (constant)

**Signature**

```ts

export const rule: Rule = ...

```

Added in v0.2.0

# ruleModule (constant)

**Signature**

```ts

export const ruleModule: RuleModule<Rule> = ...

```

Added in v0.2.0
