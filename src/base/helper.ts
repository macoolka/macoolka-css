import { CssNode } from '../base/CssNode';
import { head, tail, concatMinArray } from 'mocoolka-fp/lib/Array';
import { CssProperties } from './CssProperties';
import { CssSelector, fold as foldSelector } from './CssSelector';

export const getBreakpoints = (breakpoints: number[]) =>
    breakpoints.map(a => (`@media screen and (max-width: ${a}em)`));

export const media = <T extends CssProperties>(value: T[]) => (breakpoints: number[]): CssNode<T> => {
    const mediaProps = concatMinArray(getBreakpoints(breakpoints), value);
    const first: T = head(mediaProps).map(v => v[1]).getOrElse({} as T);
    const last = tail(mediaProps).map(as => as.map(([name, v]) =>
     ({ [name]: v } as CssSelector<T>))).getOrElse([]);
    return Object.assign({}, first, { selector: foldSelector<T>()(last) });
};
