/**
 * Border
 * @prop
 */
import { OutRule } from '../../basic';
export type Theme = {
    width: {
        content: number,
        gutter: number;
        nav: number;
        third: number;
    },
    zIndex: {
        moon: number,
        tooltip: number,
        alertDesktop: number,
        popup: number,
        modal: number,
        overlay: number,
        dropdown: number,
        alertMobile: number,
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
        nav: 500,
        bar: 200,
        base: 1,
    },
    width: {
        content: 1160,
        gutter: 40,
        nav: 256,
        third: 355,
    },
};
export type SProps = {
    /**
     * zIndex
     */
    mkZIndex?: 'moon' | 'tooltip' | 'alertDesktop' | 'popup' | 'modal' | 'overlay'
    | 'dropdown' | 'alertMobile' | 'nav' | 'bar' | 'base',
    /**
     * The property specifies  the element position is absolute and center in parent.
     */
    mkAbsoluteCenter?: {
        width: number,
        height: number,
    },
    /**
     * The property specifies  the element position is absolute and full in parent.
     */
    mkAbsoluteFull?: boolean
};
export type EProps = {
    /**
     * scroll bar
     */
    mkScrollBar?: 'horizontal' | 'vertical' | 'both' | 'none';

    /**
     * visibility
     */
    mkVisibility?: 'hidden' | 'none' | 'elementInvisible' | 'hiddenWidth' | 'hiddenHeight',
    /**
     * align
     */
    mkAlign?: 'imageCenter' | 'center',
    /**
     * layout
     */
    mkLayout?: 'center' | 'column' | 'row' | 'inlineColumn' | 'inlineRow' | 'inlineCenter',
    /**
     * position
     */
    mkPosition?: 'fixedLeftTop' | 'fixedRightTop' | 'fixedTop',

};
export type Props = SProps & EProps;
export const rule: OutRule<SProps, EProps,  Theme> = {
    rule: {
        mkZIndex: ({value, theme : t}) => ({ zIndex: t.zIndex[value] }),
        mkAbsoluteCenter: ({value: {width, height}}) => ({
            position: 'absolute',
            width,
            height,
            top: '50%',
            left: '50%',
            padding: 0,
            marginTop: -height / 2,
            marginLeft: -width / 2,
            marginBottom: 0,
            marginRight: 0,
        }),
        mkAbsoluteFull: ({value}) => value ? {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
        } : {},
    },
    ruleEnum: {
        mkScrollBar: {
            horizontal: _ => ({
                overflowX: 'auto',
                overflowY: 'hidden',
            }),
            vertical: _ => ({
                overflowX: 'hidden',
                overflowY: 'auto',
            }),
            both: _ => ({
                overflowX: 'auto',
                overflowY: 'auto',
            }),
            none: _ => ({
                overflowX: 'hidden',
                overflowY: 'hidden',
            }),
        },

        mkVisibility: {
            hidden: _ => ({
                visibility: 'hidden',
            }),
            none: _ => ({
                display: 'none',
                visibility: 'hidden',
            }),
            elementInvisible: _ => ({
                position: 'fixed',
                opacity: 0,
                pointerEvents: 'none',
                margin: '0',
                padding: '0',
                width: '0',
                height: '0',
            }),
            hiddenWidth: _ => ({
                width: 0,
            }),
            hiddenHeight: _ => ({
                height: 0,
            }),
        },
        mkAlign: {
            imageCenter: _ => ({
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }),
            center: _ => ({
                margin: 'auto',

            }),
        },
        mkLayout: {
            center: _ => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }),
            column: _ => ({
                display: 'flex',
                flexDirection: 'column',
            }),
            row: _ => ({
                display: 'flex',
                alignItems: 'center',
            }),
            inlineCenter: _ => ({
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }),
            inlineRow: _ => ({
                display: 'inline-flex',
                alignItems: 'center',
            }),
            inlineColumn: _ => ({
                display: 'inline-flex',
                flexDirection: 'column',
            }),
        },
        mkPosition: {
            fixedLeftTop: _ => ({
                position: 'fixed',
                left: '0',
                top: '0',

            }),
            fixedRightTop: _ => ({
                position: 'fixed',
                top: '0',
                right: '0',

            }),
            fixedTop: _ => ({
                position: 'fixed',
                left: '0',
                top: '0',
                right: '0',

            }),

        },
    },
};
