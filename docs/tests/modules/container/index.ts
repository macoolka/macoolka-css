/**
 * Border
 * @prop
 */
import { OutRule,UnitProps,OutTheme} from '../../basic';
import { constant } from 'mocoolka-fp/lib/function';
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
};
export interface EProps {
    /**
     * scroll bar
     */
    mkScrollBar?: 'horizontal' | 'vertical' | 'both' | 'none';

    /**
     * visibility
     */
    mkVisible?: 'hidden' | 'none' | 'elementInvisible' | 'hiddenWidth' | 'hiddenHeight' |'visible',
    /**
     * layout
     */
    mkFlex?: 'center' | 'column' | 'row',
        /**
     * layout
     */
    mkInlineFlex?: 'center' | 'column' | 'row' ,
    /**
     * position
     */
    mkFixed?: 'left' | 'right' | 'top' | 'bottom'|'full' ,
    /**
     * The property specifies  the element position is absolute and full in parent.
     */
    mkAbsolute?: 'left' | 'right' | 'top' | 'bottom'|'full' ,
    mkBlock?:'center',
    mkImage?:'center'

};
export type Props = SProps & EProps;
export const rule: OutRule<SProps, EProps,  OutTheme<Theme>> = {
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
    },
    ruleEnum: {
        mkScrollBar: {
            horizontal:constant({
                overflowX: 'auto',
                overflowY: 'hidden',
            } as UnitProps),
            vertical:constant({
                overflowX: 'hidden',
                overflowY: 'auto',
            }as UnitProps),
            both: constant({
                overflowX: 'auto',
                overflowY: 'auto',
            }as UnitProps),
            none: constant({
                overflowX: 'hidden',
                overflowY: 'hidden',
            }as UnitProps),
        },

        mkVisible: {
            hidden: constant ({
                visibility: 'hidden',
            }as UnitProps),
            none:constant({
                display: 'none',
                visibility: 'hidden',
            }as UnitProps),
            elementInvisible: constant ({
                position: 'fixed',
                opacity: 0,
                pointerEvents: 'none',
                margin: '0',
                padding: '0',
                width: '0',
                height: '0',
            }as UnitProps),
            hiddenWidth: constant ({
                width: 0,
            }as UnitProps),
            hiddenHeight: constant ({
                height: 0,
            }as UnitProps),
            visible:{
                visibility:'visible'
            }
        },
        mkAbsolute:{
            full:constant ({
                position: 'absolute',
                width: 1,
                height: 1,
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
            }as UnitProps),
            left:constant({
                position: 'absolute',
                left: 0,
                top: 0,
                bottom:0,
                height: 1,

            }as UnitProps),
            right: constant ({
                position: 'absolute',
                top: 0,
                right: 0,
                bottom:0,
                height: 1,

            }as UnitProps),
            top: constant({
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                width: 1,
            }as UnitProps),
            bottom:constant({
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0,
                width: 1,
            }as UnitProps),
        },
        mkBlock:{
            center: constant ({
                margin: 'auto',

            }as UnitProps),
        },
        mkImage: {
            center: constant({
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }as UnitProps),

        },
        mkFlex: {
            center: constant({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }as UnitProps),
            column: constant({
                display: 'flex',
                flexDirection: 'column',
            }as UnitProps),
            row: constant({
                display: 'flex',
                alignItems: 'center',
            }as UnitProps),
        },
        mkInlineFlex:{
            center: constant({
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }as UnitProps),
            column: constant ({
                display: 'inline-flex',
                flexDirection: 'column',
            }as UnitProps),
            row: constant ({
                display: 'inline-flex',
                alignItems: 'center',
            }as UnitProps),
        },
        mkFixed: {
            left: constant ({
                position: 'fixed',
                left: 0,
                top: 0,
                bottom:0,

            }as UnitProps),
            right: constant ({
                position: 'fixed',
                top: 0,
                right: 0,
                bottom:0,

            }as UnitProps),
            top: constant({
                position: 'fixed',
                left: 0,
                top: 0,
                right: 0,
            }as UnitProps),
            bottom: constant({
                position: 'fixed',
                left: 0,
                bottom: 0,
                right: 0,
            }as UnitProps),
            full: constant ({
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }as UnitProps),
        },
    },
};
