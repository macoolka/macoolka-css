/**
 * convert number type to px or precent
 * @getter
 */
import { OutRule } from '../../basic';
import {Level} from '../types';
import { Lens } from 'mocoolka-fp/lib/Monocle';
type Width = {
    content: number,
    gutter: number;
    nav: number;
    third: number;
};

type Box = {
    width: Width,
    space: {
       [key in Level] : number
    }
};
export type Theme = {
    box: Box

};
const box = Lens.fromProp<Theme, 'box'>('box');
const width = Lens.fromProp<Box, 'width'>('width');

const content = Lens.fromProp<Width, 'content'>('content');
const gutter = Lens.fromProp<Width, 'gutter'>('gutter');
const nav = Lens.fromProp<Width, 'nav'>('nav');
const third = Lens.fromProp<Width, 'third'>('third');

const contentTheme = box.compose(width).compose(content);
const gutterTheme = box.compose(width).compose(gutter);
const navTheme = box.compose(width).compose(nav);
const thirdTheme = box.compose(width).compose(third);

export const theme: Theme = {
    box: {
        width: {
            content: 1160,
            gutter: 40,
            nav: 256,
            third: 355,
        },
        space: {
            small: 4,
            medium: 8,
            large: 16,
        },

    },

};
type SUnit = Level;
export type SProps = {
    /**
     * The property is used to setting the margin properties in one declaration
     */
    mkMargin?: SUnit,
    /**
     * The property is used to setting the top margin of an element.
     */
    mkMarginTop?: SUnit,
    /**
     * The property is used to setting the bottom margin of an element.
     */
    mkMarginBottom?: SUnit,
    /**
     * The property is used to setting the left margin of an element.
     */
    mkMarginLeft?: SUnit,
    /**
     * The property is used to setting the right margin of an element.
     */
    mkMarginRight?: SUnit,
    /**
     * The property is used to setting the x margin of an element.
     */
    mkMarginH?: SUnit,
    /**
     * The property is used to setting the y margin of an element.
     */
    mkMarginV?: SUnit,
    /**
     * The property is used to setting the padding of an element.
     */
    mkPadding?: SUnit,
    /**
     * The property is used to setting the top padding of an element.
     */
    mkPaddingTop?: SUnit,
    /**
     * The property is used to setting the bottom padding of an element.
     */
    mkPaddingBottom?: SUnit,
    /**
     * The property is used to setting the left padding of an element.
     */
    mkPaddingLeft?: SUnit,
    /**
     * The property is used to setting the right padding of an element.
     */
    mkPaddingRight?: SUnit,
    /**
     * The property is used to setting the x padding of an element.
     */
    mkPaddingH?: SUnit,
    /**
     * The property is used to setting the y padding of an element.
     */
    mkPaddingV?: SUnit,

    mkSquare?: 'full' | 'fullScreen' | number,
    marginH?: number | string,
    marginV?: number | string,
    paddingH?: number | string,
    paddingV?: number | string,

};
export type EProps = {
    mkWidth?: 'full' | 'fullScreen' | 'content' | 'nav' | 'gutter'
    | 'third'
    mkMinWidth?: 'full' | 'fullScreen' | 'content' | 'nav' | 'gutter'
    | 'third'
    mkMaxWidth?: 'full' | 'fullScreen' | 'content' | 'nav'
    | 'gutter' | 'third'
    mkHeight?: 'full' | 'fullScreen'
    mkMinHeight?: 'full' | 'fullScreen'
    mkMaxHeight?: 'full' | 'fullScreen',

};
export type Props = EProps & SProps;
export const mapProps = <T>(name: keyof T) => <P>({ value }: { value: P }) => ({ name: value });
export const rule: OutRule<SProps, EProps, Theme> = {
    rule: {
        marginH: ({value}) => ({
            marginLeft: value,
            marginRight: value,
        }),
        marginV: ({value}) => ({
            marginTop: value,
            marginBottom: value,
        }),
        paddingH: ({value}) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingV: ({value}) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        /**
         * The property is used to setting the margin properties in one declaration
         */
        mkMargin: ({ value, theme : t }) => ({
            margin: t.box.space[value],
        }),
        /**
         * The property is used to setting the top margin of an element.
         */
        mkMarginTop: ({ value, theme : t }) => ({
            marginTop: t.box.space[value],
        }),
        /**
         * The property is used to setting the bottom margin of an element.
         */
        mkMarginBottom: ({ value, theme : t }) => ({
            marginBottom: t.box.space[value],
        }),
        /**
         * The property is used to setting the left margin of an element.
         */
        mkMarginLeft: ({ value , theme : t }) => ({
            marginLeft: t.box.space[value],
        }),
        /**
         * The property is used to setting the right margin of an element.
         */
        mkMarginRight: ({ value , theme : t }) => ({
            marginRight: t.box.space[value],
        }),
        /**
         * The property is used to setting the x margin of an element.
         */
        mkMarginH: ({ value, theme : t  }) => ({
            marginLeft: t.box.space[value],
            marginRight: t.box.space[value],
        }),
        /**
         * The property is used to setting the y margin of an element.
         */
        mkMarginV: ({ value, theme : t  }) => ({
            marginTop: t.box.space[value],
            marginBottom: t.box.space[value],
        }),
        /**
         * The property is used to setting the padding of an element.
         */
        mkPadding: ({ value, theme : t  }) => ({
            padding: t.box.space[value],
        }),
        /**
         * The property is used to setting the top padding of an element.
         */
        mkPaddingTop: ({ value , theme : t }) => ({
            paddingTop: t.box.space[value],
        }),
        /**
         * The property is used to setting the bottom padding of an element.
         */
        mkPaddingBottom: ({ value, theme : t  }) => ({
            paddingBottom: t.box.space[value],
        }),
        /**
         * The property is used to setting the left padding of an element.
         */
        mkPaddingLeft: ({ value, theme : t  }) => ({
            paddingLeft: t.box.space[value],
        }),
        /**
         * The property is used to setting the right padding of an element.
         */
        mkPaddingRight: ({ value , theme : t }) => ({
            paddingRight: t.box.space[value],
        }),
        /**
         * The property is used to setting the x padding of an element.
         */
        mkPaddingH: ({ value, theme : t  }) => ({
            paddingLeft: t.box.space[value],
            paddingRight: t.box.space[value],
        }),
        /**
         * The property is used to setting the y padding of an element.
         */
        mkPaddingV: ({ value , theme : t }) => ({
            paddingTop: t.box.space[value],
            paddingBottom: t.box.space[value],
        }),
        mkSquare: ({ value }) =>
            value === 'full' ?
                { width: '100%', height: '100%' } :
                { width: value, height: value }
        ,
    },
    ruleEnum: {
        mkWidth: {
            fullScreen: _ => ({
                width: '100vw',
            }),
            full: _ => ({
                width: '100%',
            }),
            content: ({ theme : t }) => ({ width: contentTheme.get(t) }),
            nav: ({ theme : t }) => ({ width: navTheme.get(t) }),
            gutter: ({ theme : t }) => ({ width: gutterTheme.get(t) }),
            third: ({ theme : t }) => ({ width: thirdTheme.get(t) }),

        },
        mkMinWidth: {
            fullScreen: _ => ({
                minWidth: '100vw',
            }),
            full: _ => ({
                minWidth: '100%',
            }),
            content: ({ theme : t }) => ({ minWidth: contentTheme.get(t) }),
            nav: ({ theme : t }) => ({ minWidth: navTheme.get(t) }),
            gutter: ({ theme : t }) => ({ minWidth: gutterTheme.get(t) }),
            third: ({ theme : t }) => ({ minWidth: thirdTheme.get(t) }),

        },
        mkMaxWidth: {
            fullScreen: _ => ({
                maxWidth: '100vw',
            }),
            full: _ => ({
                maxWidth: '100%',
            }),
            content: ({ theme : t }) => ({ maxWidth: contentTheme.get(t) }),
            nav: ({ theme : t }) => ({ maxWidth: navTheme.get(t) }),
            gutter: ({ theme : t }) => ({ maxWidth: gutterTheme.get(t) }),
            third: ({ theme : t }) => ({ maxWidth: thirdTheme.get(t) }),
        },
        mkHeight: {
            fullScreen: _ => ({
                height: '100vh',
            }),
            full: _ => ({
                height: '100%',
            }),

        },
        mkMaxHeight: {
            fullScreen: _ => ({
                maxHeight: '100vh',
            }),
            full: _ => ({
                maxHeight: '100%',
            }),

        },
        mkMinHeight: {
            fullScreen: _ => ({
                minHeight: '100vh',
            }),
            full: _ => ({
                minHeight: '100%',
            }),

        },

    },

};
