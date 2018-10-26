
import { CssProperties, Rule, CssNode } from '../css';
import {media} from './helper';
/**
 * # Media property
 *
 * ## The provide quick access @media。
 * 
 * symbol
 * ```js
 * {
 *  mkMedia: [
 * { width: '10px' },
 *  { width: '300px' },
 *  { width: '700' },
 *  { width: '800' }
 * ]
 * }
 * ```
 * to
 * 
 * ```css
 * \@media screen and (max-width: 120em) {
 *   width: 700;
 * }
 * \@media screen and (max-width: 93em) {
 *   width: 300px;
 * }
 * \@media screen and (max-width: 80em) {
 *   width: 100%;
 * }
 * \@media screen and (max-width: 50em) {
 *  width: 10px;
 * }
 * ```
 * 
 * * The values match the media width
 * * The value is css node
 * 
 * @mk
 * @memberof common
 * @name media
 * @title Media
 */

/**
 * # 媒体属性
 *
 * ## 媒体属性提供快捷的定义@media。
 * 
 * 语法
 * ```js
 * {
 *  mkMedia: [
 * { width: '10px' },
 *  { width: '300px' },
 *  { width: '700' },
 *  { width: '800' }]
 * }
 * ```
 * 生成
 * 
 * ```css
 * \@media screen and (max-width: 120em) {
 *   width: 700;
 * }
 * \@media screen and (max-width: 93em) {
 *   width: 300px;
 * }
 * \@media screen and (max-width: 80em) {
 *   width: 100%;
 * }
 * \@media screen and (max-width: 50em) {
 *  width: 10px;
 * }
 * ```
 * 
 * * 数组中的4个值分别对应4个屏幕宽度
 * * 值是 Css Node
 * @language cn
 * @title 媒体属性
 */

export interface Props<P extends {}> {
    /**
     * array value match media
     * 
     * value is css node
     */
    /**
     * 值是 [Css Node]
     * @language cn
     */
    mkMedia?: [P]
}
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


export const rule = <P extends CssProperties, T extends Theme>(): Rule<Props<P>, {}, P, T> => ({
    rule: {
        mkMedia: ({value, theme : t}) => {
           const result = media<P>(value)(getBreakpoints(t));
           return result;
        },
    },
});
