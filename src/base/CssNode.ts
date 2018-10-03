import { omit, pick } from 'mocoolka-fp/lib/object';
import { isEmpty as _isEmpty } from 'mocoolka-fp/lib/predicate';
import { Option, getMonoid as _getOptionMonoid, isNone } from 'mocoolka-fp/lib/Option';
// import { Functor1 } from 'mocoolka-fp/lib/Functor';
import { fold as _fold, Monoid } from 'mocoolka-fp/lib/Monoid';
import { fold as selectorFold, CssSelector, map as selectorMap,
     isEmpty as isSelectorEmpty, selector } from './CssSelector';
import { fold as propertiesFold, CssProperties } from './CssProperties';
import { Lens, Optional } from 'mocoolka-fp/lib/Monocle';
import { catOptions } from 'mocoolka-fp/lib/Array';

/**
 * The provide node's type
 * @type
 */
/* declare module 'fp-ts/lib/HKT' {
    interface URI2HKT<A> {
        TCssNode: CssNode<A>;
    }
} */
export type CssNode<T extends CssProperties> = T & { selector?: CssSelector<T> };
export const URI = 'TCssNode';

export type URI = typeof URI;

export const PropsLens = <A extends CssProperties>() => new Lens<CssNode<A>, A>(
    s => omit(s, 'selector'), a => s => Object.assign({}, pick(s, 'selector'), a));
export const SelectorOptional = <A extends CssProperties>() =>
 Optional.fromNullableProp<CssNode<A>, CssSelector<A>, 'selector'>('selector');
export const getProps = <A extends CssProperties>(a: CssNode<A>) => PropsLens<A>().get(a);
export const setProps = <A extends CssProperties>(v: A) => (a: CssNode<A>) => PropsLens<A>().set(v)(a);
export const getSelector = <A extends CssProperties>(a: CssNode<A>) => SelectorOptional<A>().getOption(a);
export const setSelector = <A extends CssProperties>(v: CssSelector<A>) =>
 (a: CssNode<A>) => SelectorOptional<A>().set(v)(a);

export const empty = <A extends CssProperties>() => ({} as CssNode<A>);
export const map = <A extends CssProperties, B extends CssProperties>
(node: CssNode<A>, func: (p: A) => CssNode<B>): CssNode<B> => {
    const result = empty<B>();
    const propA = PropsLens<A>().get(node);
    const nodeB = func(propA);
    const selectorB1: Option<CssSelector<B>> = getSelector(nodeB);
    const selectorA: Option<CssSelector<A>> = getSelector(node);

    const selectorB2 = selectorA.map(a => selectorMap(a, func));
    const selectorB = _getOptionMonoid(selector<B>()).concat(selectorB1, selectorB2);
    const propResult: CssNode<B> = setProps(nodeB)(result);
    return selectorB.map(a => setSelector(a)(propResult)).getOrElse(propResult);

};
/* export const map = <A extends CssProperties, B extends CssProperties>
(node: CssNode<A>, func: (p: A) => B): CssNode<B> => {
    const result = empty<B>();
    const propA = PropsLens<A>().get(node);
    const propB = func(propA);
    const selectorA: Option<CssSelector<A>> = getSelector(node);

    const selectorB =selectorA.map(a=>selectorMap(a,func));
    const propResult: CssNode<B> = setProps(propB)(result);
    return selectorB.map(a=>setSelector(a)(propResult)).getOrElse(propResult);

}; */
export const concat = <A extends CssProperties>(a: CssNode<A>, b: CssNode<A>): CssNode<A> => {
    const result = empty<A>();
    const propA = getProps(a);
    const selectorA: Option<CssSelector<A>> = getSelector(a);
    const propB = getProps(b);
    const selectorB: Option<CssSelector<A>> = getSelector(b);
    const foldProp = propertiesFold<A>()([propA, propB]);
    const selectorArray = catOptions([selectorA, selectorB]);
    const foldBSelector = selectorFold<A>()(selectorArray);
    const propResult = setProps(foldProp)(result);
    return isSelectorEmpty(foldBSelector) ? propResult : setSelector(foldBSelector)(propResult);
};
const isEmpty = <A extends CssProperties>(a: CssNode<A>): boolean => isEmpty(getProps(a)) && (isNone(getSelector(a)));
/**
 * @function
 * @since 1.0.0
 */
export const getMonoid = <A extends CssProperties>(): Monoid<CssNode<A>> => {
    return {
        concat: concat,
        empty: {} as CssNode<A>,
    };
};
export const fromArray = [];
export const fold = <A extends CssProperties>() => _fold(getMonoid<A>());
/* export const cssNode: Functor1<URI> = ({
    URI,
    map,
}); */
