
import * as t from './type';
import { merge } from 'mocoolka-fp/lib/object';
export const compose = <Selector extends t.TSelector, Prop extends t.TProp, VProp, Abbr extends
    t.TAbbr, AdditionProp, CProp extends t.InputPropBase,
    Selector1 extends t.TSelector, Prop1 extends t.TProp, VProp1, Abbr1 extends
    t.TAbbr, AdditionProp1, CProp1 extends t.InputPropBase>
    (
    a: t.CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp>,
    b: t.CProps<Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1>):
    t.CPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1> => merge({}, a, b) as
    t.CPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1>;
export const of =
    <Selector extends t.TSelector, Prop extends t.TProp, VProp, Abbr extends
        t.TAbbr, AdditionProp, CProp extends t.InputPropBase>
        (a?: t.CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp>):
        t.CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp> =>
        a ? a : {} as t.CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp>;
/* export const compose = <K extends string, V extends string, VProp, OtherT, S extends string, P,
    K1 extends string, V1 extends string, VProp1, OtherT1, S1 extends string, P1>
    (a: CProps<K, V, VProp, OtherT, S, P>, b: CProps<K1, V1, VProp1, OtherT1, S1, P1>):
    CPropsMerge<K, V, VProp, OtherT, S, P, K1, V1, VProp1, OtherT1, S1, P1> =>
    sg.getObjectSemigroup<CPropsMerge<K, V, VProp, OtherT, S, P, K1, V1, VProp1, OtherT1, S1, P1>>()
        .concat(a as CPropsMerge<K, V, VProp, OtherT, S, P, K1, V1, VProp1, OtherT1, S1, P1>,
            b as CPropsMerge<K, V, VProp, OtherT, S, P, K1, V1, VProp1, OtherT1, S1, P1>);

export const of = <K extends string, V extends string, VProp, OtherT, S extends string, P>
    (a?: CProps<K, V, VProp, OtherT, S, P>): CProps<K, V, VProp, OtherT, S, P> =>
    a ? a : {} as CProps<K, V, VProp, OtherT, S, P>; */
