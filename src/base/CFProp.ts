
/**
 * Custome function property define a new property with css property.
 * It used function
 * @namespace CFProp
 */
import {TSelector, TProp, TAbbr, InputPropFunctionBase, CFProps, CFPropsMerge} from './type';
import { merge } from 'mocoolka-fp/lib/object';
export const compose = <Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
    TAbbr, AdditionProp, CFProp extends InputPropFunctionBase,
    Selector1 extends TSelector, Prop1 extends TProp, VProp1, Abbr1 extends
    TAbbr, AdditionProp1, CFProp1 extends InputPropFunctionBase>
    (
    a: CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>,
    b: CFProps<Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1>):
    CFPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CFProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1> => merge({}, a, b) as
    CFPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CFProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1>;
export const of =
    <Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
        TAbbr, AdditionProp, CFProp extends InputPropFunctionBase>
        (a?: CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>):
        CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp> =>
        a ? a : {} as CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>;
