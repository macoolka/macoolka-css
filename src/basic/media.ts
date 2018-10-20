
/**
 * convert media props type to props
 * @rule
 */
import { CssProperties, Rule, CssNode } from '../css';

import {media} from './helper';
export type Theme= {
    breakpointUnit: number,
breakpoints: {
    sm: number
    md: number
    lg: number
    xl: number
},
};
export const theme: Theme = {
    breakpointUnit: 16,
    breakpoints: {
        sm: 800,
        md: 1280,
        lg: 1480,
        xl: 1920,
    },
};
const getBreakpoints = (t: Theme): number[] =>
[theme.breakpoints.sm, theme.breakpoints.md, theme.breakpoints.lg, theme.breakpoints.xl]
.map(a => (Math.round(a / t.breakpointUnit)));
/**
 * convert number type to px or precent
 * @getter
 */

export interface Props<P extends CssProperties>  {
    mkMedia?: CssNode<P>[];
}

export const rule = <P extends CssProperties, T extends Theme>(): Rule<Props<P>, {}, P, T> => ({
    rule: {
        mkMedia: ({value, theme : t}) => {
           const result = media<P>(value)(getBreakpoints(t));
           return result;
        },
    },
});
