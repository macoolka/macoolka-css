
/**
 * Text
 * @prop
 */
import { Rule } from '../../base/rule';
import { Theme, Props as _Props } from '../../modules';

type SProps = {
};
type EProps = {
    /**
     * typography
     */
    mkTypography: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'

};
export type Props = EProps & SProps;

export const rule: Rule<SProps, EProps, _Props, Theme> = {
    ruleEnum: {
       mkTypography: {
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
                lineHeight: '1.25rem',
                textDecoration: 'inherit',
                textTransform: 'inherit',

            },
            button: {
                mkFontFamily: 'sansSerif',
                mkFontWeight: 'medium',
                mkFontSize: 'p',
                letterSpacing: '.08929em',
                lineHeight: '2.25rem',
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
            },
            overline: {
                mkFontFamily: 'sansSerif',
                mkFontWeight: 'medium',
                mkFontSize: 'overline',
                letterSpacing: '.16667em',
                lineHeight: '2rem',
                textDecoration: 'inherit',
                textTransform: 'uppercase',

            },
        },
    },
    rule: {

    },
};

export default rule;
