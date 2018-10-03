/**
 * convert number type to px or precent
 * @getter
 */
import { Props } from '../../basic/';
import { Rule } from '../../base/rule';

export type Theme = {
    box: {
        width: {
            content: number,
            gutter: number;
            nav: number;
            third: number;
        },
        size: {
            small: number,
            medium: number,
            large: number,
            xlarge: number,
        }
    }

};
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
type SProps = {
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
type EProps = {
    mkWidth: 'full' | 'content' | 'nav' | 'gutter' | 'third' | 'small' | 'medium' | 'large' | 'xlarge';
    mkHeight: 'full' |'small' | 'medium' | 'large' | 'xlarge';
    mkSquare: 'small' | 'medium' | 'large' | 'xlarge';
};
export type Props = EProps & SProps;
export const rule: Rule<SProps, EProps, Props, Theme> = {
    rule: {
        /**
         * The property is used to setting the margin properties in one declaration
         */
        mkMargin: 'margin',
        /**
         * The property is used to setting the top margin of an element.
         */
        mkMarginTop: ('marginTop'),
        /**
         * The property is used to setting the bottom margin of an element.
         */
        mkMarginBottom: ('marginBottom'),
        /**
         * The property is used to setting the left margin of an element.
         */
        mkMarginLeft: ('marginLeft'),
        /**
         * The property is used to setting the right margin of an element.
         */
        mkMarginRight: ('marginRight'),
        /**
         * The property is used to setting the x margin of an element.
         */
        mkMarginH: (['marginLeft', 'marginRight']),
        /**
         * The property is used to setting the y margin of an element.
         */
        mkMarginV: (['marginTop', 'marginBottom']),
        /**
         * The property is used to setting the padding of an element.
         */
        mkPadding: ('padding'),
        /**
         * The property is used to setting the top padding of an element.
         */
        mkPaddingTop: ('paddingTop'),
        /**
         * The property is used to setting the bottom padding of an element.
         */
        mkPaddingBottom: ('paddingBottom'),
        /**
         * The property is used to setting the left padding of an element.
         */
        mkPaddingLeft: ('paddingLeft'),
        /**
         * The property is used to setting the right padding of an element.
         */
        mkPaddingRight: ('paddingRight'),
        /**
         * The property is used to setting the x padding of an element.
         */
        mkPaddingH: ['paddingLeft', 'paddingRight'],
        /**
         * The property is used to setting the y padding of an element.
         */
        mkPaddingV: (['paddingTop', 'paddingBottom']),

    },
    ruleEnum: {
        mkWidth: {
            full: {
                width: '100%',
                maxWidth: '100%',
            },
            content: {
                width: (t) => t.box.width.content,
            },
            nav: {
                width: (t) => t.box.width.nav,
            },
            gutter: {
                width: (t) => t.box.width.gutter,
            },
            third: {
                width: (t) => t.box.width.third,
            },
            small: {
                width: (t) => t.box.size.small,
            },
            medium: {
                width: (t) => t.box.size.medium,
            },
            large: {
                width: (t) => t.box.size.large,
            },
            xlarge: {
                width: (t) => t.box.size.xlarge,
            },
        },
        mkHeight: {
            full: {
                minHeight: '100vh',
                maxHeight: '100vh',
            },
            small: {
                height: (t) => t.box.size.small,
            },
            medium: {
                height: (t) => t.box.size.medium,
            },
            large: {
                height: (t) => t.box.size.large,
            },
            xlarge: {
                height: (t) => t.box.size.xlarge,

            },
        },
        mkSquare: {
            small: {
                width: (t) => t.box.size.small,
                height: (t) => t.box.size.small,
            },
            medium: {
                width: (t) => t.box.size.medium,
                height: (t) => t.box.size.medium,
            },
            large: {
                width: (t) => t.box.size.large,
                height: (t) => t.box.size.large,
            },
            xlarge: {
                width: (t) => t.box.size.xlarge,
                height: (t) => t.box.size.xlarge,

            },
        },
    },

};
