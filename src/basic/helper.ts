import { CssNode, CssProperties} from '../css';
import {  concatMinArray,reverse } from 'mocoolka-fp/lib/Array';
import Record from 'mocoolka-fp/lib/Record';

export const getBreakpoints = (breakpoints: number[]) =>
    breakpoints.map(a => (`@media screen and (max-width: ${a}em)`));

export const media = <T extends CssProperties>(value: CssNode<T>[]) => (breakpoints: number[]): CssNode<T> => {
    const mediaProps = reverse(concatMinArray(getBreakpoints(breakpoints), value));
   // const first: T = head(mediaProps).map(v => v[1]).getOrElse({} as T);
    const last =  mediaProps.map(([name, v]) =>
     ({ [name]: v }));
    return ( { selector: Record<{ [key: string]: T }>()(last) }) as CssNode<T> ;
};
