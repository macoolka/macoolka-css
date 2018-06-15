import {
    MCss, MCssMerge, TSelector, TProp, TNodeValue, TVariable, TAbbr, TInputProp,
    TRProp, InputPropBase, InputPropFunctionBase
} from './type';
import { Validation } from 'mocoolka-fp/lib/Validation';
import * as abbr from './AbbrProp';
import * as variable from './VProp';
import * as css from './ICss';
import * as prop from './CProp';
import * as fprop from './CFProp';
export * from './type';
import { validCProps } from './validation';
import { success, failure } from 'mocoolka-fp/lib/Validation';
export { success, failure, Validation };
import { getPluginKeyValueFromCProps } from './get';
export const compose = <
    Selector extends TSelector,
    Prop extends TProp,
    NodeValue extends TNodeValue,
    Variable extends TVariable,
    Abbr extends TAbbr,
    VProp,
    CProp extends InputPropBase,
    CFProp extends InputPropFunctionBase,
    AdditionProp,
    Selector1 extends TSelector,
    Prop1 extends TProp,
    NodeValue1 extends TNodeValue,
    Variable1 extends TVariable,
    Abbr1 extends TAbbr,
    VProp1,
    CProp1 extends InputPropBase,
    CFProp1 extends InputPropFunctionBase,
    AdditionProp1
    >(
        a: MCss<Selector, Prop, NodeValue, Variable, Abbr, VProp, CProp, CFProp, AdditionProp>,
        b: MCss<Selector1, Prop1, NodeValue1, Variable1, Abbr1, VProp1, CProp1, CFProp1, AdditionProp1>):
    MCssMerge<Selector, Prop, NodeValue, Variable, Abbr, VProp, CProp, CFProp, AdditionProp,
    Selector1, Prop1, NodeValue1, Variable1, Abbr1, VProp1, CProp1, CFProp1, AdditionProp1
    > => ({
        css: css.compose(a.css, b.css),
        variable: variable.compose(a.variable, b.variable),
        props: prop.compose<
            Selector, Prop, VProp, Abbr, AdditionProp, CProp,
            Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1>(a.props, b.props),
        propFunctions: fprop.compose<
            Selector, Prop, VProp, Abbr, AdditionProp, CFProp,
            Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1
            >(a.propFunctions, b.propFunctions),
        abbrs: abbr.compose(a.abbrs, b.abbrs),
    });

export const of = <
    Selector extends TSelector,
    Prop extends TProp,
    NodeValue extends TNodeValue,
    Variable extends TVariable,
    Abbr extends TAbbr,
    VProp,
    CProp extends InputPropBase,
    CFProp extends InputPropFunctionBase,
    AdditionProp>(
        m: Partial<MCss<
            Selector, Prop, NodeValue, Variable, Abbr, VProp, CProp, CFProp, AdditionProp
            >>):
    MCss<Selector, Prop, NodeValue, Variable, Abbr, VProp, CProp, CFProp, AdditionProp> => {
    const result: MCss<Selector, Prop, NodeValue, Variable, Abbr, VProp, CProp, CFProp, AdditionProp> = {
        css: css.of<Selector, Prop>(m.css),
        props: prop.of<Selector, Prop, VProp, Abbr, AdditionProp, CProp>(m.props),
        propFunctions: fprop.of<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>(m.propFunctions),
        abbrs: abbr.of<Prop, Abbr>(m.abbrs),
        variable: variable.of<NodeValue, Variable>(m.variable),
    };
    const pluginKeyValue = getPluginKeyValueFromCProps<
        TInputProp<TRProp<Selector, Prop, VProp, Abbr, AdditionProp>, CProp>>()
        .get(result.props);
    const validR = validCProps(pluginKeyValue)(result.props);
    if (validR.isFailure()) {
        throw new Error(validR.value);
    }
    return result;
};
