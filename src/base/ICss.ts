import * as ord from 'mocoolka-fp/lib/Ord';
import * as oid from 'mocoolka-fp/lib/Setoid';
import * as sg from 'mocoolka-fp/lib/Semigroup';
import {
    sort as arraySort,
} from 'mocoolka-fp/lib/Array';
import {
    Monoid
} from 'mocoolka-fp/lib/Monoid';
import { withDefaults as _withDefaults } from 'mocoolka-fp/lib/object';
import { identity } from 'mocoolka-fp/lib/function';
import { IProperty, ICss, ICssMerge, TSelector, TProp } from './type';
export const getIPropertySetoid = <P>() => oid.getRecordSetoid<IProperty<P>>({
    cssName: oid.setoidString,
    description: oid.setoidBasicType,
    propertyName: oid.setoidString,
    unitName: oid.setoidBasicType,
});

export const getIPropertyOrd = <P>() => ord.contramap((x: IProperty<P>) => x.propertyName, ord.ordString);

export const getICssSetoid = <S extends TSelector, P>() => oid.getRecordSetoid<ICss<S, P>>({
    cssProperty: oid.getArraySetoid<IProperty<P>>(getIPropertySetoid<P>()),
    cssSelector: oid.getArraySetoid<string>(oid.setoidString),
});
export const getICssSemigroup = <S extends TSelector, P>() => sg.getRecordSemigroup<ICss<S, P>>({
    cssProperty: sg.getArraySemigroup<IProperty<P>>(),
    cssSelector: sg.getArraySemigroup<S>(),
});
export const p = <S extends TSelector, P extends TProp>(fa: ICss<S, P>): ICss<S, P>['cssProperty'] => fa.cssProperty;
export const s = <S extends TSelector, P extends TProp>(fa: ICss<S, P>): ICss<S, P>['cssSelector'] => fa.cssSelector;

export const compose = <S1 extends TSelector, P1, S2 extends TSelector, P2>
    (a: ICss<S1, P1>, b: ICss< S2, P2>): ICssMerge<S1, P1, S2, P2> =>
    getICssSemigroup<S1 | S2, P1 & P2>().concat(a, b);

export const map = <S extends TSelector, P, S1 extends TSelector, P1>
    (fa: ICss<S, P>, f: (a: ICss<S, P>) => ICss<S1, P1>): ICss<S1, P1> => f(fa);

export const bimap = <S extends TSelector, P, S1 extends TSelector= S, P1= P>(
    fla: ICss<S, P>,
    f: (l: (S)[]) => (S1)[],
    g: (a: IProperty<P>[]) => IProperty<P1>[]): ICss<S1, P1> => (
        { cssSelector: f(fla.cssSelector), cssProperty: g(fla.cssProperty) }
    );
export const extract = p;
export const extend = <S extends TSelector, A, B>(
    fa: ICss<S, A>, f: ((a: IProperty<A>[]) => IProperty<B>[])): ICss<S, B> =>
    bimap(fa, identity, f);

export const reduce = <S extends TSelector, P, B>(fa: ICss<S, P>, b: B, f: (b: B, a: ICss<S, P>) => B): B => f(b, fa);

export const sort = <S extends TSelector, P>(a: ICss<S, P>): ICss<S, P> =>
    bimap<S, P>(a, arraySort<S>(ord.ordString), arraySort<IProperty<P>>(getIPropertyOrd<P>()));

/** @function */
export const getMonoid = <S extends TSelector, P>(): Monoid<ICss<S, P>> => (
    {
        ...getICssSemigroup<S, P>(),
        empty: { cssProperty: [], cssSelector: [] },
    });
export const emptyInputCss = <A extends TSelector, B= {}>(): ICss<A, B> => ({
    cssProperty: [],
    cssSelector: [],
});

export const of = <S extends TSelector, P= {}>(a?: Partial<ICss<S, P>>): ICss<S, P> =>
    _withDefaults(emptyInputCss<S, P>())(a);
/* export const icss = {
    p,
    s,
    compose,
    map,
    bimap,
    extract,
    extend,
    reduce,
    sort,
    of,
}; */
