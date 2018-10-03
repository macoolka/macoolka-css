
/**
 * Text
 * @prop
 */
import { Props } from '../../basic';
import { Rule } from '../../base/rule';
export type Theme = {
    font: {
        weight: {
            thin: number;
            light: number;
            regular: number;
            medium: number;
            bold: number;
            black: number;
        },
        size: {
            h1: number,
            h2: number,
            h3: number,
            h4: number,
            h5: number,
            h6: number,
            subtitle: number,
            p: number,
            caption: number,
            overline: number,
        },
        family: {
            sansSerif: string;
            serif: string;
            monospace: string;
        },
    },
};
export const theme: Theme = {
    font: {
        weight: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
            black: 900,
        },
        size: {
            h1: 96,
            h2: 60,
            h3: 48,
            h4: 32,
            h5: 24,
            h6: 20,
            subtitle: 16,
            p: 14,
            caption: 12,
            overline: 10,
        },
        family: {
            sansSerif: 'Roboto,Open Sans, Helvetica Neue, Helvetica,Arial, sans-serif',
            serif: 'Georgia, Cambria, Times New Roman, Times, serif',
            monospace: 'Consolas, Liberation Mono, Courier, monospace',
        },
    },
};
type SProps = {

    /**
     * fontWeight
     */
    mkFontWeight: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black',
    /**
     * fontFamily
     */
    mkFontFamily: 'sansSerif' | 'serif' | 'monospace',
    /**
     * fontSize
     */
    mkFontSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle' | 'p' | 'caption' | 'overline',
    /**
     * noWrap
     */
    mkNoWrap?: boolean,

};
type EProps = {
    /**
     * typography
     */
    mkTypography: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'

};
export type Props = EProps & SProps;

export const rule: Rule<SProps, EProps, Props, Theme> = {
    ruleEnum: {
        mkTypography: {
            h1: {
                fontWeight: (t) => t.font.weight.light,
                letterSpacing: '-.01562em',
                lineHeight: '6rem',
                fontSize: (t) => t.font.size.h1,
                textDecoration: 'inherit',
                textTransform: 'inherit',

            },
            h2: {
                fontWeight: (t) => t.font.weight.light,
                letterSpacing: '-.00833em',
                lineHeight: '3.75rem',
                fontSize: (t) => t.font.size.h2,
                textDecoration: 'inherit',
                textTransform: 'inherit',

            },
            h3: {
                fontWeight: (t) => t.font.weight.regular,
                letterSpacing: '0em',
                lineHeight: '3.125rem',
                fontSize: (t) => t.font.size.h3,
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
            h4: {
                fontWeight: (t) => t.font.weight.regular,
                letterSpacing: '.00735em',
                lineHeight: '2.5rem',
                fontSize: (t) => t.font.size.h4,
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
            h5: {
                fontWeight: (t) => t.font.weight.regular,
                letterSpacing: '0em',
                lineHeight: '2rem',
                fontSize: (t) => t.font.size.h5,
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
            h6: {

                fontWeight: (t) => t.font.weight.medium,
                letterSpacing: '.0125em',
                lineHeight: '2rem',
                fontSize: (t) => t.font.size.h6,
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
            subtitle1: {
                fontWeight: (t) => t.font.weight.regular,
                letterSpacing: '.00937em',
                lineHeight: '1.75rem',
                fontSize: (t) => t.font.size.subtitle,
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
            subtitle2: {

                fontWeight: (t) => t.font.weight.medium,
                letterSpacing: '.00714em',
                lineHeight: '1.375rem',
                fontSize: (t) => t.font.size.p,
                textDecoration: 'inherit',
                textTransform: 'inherit',

            },
            body1: {

                fontWeight: (t) => t.font.weight.medium,
                letterSpacing: '.03125em',
                lineHeight: '1.5rem',
                fontSize: (t) => t.font.size.subtitle,
                textDecoration: 'inherit',
                textTransform: 'inherit',

            },
            body2: {

                fontWeight: (t) => t.font.weight.regular,
                letterSpacing: '.01786em',
                lineHeight: '1.25rem',
                fontSize: (t) => t.font.size.p,
                textDecoration: 'inherit',
                textTransform: 'inherit',

            },
            button: {
                fontWeight: (t) => t.font.weight.medium,
                letterSpacing: '.08929em',
                lineHeight: '2.25rem',
                fontSize: (t) => t.font.size.p,
                textDecoration: 'none',
                textTransform: 'uppercase',

            },
            caption: {

                fontWeight: (t) => t.font.weight.regular,
                letterSpacing: '.03333em',
                lineHeight: '1.25rem',
                fontSize: (t) => t.font.size.caption,
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
            overline: {

                fontWeight: (t) => t.font.weight.medium,
                letterSpacing: '.16667em',
                lineHeight: '2rem',
                fontSize: (t) => t.font.size.overline,
                textDecoration: 'inherit',
                textTransform: 'uppercase',

            },
        },
    },
    rule: {
        mkFontSize: (v, t) => ({ fontSize: t.font.size[v] }),
        mkFontWeight: (v, t) => ({ fontWeight: t.font.weight[v] }),
        mkFontFamily: (v, t) => ({ fontFamily: t.font.family[v] }),
        mkNoWrap: (a: boolean) => a ? ({
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }) : {},
    },
};

export default rule;
