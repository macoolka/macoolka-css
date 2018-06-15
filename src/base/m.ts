
import * as mcss from './mcss';
import { getMCssTFromMCss } from './get';
import * as t from './type';
import * as  css from './ICss';
import * as prop from './CProp';
import * as variable from './VProp';
import * as abbr from './AbbrProp';
import { ObjectOverwrite } from 'mocoolka-fp/lib/TypeLevel';
import { success, failure, Validation } from 'mocoolka-fp/lib/Validation';
export { success, failure, Validation };
import { merge } from 'mocoolka-fp/lib/object';
const of = <VProp= {}, AProp= {}, CProp
    extends t.InputPropBase
    = {}, CFProp extends t.InputPropFunctionBase= {}, AdditionProp= {}, Mixed = {}>() => <
        Selector extends t.TSelector = never,
        Prop extends t.TProp = {},
        NodeValue extends t.TNodeValue = { kind: 'never' },
        Variable extends t.TVariable = {}>(
            a: Partial<t.MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp
                >>
        ) => {
        const value: t.MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp>
            = mcss.of(a);
        const to = getMCssTFromMCss<VProp, AProp, CProp, CFProp, AdditionProp>()
            <Selector, Prop, NodeValue, Variable>().get(value);
        const mixed = (mixedObject: Mixed) => of<VProp, AProp, CProp, CFProp, AdditionProp, Mixed>()
            (Object.assign(a, merge({}, value, mixedObject)));
        const addProps = <CProp1 extends t.InputPropBase, CFProp1 extends t.InputPropFunctionBase= {}>(
            props:
                t.CProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CProp1>,
            propFunctions?:
                t.CFProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CFProp1>
        ) => {
            const temp = mcss.of<Selector,
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
                ()(mcss.compose(value, temp));
        };
        const compose = <VProp1= {}, AProp1= {}, CProp1
            extends t.InputPropBase
            = {}, CFProp1 extends t.InputPropFunctionBase= {}, AdditionProp1= {}, Mixed1 = {}>() => <
                Selector1 extends t.TSelector,
                Prop1 extends t.TProp,
                NodeValue1 extends t.TNodeValue,
                Variable1 extends t.TVariable>(
                    b: Partial<t.MCss<
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
                    >()(mcss.compose<
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
                        >(value, mcss.of(b)));
            };
        return {
            value,
            ...to,
            mixed,
            compose,
            addProps,
            of,
            ofCss: css.of,
            ofAbbr: abbr.of,
            composeAbbr: abbr.compose,
            composeProp: prop.compose,
            ofVariable: variable.of,
            composeVariable: variable.compose,
            ofProp: prop.of,
        };
    };
export default {
    of,
    ofCss: css.of,
    ofAbbr: abbr.of,
    composeAbbr: abbr.compose,
    ofVariable: variable.of,
    composeVariable: variable.compose,
    ofProp: prop.of,
    composeProp: prop.compose,
};
