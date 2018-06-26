
/**
 * Abbr redefine css property name.
 *
 * @namespace abbr
 */
import { merge } from 'mocoolka-fp/lib/object';
import { AbbrProps, AbbrPropsMerge } from './type';
export const compose = <P1, A1, P2, A2>
    (a: AbbrProps<P1, A1>, b: AbbrProps<P2, A2>):
    AbbrPropsMerge<P1, A1, P2, A2> =>
    merge({}, a, b) as AbbrPropsMerge<P1, A1, P2, A2>;
export const emptyInputCss = <P, A>(): AbbrProps<P, A> => ({} as AbbrProps<P, A>);
export const of = <P, A>(a?: AbbrProps<P, A>): AbbrProps<P, A> => a ? a : emptyInputCss<P, A>();
