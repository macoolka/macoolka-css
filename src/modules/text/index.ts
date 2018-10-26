
import { OutRule,OutTheme } from '../../basic';
import { Theme as ColorTheme, selector } from '../color';
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
export interface SProps  {

    /**
     * font weight
     */
    mkFontWeight?: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black',
    /**
     * font family
     */
    mkFontFamily?: 'sansSerif' | 'serif' | 'monospace',
    /**
     * font size
     */
    mkFontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle' | 'p' | 'caption' | 'overline',
    /**
     * text wrap
     */
    mkTextNoWrap?: boolean,
    /**
     * text transform
     */
    mkTextTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'inherit',
    /**
     * text align
     */
    mkTextAlign?: 'left' | 'right' | 'center' | 'justify' | 'inherit',
    /**
     * text direction
     */
    mkTextDirection?: 'ltr' | 'rtl' | 'inherit',
    /**
     * text decoration
     */
    mkTextDecoration?: 'none' | 'underline' | 'overline' | 'line-through' | 'inherit',
    /**
     * text underline
     */
    mkTextUnderlined?: boolean,
    /**
     * text with strong style
     */
    mkTextStrong?:boolean,
    /**
     * text with italic style
     */
    mkTextItalic?:boolean,
};
export interface EProps  {

};
/**
 * Text properties
 * @commonProps
 */
export interface Props extends EProps ,SProps{

}

export const rule: OutRule<SProps, EProps,  OutTheme<Theme & ColorTheme>> = {
    ruleEnum: {

    },
    rule: {
        mkFontSize: ({value, theme : t}) => ({ fontSize: t.font.size[value] }),
        mkFontWeight: ({value, theme : t})  => ({ fontWeight: t.font.weight[value] }),
        mkFontFamily: ({value, theme : t})  => ({ fontFamily: t.font.family[value] }),
        mkTextNoWrap: ({value})  => value ? ({
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }) : {},

        mkTextAlign: ({value}) => ({
            textAlign: value,
        }),
        mkTextTransform: ({value}) => ({
            textTransform: value,
        }),
        mkTextDirection: ({value}) => ({
            direction: value,
        }),
        mkTextDecoration: ({value}) => ({
            textDecoration: value,
        }),
        mkTextUnderlined: ({value, theme : t}) => value ? ({
            borderBottomStyle: 'dotted',
            borderBottomWidth: 1,
            borderBottomColor: selector.getColorBg()('medium')(t),
        }) : {},
        mkTextStrong:({value,theme}) => value?({
            fontWeight:theme.font.weight.bold
        }):({}),
        mkTextItalic:({value}) => value?({
            fontStyle: 'italic',
        }):({}),
    },
};

export default rule;
