/**
 * Border
 * @prop
 */
import { Props } from '../../basic';
import { Rule } from '../../base/rule';
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
    mkZIndex: 'moon' | 'tooltip' | 'alertDesktop' | 'popup' | 'modal' | 'overlay'
    | 'dropdown' | 'alertMobile' | 'nav' | 'bar' | 'base',
};
type EProps = {
    /**
     * scroll bar
     */
    mkScrollBar: 'horizontal' | 'vertical' | 'both' | 'none';

    /**
     * visibility
     */
    mkVisibility: 'hidden' | 'none' | 'elementInvisible' | 'hiddenWidth' | 'hiddenHeight',
    /**
     * align
     */
    mkAlign: 'imageCenter' | 'center',
    /**
     * layout
     */
    mkLayout: 'center' | 'column' | 'row' | 'inlineColumn' | 'inlineRow' | 'inlineCenter',
    /**
     * position
     */
    mkPosition: 'fixedLeftTop' | 'fixedRightTop' | 'fixedTop',
};
export type Props = SProps & EProps;
export const rule: Rule<SProps, EProps, Props, Theme> = {
    rule: {
        mkZIndex: (value, t) => ({ zIndex: t.zIndex[value] }),
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

        mkVisibility: {
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
                padding: '0',
                width: '0',
                height: '0',
            },
            hiddenWidth: {
                width: 0,
            },
            hiddenHeight: {
                height: 0,
            },
        },
        mkAlign: {
            imageCenter: {
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            },
            center: {
                margin: 'auto',

            },
        },
        mkLayout: {
            center: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            column: {
                display: 'flex',
                flexDirection: 'column',
            },
            row: {
                display: 'flex',
            },
            inlineCenter: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            inlineRow: {
                display: 'inline-flex',
            },
            inlineColumn: {
                display: 'inline-flex',
                flexDirection: 'column',
            },
        },
        mkPosition: {
            fixedLeftTop: {
                position: 'fixed',
                left: '0',
                top: '0',

            },
            fixedRightTop: {
                position: 'fixed',
                top: '0',
                right: '0',

            },
            fixedTop: {
                position: 'fixed',
                left: '0',
                top: '0',
                right: '0',

            },
        },
    },
};
