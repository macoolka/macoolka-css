/**
 * Custome property define a new property with css property.
 * It used enum string or number
 * @namespace CProp
 */
import {TSelector, TProp, TAbbr, InputPropBase, CProps, CPropsMerge} from './type';
import { merge } from 'mocoolka-fp/lib/object';
export const compose = <Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
    TAbbr, AdditionProp, CProp extends InputPropBase,
    Selector1 extends TSelector, Prop1 extends TProp, VProp1, Abbr1 extends
    TAbbr, AdditionProp1, CProp1 extends InputPropBase>
    (
    a: CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp>,
    b: CProps<Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1>):
    CPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1> => merge({}, a, b) as
    CPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1>;
export const of =
    <Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
        TAbbr, AdditionProp, CProp extends InputPropBase>
        (a?: CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp>):
        CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp> =>
        a ? a : {} as CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp>;
