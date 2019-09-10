
/**
 * Border
 * @file
 */

import { Rule as ParentRule, ruleModule as parentRuleModule } from '../../basic';
import { ExtendRule, extendRuleModule } from '../../CssRule'
import { isString } from 'macoolka-predicate';
import { fromPredicate, left, right, Either, fold } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable'


/**
# Effect Property

The define Element's transition and animations
@desczh
# 效果属性

定义了元素的变换和动画
 * @mk
 * @memberof common
 * @name effect
 * @title Effect Property
 */


export interface Props extends SProps, EProps {

}
export type Animations = 'bounce' |
    'bounceIn' |
    'bounceInDown' |
    'bounceInLeft' |
    'bounceInRight' |
    'bounceInUp' |
    'bounceOut' |
    'bounceOutDown' |
    'bounceOutLeft' |
    'bounceOutRight' |
    'bounceOutUp' |
    'fadeIn' |
    'fadeInDown' |
    'fadeInDownSmall' |
    'fadeInDownBig' |
    'fadeInLeft' |
    'fadeInLeftBig' |
    'fadeInRight' |
    'fadeInRightBig' |
    'fadeInUp' |
    'fadeInUpBig' |
    'fadeOut' |
    'fadeOutDown' |
    'fadeOutDownBig' |
    'fadeOutLeft' |
    'fadeOutLeftBig' |
    'fadeOutRight' |
    'fadeOutRightBig' |
    'fadeOutUp' |
    'fadeOutUpBig' |
    'flash' |
    'flip' |
    'flipInX' |
    'flipInY' |
    'flipOutX' |
    'flipOutY' |
    'hide' |
    'hinge' |
    'jello' |
    'lightSpeedIn' |
    'lightSpeedOut' |
    'pulse' |
    'rotateIn' |
    'rotateInDownLeft' |
    'rotateInDownRight' |
    'rotateInUpLeft' |
    'rotateInUpRight' |
    'rotateOut' |
    'rotateOutDownLeft' |
    'rotateOutDownRight' |
    'rotateOutUpLeft' |
    'rotateOutUpRight' |
    'rollIn' |
    'rollOut' |
    'rubberBand' |
    'shake' |
    'slideInDown' |
    'slideInLeft' |
    'slideInRight' |
    'slideInUp' |
    'slideOutDown' |
    'slideOutLeft' |
    'slideOutRight' |
    'slideOutUp' |
    'spin' |
    'swing' |
    'tada' |
    'wobble' |
    'zoomIn' |
    'zoomInDown' |
    'zoomInLeft' |
    'zoomInRight' |
    'zoomInUp' |
    'zoomOut' |
    'zoomOutDown' |
    'zoomOutLeft' |
    'zoomOutRight' |
    'zoomOutUp' |
    'rippleEnter' |
    'rippleExit' |
    'pulsate';

const selectAnimation = (a: Animations) => (t: Theme) => {
    const b = t.effect.animations[a];
    if (b) {
        return b
    } else {
        return a;
    }
}
export type Theme = {
    effect: {
        animations: { [k in Animations]?: string },
        ease: {
            easeInOut: string,
            easeOut: string,
            easeIn: string,
            sharp: string,
        },
        duration: {
            none: number,
            shortest: number,
            shorter: number,
            short: number,
            standard: number,
            complex: number,
            enteringScreen: number,
            leavingScreen: number,
            long: number,
            longer: number,
            longest: number,
        },

    }
};
export const theme: Theme = {
    effect: {
        animations: {},
        ease: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
            none: 0,
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
            long: 450,
            longer: 650,
            longest: 1000,
        },

    },
}
export interface SProps {

    /**
     * rotate angle
     * @desczh
     * 旋转角度
     */

    mkRotate?: number,
  
    /**
     * transition
     * @desczh
     * 转换
     */

    mkTransition?: string | {
        property: string,
        duration?: keyof Theme['effect']['duration'],
        ease?: keyof Theme['effect']['ease'],
        delay?: keyof Theme['effect']['duration'],
    };
    mkTransitionDuration?: keyof Theme['effect']['duration'],
    mkTransitionTimingFunction?: keyof Theme['effect']['ease'],
    mkTransitionDelay?: keyof Theme['effect']['duration'],
  
    /**
     * animation
     * @desczh
     * 动画
     */

    mkAnimation?: Animations | {
        name: Animations,
        duration?: keyof Theme['effect']['duration'],
        ease?: keyof Theme['effect']['ease'],
        delay?: keyof Theme['effect']['duration'],
        count?: number | 'infinite',
    };
    mkAnimationDuration?: keyof Theme['effect']['duration'],
    mkAnimationTimingFunction?: keyof Theme['effect']['ease'],
    mkAnimationDelay?: keyof Theme['effect']['duration'],
    mkAnimationCount?: number | 'infinite',
};
export interface EProps {

    /**
     * flip
     * @desczh
     * 水平或垂直翻转
     */

    mkFlip?: 'horizontal' | 'vertical',
};
export type Rule=ExtendRule<ParentRule,SProps, EProps, Theme>
 const rule: Rule= {
    ruleEnum: {
        mkFlip: {
            horizontal: {
                transform: 'scale(-1, 1)',
            } ,
            vertical: {
                transform: 'scale(1, -1)',
            },
        }
    },
    rule: {
        mkRotate: ({ value }) => ({ transform: `rotate(${value}deg)` }),
        mkTransition: ({ value, theme }) => pipe(
            value,
            fromPredicate(isString, c => c as any),

            fold(({
                property,
                duration = 'shorter',
                ease = 'easeInOut',
                delay = 'none',
            }: {
                property: string,
                duration: keyof Theme['effect']['duration'],
                ease: keyof Theme['effect']['ease'],
                delay: keyof Theme['effect']['duration'],
            }) => ({
                transitionProperty: `${property}`,
                transitionDuration: theme.effect.duration[duration],
                transitionTimingFunction: `${theme.effect.ease[ease]}`,
                transitionDelay: theme.effect.duration[delay],
            }), (r: string) => ({
                transitionProperty: r,
                transitionDuration: theme.effect.duration.shorter,
                transitionTimingFunction: theme.effect.ease.easeInOut,
                transitionDelay: theme.effect.duration.none,
            }))
        ),

        mkTransitionDuration: ({ value, theme }) => ({ transitionDuration: theme.effect.duration[value] }),
        mkTransitionTimingFunction: ({ value, theme }) => ({ transitionTimingFunction: theme.effect.ease[value] }),
        mkTransitionDelay: ({ value, theme }) => ({ transitionDelay: theme.effect.duration[value] }),

        mkAnimation: ({ value, theme }) => {
            const isAnimations = (a: any): a is Animations => isString(a)
            const result: Either<{
                name: Animations,
                duration?: keyof Theme['effect']['duration'],
                ease?: keyof Theme['effect']['ease'],
                delay?: keyof Theme['effect']['duration'],
                count?: number | 'infinite'
            }, Animations> = isAnimations(value) ? right(value) : left(value)
            return pipe(
                result,
                fold(({
                    name,
                    duration = 'shorter',
                    ease = 'easeInOut',
                    delay = 'none',
                    count = 1,
                }: {
                    name: Animations,
                    duration?: keyof Theme['effect']['duration'],
                    ease?: keyof Theme['effect']['ease'],
                    delay?: keyof Theme['effect']['duration'],
                    count?: number | 'infinite'
                }) => ({
                    animationName: selectAnimation(name)(theme),
                    animationDuration: theme.effect.duration[duration],
                    animationTimingFunction: theme.effect.ease[ease],
                    animationDelay: theme.effect.duration[delay],
                    animationIterationCount: count
                }), (r: Animations) => ({
                    animationName: selectAnimation(r)(theme),
                    animationDuration: theme.effect.duration.shorter,
                    animationTimingFunction: theme.effect.ease.easeInOut,
                    animationDelay: theme.effect.duration.none,
                    animationIterationCount: 1
                })
                )
            )

        },
        mkAnimationDuration: ({ value, theme }) => ({ animationDuration: theme.effect.duration[value] }),
        mkAnimationTimingFunction: ({ value, theme }) => ({ animationTimingFunction: theme.effect.ease[value] }),
        mkAnimationDelay: ({ value, theme }) => ({ animationDelay: theme.effect.duration[value] }),
        mkAnimationCount: ({ value }) => ({ animationIterationCount: value }),
    }
};

export const ruleModule = extendRuleModule(parentRuleModule)<Rule>({
    rule,
    theme,
})

