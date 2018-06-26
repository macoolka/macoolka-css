
import {of as mcssOf, compose as mcssCompose} from './MCss';
import { getMCssTFromMCss } from './get';
import {
    MCss,  TSelector, TProp, TNodeValue, TVariable, CProps, CFProps,
    InputPropBase, InputPropFunctionBase
} from './type';
/* import * as  css from './ICss';
import * as prop from './CProp';
import * as variable from './VProp';
import * as abbr from './AbbrProp'; */
import { ObjectOverwrite } from 'mocoolka-fp/lib/TypeLevel';
import { success, failure, Validation } from 'mocoolka-fp/lib/Validation';
export { success, failure, Validation };
import { merge } from 'mocoolka-fp/lib/object';
export const of = <VProp= {}, AProp= {}, CProp
    extends InputPropBase
    = {}, CFProp extends InputPropFunctionBase= {}, AdditionProp= {}, Mixed = {}>() => <
        Selector extends TSelector = never,
        Prop extends TProp = {},
        NodeValue extends TNodeValue = { kind: 'never' },
        Variable extends TVariable = {}>(
            a: Partial<MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp
                >>
        ) => {
        const value: MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp>
            = mcssOf(a);
        const to = getMCssTFromMCss<VProp, AProp, CProp, CFProp, AdditionProp>()
            <Selector, Prop, NodeValue, Variable>().get(value);
        const mixed = (mixedObject: Mixed) => of<VProp, AProp, CProp, CFProp, AdditionProp, Mixed>()
            (Object.assign(a, merge({}, value, mixedObject)));
        const addProps = <CProp1 extends InputPropBase, CFProp1 extends InputPropFunctionBase= {}>(
            props:
                CProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CProp1>,
            propFunctions?:
                CFProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CFProp1>
        ) => {
            const temp = mcssOf<Selector,
                Prop,
                NodeValue,
                Variable,
                AProp,
                VProp,
                CProp1,
                CFProp1,
                AdditionProp & CProp>
                ({ props, propFunctions });
            return of<
                VProp,
                AProp,
                CProp & CProp1,
                CFProp & CFProp1,
                AdditionProp & CProp,
                Mixed>
                ()(mcssCompose(value, temp));
        };
        const compose = <VProp1= {}, AProp1= {}, CProp1
            extends InputPropBase
            = {}, CFProp1 extends InputPropFunctionBase= {}, AdditionProp1= {}, Mixed1 = {}>() => <
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
            of,
/*             ofCss: css.of,
            ofAbbr: abbr.of,
            composeAbbr: abbr.compose,
            composeProp: prop.compose,
            ofVariable: variable.of,
            composeVariable: variable.compose,
            ofProp: prop.of, */
        };
    };
