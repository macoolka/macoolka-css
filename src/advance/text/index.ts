
/**
 * Text
 * @prop
 */
import { Rule as ParentRule,ruleModule as parentRuleModule } from '../../common';

import { ExtendRule, extendRuleModule , GetRuleProp} from '../../CssRule'
type ParentProps = GetRuleProp<ParentRule>
export interface Theme {
    typography: {
        h1: ParentProps,
        h2: ParentProps,
        h3: ParentProps,
        h4: ParentProps,
        h5: ParentProps,
        h6: ParentProps,
        subtitle1: ParentProps,
        subtitle2: ParentProps,
        body1: ParentProps,
        body2: ParentProps,
        button: ParentProps,
        caption: ParentProps,
        overline: ParentProps,
    },

}

export const theme: Theme = {

    typography: {
        h1: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'light',
            letterSpacing: '-.01562em',
            lineHeight: '6rem',
            mkFontSize: 'h1',
            textDecoration: 'inherit',
            textTransform: 'inherit',

        },
        h2: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'light',
            mkFontSize: 'h2',
            letterSpacing: '-.00833em',
            lineHeight: '3.75rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',

        },
        h3: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'regular',
            mkFontSize: 'h3',
            letterSpacing: '0em',
            lineHeight: '3.125rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',
        },
        h4: {

            mkFontFamily: 'sansSerif',
            mkFontWeight: 'regular',
            mkFontSize: 'h4',
            letterSpacing: '.00735em',
            lineHeight: '2.5rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',
        },
        h5: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'regular',
            mkFontSize: 'h5',
            letterSpacing: '0em',
            lineHeight: '2rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',
        },
        h6: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'medium',
            mkFontSize: 'h6',
            letterSpacing: '.0125em',
            lineHeight: '2rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',
        },
        subtitle1: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'regular',
            mkFontSize: 'subtitle',
            letterSpacing: '.00937em',
            lineHeight: '1.75rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',
        },
        subtitle2: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'medium',
            mkFontSize: 'p',
            letterSpacing: '.00714em',
            lineHeight: '1.375rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',

        },
        body1: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'medium',
            mkFontSize: 'subtitle',
            letterSpacing: '.03125em',
            lineHeight: '1.5rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',

        },
        body2: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'regular',
            mkFontSize: 'p',
            letterSpacing: '.01786em',
            lineHeight: '1.5em',
            textDecoration: 'inherit',
            textTransform: 'inherit',
            wordWrap: 'break-word',
        },
        button: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'medium',
            mkFontSize: 'p',
            letterSpacing: '.02857',
            lineHeight: 1.5,
            textDecoration: 'none',
            textTransform: 'uppercase',
        },
        caption: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'regular',
            mkFontSize: 'caption',
            letterSpacing: '.03333em',
            lineHeight: '1.25rem',
            textDecoration: 'inherit',
            textTransform: 'inherit',
            textAlign: 'left'
        },
        overline: {
            mkFontFamily: 'sansSerif',
            mkFontWeight: 'medium',
            mkFontSize: 'overline',
            letterSpacing: '.16667em',
            lineHeight: '2rem',
            textDecoration: 'inherit',
            textTransform: 'uppercase',
            textAlign: 'left'

        },
    },
};
export interface SProps {
    /**
  * typography
  */
    mkTypography?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
};
export interface EProps {


};
export interface Props extends EProps, SProps {

}
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>
export const rule: Rule = {
    rule: {
        mkTypography: ({ value, theme }) => theme.typography[value]
    },
}

export const ruleModule = extendRuleModule(parentRuleModule)<Rule>({
    rule,
    theme,
})



