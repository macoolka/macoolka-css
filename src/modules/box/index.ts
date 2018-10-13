/**
 * convert number type to px or precent
 * @getter
 */
import { UnitProps } from '../../basic/';
import { Rule } from '../../base/rule';
import { Lens } from 'mocoolka-fp/lib/Monocle';
type Width = {
    content: number,
    gutter: number;
    nav: number;
    third: number;
};
type Size = {
    small: number,
    medium: number,
    large: number,
    xlarge: number,
};
type Box = {
    width: Width,
    size: Size
};
export type Theme = {
    box: Box

};
const box = Lens.fromProp<Theme, 'box'>('box');
const width = Lens.fromProp<Box, 'width'>('width');
const size = Lens.fromProp<Box, 'size'>('size');
const content = Lens.fromProp<Width, 'content'>('content');
const gutter = Lens.fromProp<Width, 'gutter'>('gutter');
const nav = Lens.fromProp<Width, 'nav'>('nav');
const third = Lens.fromProp<Width, 'third'>('third');
const small = Lens.fromProp<Size, 'small'>('small');
const medium = Lens.fromProp<Size, 'medium'>('medium');
const large = Lens.fromProp<Size, 'large'>('large');
const xlarge = Lens.fromProp<Size, 'xlarge'>('xlarge');
const contentTheme = box.compose(width).compose(content);
const gutterTheme = box.compose(width).compose(gutter);
const navTheme = box.compose(width).compose(nav);
const thirdTheme = box.compose(width).compose(third);
const smallTheme = box.compose(size).compose(small);
const mediumTheme = box.compose(size).compose(medium);
const largeTheme = box.compose(size).compose(large);
const xlargeTheme = box.compose(size).compose(xlarge);
export const theme: Theme = {
    box: {
        width: {
            content: 1160,
            gutter: 40,
            nav: 256,
            third: 355,
        },
        size: {
            small: 18,
            medium: 24,
            large: 36,
            xlarge: 48,
        },
    },

};
type SUnit = 0 | 1 | 2 | 4 | 6 | 8 | 12 | 16 | 24 | 36 | 48 | 64 | 124;
export type SProps = {
    /**
     * The property is used to setting the margin properties in one declaration
     */
    mkMargin: SUnit,
    /**
     * The property is used to setting the top margin of an element.
     */
    mkMarginTop: SUnit,
    /**
     * The property is used to setting the bottom margin of an element.
     */
    mkMarginBottom: SUnit,
    /**
     * The property is used to setting the left margin of an element.
     */
    mkMarginLeft: SUnit,
    /**
     * The property is used to setting the right margin of an element.
     */
    mkMarginRight: SUnit,
    /**
     * The property is used to setting the x margin of an element.
     */
    mkMarginH: SUnit,
    /**
     * The property is used to setting the y margin of an element.
     */
    mkMarginV: SUnit,
    /**
     * The property is used to setting the padding of an element.
     */
    mkPadding: SUnit,
    /**
     * The property is used to setting the top padding of an element.
     */
    mkPaddingTop: SUnit,
    /**
     * The property is used to setting the bottom padding of an element.
     */
    mkPaddingBottom: SUnit,
    /**
     * The property is used to setting the left padding of an element.
     */
    mkPaddingLeft: SUnit,
    /**
     * The property is used to setting the right padding of an element.
     */
    mkPaddingRight: SUnit,
    /**
     * The property is used to setting the x padding of an element.
     */
    mkPaddingH: SUnit,
    /**
     * The property is used to setting the y padding of an element.
     */
    mkPaddingV: SUnit,

};
export type EProps = {
    mkWidth: 'full' | 'fullScreen' | 'content' | 'nav' | 'gutter'
    | 'third' | 'small' | 'medium' | 'large' | 'xlarge';
    mkMinWidth: 'full' | 'fullScreen' | 'content' | 'nav' | 'gutter'
    | 'third' | 'small' | 'medium' | 'large' | 'xlarge';
    mkMaxWidth: 'full' | 'fullScreen' | 'content' | 'nav'
    | 'gutter' | 'third' | 'small' | 'medium' | 'large' | 'xlarge';
    mkHeight: 'full' | 'fullScreen' | 'small' | 'medium' | 'large' | 'xlarge';
    mkMinHeight: 'full' | 'fullScreen' | 'small' | 'medium' | 'large' | 'xlarge';
    mkMaxHeight: 'full' | 'fullScreen' | 'small' | 'medium' | 'large' | 'xlarge';

    mkSquare: 'small' | 'medium' | 'large' | 'xlarge';
};
export type Props = EProps & SProps;
export const rule: Rule<SProps, EProps, UnitProps, Theme> = {
    rule: {
        /**
         * The property is used to setting the margin properties in one declaration
         */
        mkMargin: a => ({
            margin: a,
        }),
        /**
         * The property is used to setting the top margin of an element.
         */
        mkMarginTop: a => ({
            marginTop: a,
        }),
        /**
         * The property is used to setting the bottom margin of an element.
         */
        mkMarginBottom: a => ({
            marginBottom: a,
        }),
        /**
         * The property is used to setting the left margin of an element.
         */
        mkMarginLeft: a => ({
            marginLeft: a,
        }),
        /**
         * The property is used to setting the right margin of an element.
         */
        mkMarginRight: a => ({
            marginRight: a,
        }),
        /**
         * The property is used to setting the x margin of an element.
         */
        mkMarginH: a => ({
            marginLeft: a,
            marginRight: a,
        }),
        /**
         * The property is used to setting the y margin of an element.
         */
        mkMarginV: a => ({
            marginTop: a,
            marginBottom: a,
        }),
        /**
         * The property is used to setting the padding of an element.
         */
        mkPadding: a => ({
            padding: a,
        }),
        /**
         * The property is used to setting the top padding of an element.
         */
        mkPaddingTop: a => ({
            paddingTop: a,
        }),
        /**
         * The property is used to setting the bottom padding of an element.
         */
        mkPaddingBottom: a => ({
            paddingBottom: a,
        }),
        /**
         * The property is used to setting the left padding of an element.
         */
        mkPaddingLeft: a => ({
            paddingLeft: a,
        }),
        /**
         * The property is used to setting the right padding of an element.
         */
        mkPaddingRight: a => ({
            paddingRight: a,
        }),
        /**
         * The property is used to setting the x padding of an element.
         */
        mkPaddingH: a => ({
            paddingLeft: a,
            paddingRight: a,
        }),
        /**
         * The property is used to setting the y padding of an element.
         */
        mkPaddingV: a => ({
            paddingTop: a,
            paddingBottom: a,
        }),

    },
    ruleEnum: {
        mkWidth: {
            fullScreen: a => a ? ({
                width: '100vw',
            }) : {},
            full: a => a ? ({
                width: '100%',
            }) : {},
            content: t => ({ width: contentTheme.get(t) }),
            nav: t => ({ width: navTheme.get(t) }),
            gutter: t => ({ width: gutterTheme.get(t) }),
            third: t => ({ width: thirdTheme.get(t) }),
            small: t => ({ width: smallTheme.get(t) }),
            medium: t => ({ width: mediumTheme.get(t) }),
            large: t => ({ width: largeTheme.get(t) }),
            xlarge: t => ({ width: xlargeTheme.get(t) }),
        },
        mkMinWidth: {
            fullScreen: a => a ? ({
                minWidth: '100vw',
            }) : {},
            full: a => a ? ({
                minWidth: '100%',
            }) : {},
            content: t => ({ minWidth: contentTheme.get(t) }),
            nav: t => ({ minWidth: navTheme.get(t) }),
            gutter: t => ({ minWidth: gutterTheme.get(t) }),
            third: t => ({ minWidth: thirdTheme.get(t) }),
            small: t => ({ minWidth: smallTheme.get(t) }),
            medium: t => ({ minWidth: mediumTheme.get(t) }),
            large: t => ({ minWidth: largeTheme.get(t) }),
            xlarge: t => ({ minWidth: xlargeTheme.get(t) }),

        },
        mkMaxWidth: {
            fullScreen: a => a ? ({
                maxWidth: '100vw',
            }) : {},
            full: a => a ? ({
                maxWidth: '100%',
            }) : {},
            content: t => ({ maxWidth: contentTheme.get(t) }),
            nav: t => ({ maxWidth: navTheme.get(t) }),
            gutter: t => ({ maxWidth: gutterTheme.get(t) }),
            third: t => ({ maxWidth: thirdTheme.get(t) }),
            small: t => ({ maxWidth: smallTheme.get(t) }),
            medium: t => ({ maxWidth: mediumTheme.get(t) }),
            large: t => ({ maxWidth: largeTheme.get(t) }),
            xlarge: t => ({ maxWidth: xlargeTheme.get(t) }),
        },
        mkHeight: {
            fullScreen: a => a ? ({
                height: '100vh',
            }) : {},
            full: a => a ? ({
                height: '100%',
            }) : {},
            small: t => ({ height: smallTheme.get(t) }),
            medium: t => ({ height: mediumTheme.get(t) }),
            large: t => ({ height: largeTheme.get(t) }),
            xlarge: t => ({ height: xlargeTheme.get(t) }),
        },
        mkMaxHeight: {
            fullScreen: a => a ? ({
                maxHeight: '100vh',
            }) : {},
            full: a => a ? ({
                maxHeight: '100%',
            }) : {},
            small: t => ({ maxHeight: smallTheme.get(t) }),
            medium: t => ({ maxHeight: mediumTheme.get(t) }),
            large: t => ({ maxHeight: largeTheme.get(t) }),
            xlarge: t => ({ maxHeight: xlargeTheme.get(t) }),
        },
        mkMinHeight: {
            fullScreen: a => a ? ({
                minHeight: '100vh',
            }) : {},
            full: a => a ? ({
                minHeight: '100%',
            }) : {},
            small: t => ({ minHeight: smallTheme.get(t) }),
            medium: t => ({ minHeight: mediumTheme.get(t) }),
            large: t => ({ minHeight: largeTheme.get(t) }),
            xlarge: t => ({ minHeight: xlargeTheme.get(t) }),
        },
        mkSquare: {
            small: t => ({
                width: smallTheme.get(t),
                height: smallTheme.get(t),
            }),
            medium: t => ({
                width: mediumTheme.get(t),
                height: mediumTheme.get(t),
            }),
            large: t => ({
                width: largeTheme.get(t),
                height: largeTheme.get(t),
            }),
            xlarge: t => ({
                width: xlargeTheme.get(t),
                height: xlargeTheme.get(t),
            }),

        },
    },

};
