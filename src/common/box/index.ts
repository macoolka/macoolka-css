/**
 * Border
 * @file
 */
import { Rule as ParentRule, ruleModule as parentRuleModule } from '../../basic';
import { ExtendRule, extendRuleModule } from '../../CssRule'
import { Level, LevelNode } from '../types';
import { Lens } from 'monocle-ts';
import { constant } from 'fp-ts/lib/function';

/**
# Box Property

The define box widht height margin padding

The all element split to three kind.
- Content > Container > Element

The space split to two kind.
- gutter > common

@desczh
# 盒子属性

定义了盒子的高度、宽度、内边距、外边距

元素根据大小被拆分为三种类型
- 内容元素 > 容器元素 > 普通元素

距离拆分为两种。
- 泳道 > 普通
 * @mk
 * @memberof common
 * @name box
 * @title Border Property
 */


export interface Props extends SProps, EProps {

}
type ContentWith = LevelNode & {
    nav: number;
}

type Box = {
    contentWidth: ContentWith,
    space: LevelNode & { mini: number, smallX: number, mediumX: number },
    gutter: LevelNode,
    container: LevelNode,
    element: LevelNode,
    textfield: LevelNode,
    barHeight: LevelNode,
};
export type Theme = {
    box: Box

};
const boxLens = Lens.fromProp<Theme>()('box');
const box = Lens.fromProp<Box>()
const boxGutterLens = boxLens.compose(box('gutter'));
const boxSpaceLens = boxLens.compose(box('space'));
const boxContentWidthLens = boxLens.compose(box('contentWidth'));
const boxElementWidthLens = boxLens.compose(box('element'));
const boxTextFieldWidthLens = boxLens.compose(box('textfield'));
const boxContainerLens = boxLens.compose(box('container'));
const boxBarHeightLens = boxLens.compose(box('barHeight'));
export const lens = {
    boxLens,
    boxGutterLens,
    boxSpaceLens,
    boxContentWidthLens,
    boxElementWidthLens,
    boxContainerLens,
    boxBarHeightLens,
}

export const theme: Theme = {
    box: {
        contentWidth: {
            large: 1160,
            medium: 750,
            small: 350,
            nav: 256,
            none: 0,

        },
        barHeight: {
            large: 64,
            medium: 56,
            small: 48,
            none: 0,
        },
        container: {
            large: 480,
            medium: 360,
            small: 210,
            none: 0,
        },
        element: {
            large: 64,
            medium: 48,
            small: 32,
            none: 0,
        },
        textfield: {
            large: 56,
            medium: 48,
            small: 40,
            none: 0,
        },
        gutter: {
            small: 20,
            medium: 40,
            large: 60,
            none: 0,
        },
        space: {
            mini: 4,
            small: 8,
            smallX: 12,
            medium: 16,
            mediumX: 20,
            large: 24,
            none: 0,
        },

    },

};
type SpaceKeys = keyof Box['space'];
export interface SProps {


    /**
     * common margin 
     * @desczh
     * 外边距 
     */
    mkMargin?: SpaceKeys,


    /**
     * common margin top
     * @desczh
     * 顶部外边距 
     */
    mkMarginTop?: SpaceKeys,


    /**
     * common margin bottom
     * @desczh
     * 底部外边距 
     */
    mkMarginBottom?: SpaceKeys,


    /**
     * common margin left
     * @desczh
     * 左边外边距 
     */
    mkMarginLeft?: SpaceKeys,


    /**
     * common margin right
     * @desczh
     * 右边外边距 
     */
    mkMarginRight?: SpaceKeys,


    /**
     * common margin x
     * @desczh
     * 水平外边距 
     */
    mkMarginH?: SpaceKeys,


    /**
     * common margin y
     * @desczh
     * 垂直外边距 
     */
    mkMarginV?: SpaceKeys,


    /**
    * gutter margin 
    * @desczh
    * 泳道外边距 
    */
    mkMarginGutter?: Level,


    /**
     * gutter margin top
     * @desczh
     * 泳道顶部外边距 
     */
    mkMarginGutterTop?: Level,


    /**
     * gutter margin bottom
     * @desczh
     * 泳道底部外边距 
     */
    mkMarginGutterBottom?: Level,


    /**
     * gutter margin left
     * @desczh
     * 泳道左边外边距 
     */
    mkMarginGutterLeft?: Level,

    /**
    * gutter margin right
    * @desczh
    * 泳道右边外边距 
    */
    mkMarginGutterRight?: Level,


    /**
     * gutter margin x
     * @desczh
     * 泳道水平外边距 
     */
    mkMarginGutterH?: Level,


    /**
     * gutter margin y
     * @desczh
     * 泳道垂直外边距 
     */
    mkMarginGutterV?: Level,


    /**
     * gutter padding 
     * @desczh
     * 泳道内边距 
     */
    mkPaddingGutter?: Level,


    /**
     * gutter padding top
     * @desczh
     * 泳道顶部内边距 
     */
    mkPaddingGutterTop?: Level,


    /**
     * gutter padding bottom
     * @desczh
     * 泳道底部内边距 
     */
    mkPaddingGutterBottom?: Level,


    /**
     * gutter padding left
     * @desczh
     * 泳道左边内边距 
     */
    mkPaddingGutterLeft?: Level,


    /**
     * gutter padding right
     * @desczh
     * 泳道右边内边距 
     */
    mkPaddingGutterRight?: Level,


    /**
     * gutter padding x
     * @desczh
     * 泳道水平内边距 
     */
    mkPaddingGutterH?: Level,


    /**
     * gutter padding y
     * @desczh
     * 泳道垂直内边距
     */
    mkPaddingGutterV?: Level,


    /**
     * common padding
     * @desczh
     * 内边距 
     */
    mkPadding?: SpaceKeys,


    /**
     * common padding top
     * @desczh
     * 顶部内边距 
     */
    mkPaddingTop?: SpaceKeys,


    /**
     * common padding bottom
     * @desczh
     * 底部内边距 
     */
    mkPaddingBottom?: SpaceKeys,


    /**
     * common padding left
     * @desczh
     * 左边内边距 
     */
    mkPaddingLeft?: SpaceKeys,


    /**
     * common padding right
     * @desczh
     * 右边内边距 
     */
    mkPaddingRight?: SpaceKeys,


    /**
     * common padding x
     * @desczh
     * 水平内边距 
     */
    mkPaddingH?: SpaceKeys,


    /**
     * common padding y
     * @desczh
     * 垂直内边距 
     */
    mkPaddingV?: SpaceKeys,

    /**
     * width=height
     * @desczh
     * 正方形长度 
     */
    mkSquare?: 'full' | 'fullScreen' | number,


    /**
     * both marginLeft and marginRight
     * @desczh
     * 水平外边距(数值)
     */
    marginH?: number | string,


    /**
     * both marginTop and marginBottom
     * @desczh
     *  垂直外边距
     */
    marginV?: number | string,


    /**
     * both paddingLeft and paddingRight
     * @desczh
     * 水平内边距
     */
    paddingH?: number | string,


    /**
     * both paddingTop and paddingBottom
     * @desczh
     * 垂直内边距
     */
    paddingV?: number | string,


    /**
     * content width
     * @desczh
     * 内容区宽度
     */
    mkContentWidth?: Level | 'nav';


    /**
     * container width
     * @desczh
     * 容器宽度
     */
    mkContainerWidth?: Level;


    /**
     * element width
     * @desczh
     * 元素宽度
     */
    mkElementWidth?: Level;


    /**
     * element height
     * @desczh
     * 元素高度
     */
    mkElementHeight?: Level;


    /**
     * textfield height
     * @desczh
     * 文本框高度
     */
    mkTextFieldHeight?: Level;

    /**
    * container height
    * @desczh
    * 容器高度
    */
    mkContainerHeight?: Level;
    /**
     * bar height
     * @desczh
     * Bar高度
     */
    mkBarHeight?: Level;
    /**
     * children element margin left
     * @desczh
     * 子元素左边距
     */
    mkChildMarginLeft?: Level
    /**
     * children element margin top
     * @desczh
     * 子元素顶边距
     */
    mkChildMarginTop?: Level
    /**
     * children element margin right
     * @desczh
     * 子元素右边距
     */
    mkChildMarginRight?: Level
    /**
     * children element margin bottom
     * @desczh
     * 子元素底边距
     */
    mkChildMarginBottom?: Level

};
export interface EProps {

    /**
     * width
     * @desczh
     * 宽度
     */
    mkWidth?: 'full' | 'fullScreen' | 'none' | 'inherit',

    /**
    * min width
    * @desczh
    * 最小宽度
    */
    mkMinWidth?: 'full' | 'fullScreen' | 'none' | 'inherit',


    /**
     * max width
     * @desczh
     * 最大宽度
     */
    mkMaxWidth?: 'full' | 'fullScreen' | 'none' | 'inherit',

    /**
     * height
     * @desczh
     * 高度
     */
    mkHeight?: 'full' | 'fullScreen' | 'none' | 'inherit',

    /**
     * min height
     * @desczh
     * 最小高度
     */
    mkMinHeight?: 'full' | 'fullScreen' | 'none' | 'inherit',

    /**
     * max height
     * @desczh
     * 最大高度
     */
    mkMaxHeight?: 'full' | 'fullScreen' | 'none' | 'inherit',
};

export const mapProps = <T>(name: keyof T) => <P>({ value }: { value: P }) => ({ name: value });
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
const rule: Rule = {
    rule: {
        marginH: ({ value }) => ({
            marginLeft: value,
            marginRight: value,
        }),
        marginV: ({ value }) => ({
            marginTop: value,
            marginBottom: value,
        }),
        paddingH: ({ value }) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingV: ({ value }) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        /**
         * The property is used to setting the margin properties in one declaration
         */
        mkMargin: ({ value, theme: t }) => ({
            margin: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the top margin of an element.
         */
        mkMarginTop: ({ value, theme: t }) => ({
            marginTop: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom margin of an element.
         */
        mkMarginBottom: ({ value, theme: t }) => ({
            marginBottom: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the left margin of an element.
         */
        mkMarginLeft: ({ value, theme: t }) => ({
            marginLeft: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the right margin of an element.
         */
        mkMarginRight: ({ value, theme: t }) => ({
            marginRight: boxSpaceLens.get(t)[value],
        }),
        mkChildMarginLeft: ({ value, theme: t }) => ({
            selector: {
                '>*': {
                    marginLeft: boxSpaceLens.get(t)[value],
                },
                '>*:first-child': {
                    marginLeft: boxSpaceLens.get(t)['none'],
                }
            }
        }),
        mkChildMarginRight: ({ value, theme: t }) => ({
            selector: {
                '>*': {
                    marginRight: boxSpaceLens.get(t)[value],
                },
                '>*:first-child': {
                    marginRight: boxSpaceLens.get(t)['none'],
                }
            }
        }),
        mkChildMarginBottom: ({ value, theme: t }) => ({
            selector: {
                '>*': {
                    marginBottom: boxSpaceLens.get(t)[value],
                },
                '>*:first-child': {
                    marginBottom: boxSpaceLens.get(t)['none'],
                }
            }
        }),
        mkChildMarginTop: ({ value, theme: t }) => ({
            selector: {
                '>*': {
                    marginTop: boxSpaceLens.get(t)[value],
                },
                '>*:first-child': {
                    marginTop: boxSpaceLens.get(t)['none'],
                }
            }
        }),
        /**
         * The property is used to setting the x margin of an element.
         */
        mkMarginH: ({ value, theme: t }) => ({
            marginLeft: boxSpaceLens.get(t)[value],
            marginRight: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the y margin of an element.
         */
        mkMarginV: ({ value, theme: t }) => ({
            marginTop: boxSpaceLens.get(t)[value],
            marginBottom: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the margin properties in one declaration
         */
        mkMarginGutter: ({ value, theme: t }) => ({
            margin: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the top margin of an element.
         */
        mkMarginGutterTop: ({ value, theme: t }) => ({
            marginTop: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom margin of an element.
         */
        mkMarginGutterBottom: ({ value, theme: t }) => ({
            marginBottom: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the left margin of an element.
         */
        mkMarginGutterLeft: ({ value, theme: t }) => ({
            marginLeft: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the right margin of an element.
         */
        mkMarginGutterRight: ({ value, theme: t }) => ({
            marginRight: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the x margin of an element.
         */
        mkMarginGutterH: ({ value, theme: t }) => ({
            marginLeft: boxGutterLens.get(t)[value],
            marginRight: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the y margin of an element.
         */
        mkMarginGutterV: ({ value, theme: t }) => ({
            marginTop: boxGutterLens.get(t)[value],
            marginBottom: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the padding of an element.
         */
        mkPadding: ({ value, theme: t }) => ({
            padding: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the top padding of an element.
         */
        mkPaddingTop: ({ value, theme: t }) => ({
            paddingTop: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom padding of an element.
         */
        mkPaddingBottom: ({ value, theme: t }) => ({
            paddingBottom: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the left padding of an element.
         */
        mkPaddingLeft: ({ value, theme: t }) => ({
            paddingLeft: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the right padding of an element.
         */
        mkPaddingRight: ({ value, theme: t }) => ({
            paddingRight: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the x padding of an element.
         */
        mkPaddingH: ({ value, theme: t }) => ({
            paddingLeft: boxSpaceLens.get(t)[value],
            paddingRight: boxSpaceLens.get(t)[value],
        }),
        /**
         * The property is used to setting the y padding of an element.
         */
        mkPaddingV: ({ value, theme: t }) => ({
            paddingTop: boxSpaceLens.get(t)[value],
            paddingBottom: boxSpaceLens.get(t)[value],
        }),
        /**
        * The property is used to setting the padding of an element.
        */
        mkPaddingGutter: ({ value, theme: t }) => ({
            padding: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the top padding of an element.
         */
        mkPaddingGutterTop: ({ value, theme: t }) => ({
            paddingTop: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom padding of an element.
         */
        mkPaddingGutterBottom: ({ value, theme: t }) => ({
            paddingBottom: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the left padding of an element.
         */
        mkPaddingGutterLeft: ({ value, theme: t }) => ({
            paddingLeft: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the right padding of an element.
         */
        mkPaddingGutterRight: ({ value, theme: t }) => ({
            paddingRight: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the x padding of an element.
         */
        mkPaddingGutterH: ({ value, theme: t }) => ({
            paddingLeft: boxGutterLens.get(t)[value],
            paddingRight: boxGutterLens.get(t)[value],
        }),
        /**
         * The property is used to setting the y padding of an element.
         */
        mkPaddingGutterV: ({ value, theme: t }) => ({
            paddingTop: boxGutterLens.get(t)[value],
            paddingBottom: boxGutterLens.get(t)[value],
        }),
        mkSquare: ({ value }) =>
            value === 'full' ?
                { width: 1, height: 1 } : value === 'fullScreen' ? { width: '100vw', height: '100vh' } :
                    { width: value, height: value }
        ,
        mkContentWidth: ({ value, theme: t }) => ({
            width: boxContentWidthLens.get(t)[value],
        }),
        mkContainerWidth: ({ value, theme: t }) => ({
            width: boxContainerLens.get(t)[value],
        }),
        mkElementWidth: ({ value, theme: t }) => ({
            width: boxElementWidthLens.get(t)[value],
        }),
        mkElementHeight: ({ value, theme: t }) => ({
            height: boxElementWidthLens.get(t)[value],
        }),
        mkTextFieldHeight: ({ value, theme: t }) => ({
            height: boxTextFieldWidthLens.get(t)[value],
        }),
        mkContainerHeight: ({ value, theme: t }) => ({
            height: boxContainerLens.get(t)[value],
        }),
        mkBarHeight: ({ value, theme: t }) => ({
            height: boxBarHeightLens.get(t)[value],
        }),
    },
    ruleEnum: {
        mkWidth: {
            fullScreen: constant({
                width: '100vw',
            }),
            full: constant({
                width: 1,
            }),
            none: constant({
                width: 0,
            }),
            inherit: constant({
                width: 'inherit',
            }),

        },
        mkMinWidth: {
            fullScreen: constant({
                minWidth: '100vw',
            }),
            full: constant({
                minWidth: 1,
            }),
            none: constant({
                minWidth: 0,
            }),
            inherit: constant({
                minWidth: 'inherit',
            }),
        },
        mkMaxWidth: {
            fullScreen: constant({
                maxWidth: '100vw',
            }),
            full: constant({
                maxWidth: '100%',
            }),
            none: constant({
                maxWidth: 0,
            }),
            inherit: constant({
                maxWidth: 'inherit',
            }),
        },
        mkHeight: {
            fullScreen: constant({
                height: '100vh',
            }),
            full: constant({
                height: '100%',
            }),
            none: constant({
                height: 0,
            }),
            inherit: constant({
                height: 'inherit',
            }),

        },
        mkMaxHeight: {
            fullScreen: constant({
                maxHeight: '100vh',
            }),
            full: constant({
                maxHeight: '100%',
            }),
            none: constant({
                maxHeight: 0,
            }),
            inherit: constant({
                maxHeight: 'inherit',
            }),

        },
        mkMinHeight: {
            fullScreen: constant({
                minHeight: '100vh',
            }),
            full: constant({
                minHeight: '100%',
            }),
            none: constant({
                minHeight: 0,
            }),
            inherit: constant({
                minHeight: 'inherit',
            }),

        },

    },

};

export const ruleModule = extendRuleModule(parentRuleModule)<Rule>({
    rule,
    theme,
})