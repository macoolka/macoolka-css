
/**
 * @file
 */
import { Rule as ParentRule, ruleModule as parentRuleModule } from '../../basic';
import { ExtendRule, extendRuleModule } from '../../CssRule'
/**
# Container Property

The define container's layout and some about container's property

- Container is contain other element and not visible
@desczh
# 容器属性

容器属性定义容器的布局和一些与容器有关的其它属性
- 容器一般包含其他元素，本身并不可见
 * @mk
 * @memberof common
 * @name container
 * @title Container Property
 */


export interface Props extends SProps, EProps {

}
export type Theme = {
    zIndex: {
        moon: number,
        tooltip: number,
        alertDesktop: number,
        popup: number,
        modal: number,
        overlay: number,
        dropdown: number,
        alertMobile: number,
        appBar: number,
        nav: number,
        bar: number,
        base: number,
    },
};
export const theme: Theme = {
    zIndex: {
        moon: 9999,
        tooltip: 9990,
        alertDesktop: 9000,
        popup: 8700,
        modal: 8500,
        overlay: 8000,
        dropdown: 7000,
        alertMobile: 5000,
        appBar: 600,
        nav: 500,
        bar: 200,
        base: 1,
    },
};
export interface SProps {
    /**
     * zIndex
     * @desczh
     * Z轴数值
     */
  
    mkZIndex?: 'moon' | 'tooltip' | 'alertDesktop' | 'popup' | 'modal' | 'overlay'
    | 'dropdown' | 'alertMobile' | 'appBar' | 'nav' | 'bar' | 'base',
    /**
     * The element position is absolute and center in parent.
     * @desczh
     * 在绝对位置中居中
     */
  
    mkAbsoluteCenter?: {
        width: number,
        height: number,
    },
    /**
     * The element position is absolute and top and right in parent.
     * @desczh
     * 在绝对位置顶右
     */

    mkAbsoluteTopRight?: {
        width: number,
        height: number,
    },

};
export interface EProps {
    /**
     * scroll bar
     * @desczh
     * 滚动条
     */

    mkScrollBar?: 'horizontal' | 'vertical' | 'both' | 'none';

    /**
     * visibility
     * @desczh
     * 可视
     */

    mkVisible?: 'hidden' | 'none' | 'elementInvisible' | 'hiddenWidth' | 'hiddenHeight' | 'visibleHeight' | 'visible',
    /**
     * flex layout
     * @desczh
     * FLEX布局
     */

    mkFlex?: 'center' | 'column' | 'columnCenter' | 'row' | 'rowCenter'
    | 'rowReverse' | 'rowReverseCenter' | 'columnReverse' | 'columnReverseCenter' | 'rowAuto' | 'rowAutoCenter',
    /**
    * inline flex layout
    * @desczh
    * 内联FLEX布局
    */

    mkInlineFlex?: 'center' | 'column' | 'columnCenter' | 'row' | 'rowCenter'
    | 'rowReverse' | 'rowReverseCenter' | 'columnReverse' | 'columnReverseCenter' | 'rowAuto' | 'rowAutoCenter',
    /**
     * fixed position layout
     * @desczh
     * 固定位置布局
     */

    mkFixed?: 'left' | 'right' | 'top' | 'bottom' | 'full',
    /**
     *  absolute position layout
     * @desczh
     * 绝对位置布局
     */

    mkAbsolute?: 'left' | 'right' | 'top' | 'bottom' | 'full',
    /**
     * Sticky layout
     */

    mkSticky?: 'left' | 'right' | 'top' | 'bottom' | 'full',
    /**
     * block layout
     * @desczh
     * 块级布局
     */

    mkBlock?: 'center',
    /**
     * background image layout
     * @desczh
     * 背景图片布局
     */
    mkImage?: 'center' | 'fullHeight' | 'fullWidth',


};
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
const rule: Rule = {
    rule: {
        mkZIndex: ({ value, theme: t }) => ({ zIndex: t.zIndex[value] }),
        mkAbsoluteCenter: ({ value: { width, height } }) => ({
            position: 'absolute',
            width,
            height,
            top: '50%',
            left: '50%',
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: -height / 2,
            marginLeft: -width / 2,
            marginBottom: 0,
            marginRight: 0,
        }),
        mkAbsoluteTopRight: ({ value: { width, height } }) => ({
            position: 'absolute',
            width,
            height,
            top: -height / 2,
            right: -width / 2,
        }),
        /*         mkSticky:({value})=>value?({
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                }):({}) */
    },
    ruleEnum: {
        mkScrollBar: {
            horizontal: {
                overflowX: 'auto',
                overflowY: 'hidden',
            },
            vertical: {
                overflowX: 'hidden',
                overflowY: 'auto',
            },
            both: {
                overflowX: 'auto',
                overflowY: 'auto',
            },
            none: {
                overflowX: 'hidden',
                overflowY: 'hidden',
            },
        },

        mkVisible: {
            hidden: {
                visibility: 'hidden',
            },
            none: {
                display: 'none',
                visibility: 'hidden',
            },
            elementInvisible: {
                position: 'fixed',
                opacity: 0,
                pointerEvents: 'none',
                margin: '0',
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                width: '0',
                height: '0',
            },
            hiddenWidth: {
                width: 0,
            },
            hiddenHeight: {
                display: 'none',
                height: 0,
            },
            visibleHeight: {
                display: 'flex',
                height: 'auto',
            },
            visible: {
                visibility: 'visible'
            }
        },
        mkAbsolute: {
            full: {
                position: 'absolute',
                width: 1,
                height: 1,
                top: 0,
                left: 0,
                margin: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
            },
            left: {
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                height: 1,

            },
            right: {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                height: 1,

            },
            top: {
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                width: 1,
            },
            bottom: {
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0,
                width: 1,
            },
        },
        mkBlock: {
            center: {
                marginLeft: 'auto',
                marginRight: 'auto',

            },
        },
        mkImage: {
            center: {
                backgroundRepeat: "no-repeat,no-repeat",
                backgroundPosition: "center center,center center",
                backgroundSize: "cover,cover",
            },
            fullHeight: {
                height: '100%',
                transform: 'translateX(-50%)',
                position: 'relative',
                left: '50%',
            },
            fullWidth: {
                width: '100%',
                position: 'relative',
                transform: 'translateY(-50%)',
                top: '50%',
            },
        },
        mkFlex: {
            center: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            column: {
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            columnCenter: {
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'center',
                flexDirection: 'column',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            row: {
                display: 'flex',
                alignItems: 'flex-start',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowCenter: {
                display: 'flex',
                alignItems: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowReverse: {
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'flex-start',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowReverseCenter: {
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            columnReverse: {
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'stretch',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            columnReverseCenter: {
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowAuto: ({
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                overflowY: 'auto',
                listStyle: 'none',
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            }),
            rowAutoCenter: ({
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                overflowY: 'auto',
                listStyle: 'none',
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            })
        },
        mkInlineFlex: {
            center: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            column: {
                display: 'inline-flex',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            columnCenter: {
                display: 'inline-flex',
                alignItems: 'stretch',
                justifyContent: 'center',
                flexDirection: 'column',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            row: {
                display: 'inline-flex',
                alignItems: 'flex-start',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowCenter: {
                display: 'inline-flex',
                alignItems: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowReverse: {
                display: 'inline-flex',
                flexDirection: 'row-reverse',
                alignItems: 'flex-start',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowReverseCenter: {
                display: 'inline-flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            columnReverse: {
                display: 'inline-flex',
                flexDirection: 'column-reverse',
                alignItems: 'flex-start',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            columnReverseCenter: {
                display: 'inline-flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                listStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            },
            rowAuto: ({
                display: 'inline-flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                overflowY: 'auto',
                listStyle: 'none',
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            }),
            rowAutoCenter: ({
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                overflowY: 'auto',
                listStyle: 'none',
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
            })
        },
        mkFixed: {
            left: {
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,

            },
            right: {
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,

            },
            top: {
                position: 'fixed',
                left: 0,
                top: 0,
                right: 0,
            },
            bottom: {
                position: 'fixed',
                left: 0,
                bottom: 0,
                right: 0,
            },
            full: {
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
        },
        mkSticky: {
            left: {
                position: 'sticky',
                left: 0,
                top: 0,
                bottom: 0,

            },
            right: {
                position: 'sticky',
                top: 0,
                right: 0,
                bottom: 0,

            },
            top: {
                position: 'sticky',
                left: 0,
                top: 0,
                right: 0,
            },
            bottom: {
                position: 'sticky',
                left: 0,
                bottom: 0,
                right: 0,
            },
            full: {
                position: 'sticky',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
        },
    },
};

export const ruleModule = extendRuleModule(parentRuleModule)<Rule>({
    rule,
    theme,
})