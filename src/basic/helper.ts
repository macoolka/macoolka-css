import { CssNode, CssProperties} from '../css';
import { head, tail, concatMinArray } from 'mocoolka-fp/lib/Array';
import Record from 'mocoolka-fp/lib/Record';

export const getBreakpoints = (breakpoints: number[]) =>
    breakpoints.map(a => (`@media screen and (max-width: ${a}em)`));

export const media = <T extends CssProperties>(value: CssNode<T>[]) => (breakpoints: number[]): CssNode<T> => {
    const mediaProps = concatMinArray(getBreakpoints(breakpoints), value);
    const first: T = head(mediaProps).map(v => v[1]).getOrElse({} as T);
    const last = tail(mediaProps).map(as => as.map(([name, v]) =>
     ({ [name]: v }))).getOrElse([]);
    return Object.assign({}, first, { selector: Record<{ [key: string]: T }>()(last) });
};
