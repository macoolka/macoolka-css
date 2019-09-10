import { CssNode, CssProperties } from '../../CssRule';
import * as A  from 'fp-ts/lib/Array';
import { ordNumber, min } from 'fp-ts/lib/Ord';
import { getFold } from 'macoolka-object'
//import Record from 'mocoolka-fp/lib/Record';
/**
 * concat array with mix length
 * @ param v
 * @param s
 */
export const concatMinArray = <A, B>(v: Array<A>, s: Array<B>) => {

    const length = min(ordNumber)(v.length, s.length) //A.min([v.length, s.length]);
    const result: Array<[A, B]> = [];
    for (let i = 0; i < length; i++) {
        result.push([v[i], s[i]]);
    }
    return result;
};
export const getBreakpoints = (breakpoints: number[]) =>
    breakpoints.map(a => (`@media screen and (max-width: ${a}em)`));

export const media = <T extends CssProperties>(value: CssNode<T>[]) => (breakpoints: number[]): CssNode<T> => {
    const mediaProps = A.reverse(concatMinArray(getBreakpoints(breakpoints), value));
    // const first: T = head(mediaProps).map(v => v[1]).getOrElse({} as T);
    const last = mediaProps.map(([name, v]) =>
        ({ [name]: v }));
    return ({ selector: getFold()(last) }) as CssNode<T>;
};
