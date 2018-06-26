
import { of as mcssOf, compose as mcssCompose } from './MCss';
import { getMCssTFromMCss } from './get';
import {
    MCss, TSelector, TProp, TNodeValue, TVariable, CProps, CFProps,
    InputPropBase, InputPropFunctionBase, TRProp, RCss
} from './type';
import { of as ofICss, compose as composeICss } from './ICss';
import { of as ofCProp, compose as composeCProp } from './CProp';
import { of as ofCFProp, compose as composeCFProp } from './CFProp';
import { of as ofVariable, compose as composeVariable } from './VProp';
import { of as ofAbbr, compose as composeAbbr } from './AbbrProp';

import { ObjectOverwrite } from 'mocoolka-fp/lib/TypeLevel';
import { success, failure, Validation } from 'mocoolka-fp/lib/Validation';
export { success, failure, Validation };
import { merge } from 'mocoolka-fp/lib/object';
type Css<
    VProp= {},
    AProp= {},
    CProp extends InputPropBase = {},
    CFProp extends InputPropFunctionBase= {},
    AdditionProp= {},
    Mixed = {},
    Selector extends TSelector = never,
    Prop extends TProp = {},
    NodeValue extends TNodeValue = { kind: 'never' },
    Variable extends TVariable = {}
    > = {
        mixed: (mixedObject: Mixed) => Css<VProp, AProp, CProp,
         CFProp, AdditionProp, Mixed, Selector, Prop, NodeValue, Variable>,
        compose: <
            VProp1= {},
            AProp1= {},
            CProp1 extends InputPropBase = {},
            CFProp1 extends InputPropFunctionBase= {},
            AdditionProp1= {},
            Mixed1 = {}>() => <
                Selector1 extends TSelector,
                Prop1 extends TProp,
                NodeValue1 extends TNodeValue,
                Variable1 extends TVariable>(
                b: Partial<MCss<
                    Selector | Selector1,
                    Prop & Prop1,
                    NodeValue1,
                    Variable1,
                    AProp1,
                    VProp1,
                    CProp1,
                    CFProp1,
                    AdditionProp1
                    >>
            ) => Css<VProp & VProp1, AProp & AProp1, CProp & CProp1, CFProp & CFProp1, AdditionProp & AdditionProp1,
            Mixed & Mixed1, Selector | Selector1, Prop & Prop1, NodeValue | NodeValue1, Variable & Variable1>,
        addProps: <CProp1 extends InputPropBase, CFProp1 extends InputPropFunctionBase= {}>(
            props:
                CProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CProp1>,
            propFunctions?:
                CFProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CFProp1>
        ) =>
            Css<VProp, AProp, CProp & CProp1, CFProp & CFProp1, AdditionProp,
             Mixed, Selector, Prop, NodeValue, Variable>,
        value: MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp>,
        toRCss: (r: TRProp<Selector, Prop, VProp, AProp, CProp & CFProp & AdditionProp>)
            => RCss<Selector, Prop>,
        toTCss: (r: TRProp<Selector, Prop, VProp, AProp, CProp & CFProp & AdditionProp>) => string,
        toCss: (r: RCss<Selector, Prop>) => string,
    };
export const of = <
    VProp= {},
    AProp= {},
    CProp extends InputPropBase = {},
    CFProp extends InputPropFunctionBase= {},
    AdditionProp= {},
    Mixed = {}>() => <
        Selector extends TSelector = never,
        Prop extends TProp = {},
        NodeValue extends TNodeValue = { kind: 'never' },
        Variable extends TVariable = {}>(
            a: Partial<MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp>>
        ): Css<VProp, AProp, CProp, CFProp, AdditionProp, Mixed, Selector, Prop, NodeValue, Variable> => {
        const value: MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp>
            = mcssOf(a);
        const to = getMCssTFromMCss<VProp, AProp, CProp, CFProp, AdditionProp>()
            <Selector, Prop, NodeValue, Variable>().get(value);
        const mixed = (mixedObject: Mixed): Css<VProp, AProp, CProp,
         CFProp, AdditionProp, Mixed, Selector, Prop, NodeValue, Variable> =>
            of<VProp, AProp, CProp, CFProp, AdditionProp, Mixed>()
                (Object.assign(a, merge({}, value, mixedObject)));
        const addProps = <CProp1 extends InputPropBase, CFProp1 extends InputPropFunctionBase= {}>(
            props:
                CProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CProp1>,
            propFunctions?:
                CFProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CFProp1>
        ) => {
            /*             const temp = mcssOf<Selector,
                            Prop,
                            NodeValue,
                            Variable,
                            AProp,
                            VProp,
                            CProp1,
                            CFProp1,
                            AdditionProp & CProp>
                            ({ props, propFunctions }); */
            return compose()({ props, propFunctions }) as
                Css<VProp, AProp, CProp & CProp1, CFProp & CFProp1, AdditionProp,
                Mixed, Selector, Prop, NodeValue, Variable>;
            /*             return of<
                            VProp,
                            AProp,
                            CProp & CProp1,
                            CFProp & CFProp1,
                            AdditionProp & CProp,
                            Mixed>
                            ()(mcssCompose(value, temp)); */
        };
        const compose = <
            VProp1= {},
            AProp1= {},
            CProp1 extends InputPropBase = {},
            CFProp1 extends InputPropFunctionBase= {},
            AdditionProp1= {},
            Mixed1 = {}>() => <
                Selector1 extends TSelector,
                Prop1 extends TProp,
                NodeValue1 extends TNodeValue,
                Variable1 extends TVariable>(
                    b: Partial<MCss<
                        Selector | Selector1,
                        Prop & Prop1,
                        NodeValue1,
                        Variable1,
                        AProp1,
                        VProp1,
                        CProp1,
                        CFProp1,
                        AdditionProp1
                        >>
                ) => {
                return of<
                    ObjectOverwrite<VProp, VProp1>,
                    AProp & AProp1,
                    CProp & CProp1,
                    CFProp & CFProp1,
                    AdditionProp & AdditionProp1,
                    Mixed & Mixed1
                    >()(mcssCompose<
                        Selector,
                        Prop,
                        NodeValue,
                        Variable,
                        AProp,
                        VProp,
                        CProp,
                        CFProp,
                        AdditionProp,
                        Selector | Selector1,
                        Prop & Prop1,
                        NodeValue1,
                        Variable1,
                        AProp1,
                        VProp1,
                        CProp1,
                        CFProp1,
                        AdditionProp1
                        >(value, mcssOf(b)));
            };
        return {
            value,
            ...to,
            mixed,
            compose,
            addProps,

        };
    };
export {
    ofICss,
    composeICss,
    ofAbbr,
    composeAbbr,
    ofCProp,
    composeCProp,
    ofVariable,
    composeVariable,
    ofCFProp,
    composeCFProp,
};
