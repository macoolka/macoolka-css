import { Monoid, fold as _fold } from 'mocoolka-fp/lib/Monoid';
import { Ord } from 'mocoolka-fp/lib/Ord';
import { mapValues } from 'mocoolka-fp/lib/object';
import { Record } from 'mocoolka-fp/lib/Record';
import { isEmpty as _isEmpty } from 'mocoolka-fp/lib/predicate';
import { CssProperties } from './CssProperties';
/**
 * The provide css selector's type
 * @type
 */
/* declare module 'fp-ts/lib/HKT' {
    interface URI2HKT<A> {
        CssSelector: CssSelector<A>;
    }
} */
// export const URI = 'CssSelector';
// export type URI = typeof URI;
export type CssSelector<T extends CssProperties> = { [key: string]: T };
export const map = <A extends CssProperties, B extends CssProperties>
(a: CssSelector<A>, func: (p: A) => B): CssSelector<B> => mapValues(a, func);
export const selector = <A extends CssProperties>(): Monoid<CssSelector<A>> & Ord<CssSelector<A>>  => ({
    ...Record<CssSelector<A>>(),
});
export const fold = <T extends CssProperties>() => _fold(selector<T>());
export const isEmpty = <T extends CssProperties>(a: CssSelector<T>) => _isEmpty(a);
