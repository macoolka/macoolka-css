
import * as t from './type';
import { merge } from 'mocoolka-fp/lib/object';
export const compose = <Selector extends t.TSelector, Prop extends t.TProp, VProp, Abbr extends
    t.TAbbr, AdditionProp, CFProp extends t.InputPropFunctionBase,
    Selector1 extends t.TSelector, Prop1 extends t.TProp, VProp1, Abbr1 extends
    t.TAbbr, AdditionProp1, CFProp1 extends t.InputPropFunctionBase>
    (
    a: t.CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>,
    b: t.CFProps<Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1>):
    t.CFPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CFProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1> => merge({}, a, b) as
    t.CFPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CFProp,
    Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1>;
export const of =
    <Selector extends t.TSelector, Prop extends t.TProp, VProp, Abbr extends
        t.TAbbr, AdditionProp, CFProp extends t.InputPropFunctionBase>
        (a?: t.CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>):
        t.CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp> =>
        a ? a : {} as t.CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>;
