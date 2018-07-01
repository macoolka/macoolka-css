import { Is } from 'mocoolka-fp/lib/predicate';
import { ObjectOverwrite } from 'mocoolka-fp/lib/TypeLevel';
export type TMixed = any;
export type TSelector = string;
export type TProp = { [k: string]: any };
export type TVariable = { [k: string]: any };
export type TAbbr = any;
export type InputPropFunctionBase = { [k: string]: (number | boolean | string | undefined | { [name: string]: any }) };
export type TInputPropF<P,
    C extends InputPropFunctionBase> = {
        [name in keyof C]: ((a: C[name]) => P) | ((a: C[name]) => (b: any) => P)
    };
export type InputPropBase = { [k: string]: string | number };
export type TInputProp<P,
    C extends InputPropBase> = {
        [name in keyof C]: ({ [key in C[name]]: ((b: any) => P) | P })
    };
export type TInputPropMixed<P,
    C extends InputPropBase> = {
        [name in keyof C]?: ({ [key in C[name]]?: ((b: any) => P) | P })
    };
export type DefaultValue = number | string;
export type TNodeValue = {
    kind: string,
    [k: string]: any
};
export declare type IProperty<P extends TProp> = {
    cssName: string;
    description?: string;
    propertyName: Extract<keyof P, string>;
    unitName?: string;
};
export declare type ICss<S extends TSelector= never, P extends TProp = {}> = {
    cssProperty: IProperty<P>[];
    cssSelector: (S)[];
};
export type ICssMerge<S1 extends TSelector, P1 extends TProp, S2 extends TSelector, P2 extends TProp> =
    ICss<S1 | S2, P1 & P2>;
/**
 * Print Css mean convert to orgin css
 */
export declare type PCssProperty<P extends TProp> = {
    kind: 'value';
    css: IProperty<P>;
    value: string | number;
};
export declare type PCssSelector<P extends TProp> = {
    kind: 'selector';
    name: string;
    type: 'stand' | 'common';
    items: Array<PCssProperty<P> | PCssSelector<P>>;
};
export type PCss<P extends TProp> = PCssProperty<P> | PCssSelector<P>;

export type RCssSelector<S extends TSelector, P extends TProp> = {
    [name in S]?: P & RCssSelector<S, P>;
};
export type RCss<S extends TSelector, P extends TProp> = P & RCssSelector<S, P> & CommonSelector<P>;
export type CssMap<S extends TSelector, P extends TProp> = {
    isPKey: Is<keyof P>;
    isS: Is<S>;
    getCssProperty: (a: keyof P) => IProperty<P>;
};

export declare type AbbrProp<A extends string, P extends TProp,
    K extends keyof P> = { [key in A]?: P[K] };

export declare type AbbrProps<Prop, AProp> = {
    [key in keyof AProp]: (keyof Prop)[];
};

export type AbbrPropsMerge<P1, A1, P2, A2> = AbbrProps<ObjectOverwrite<P1, P2>, ObjectOverwrite<A1, A2>>;

export type PluginKey<P, K> = {
    isAKey: Is<K>;
    getKey: (a: K, value: any) => P;
};
export type PluginValue<S, P, V> = {
    isValue: Is<V>;
    getValue: (value: V) => string | number;
};
export type PluginKeyValue = {
    parseProps: (v: { [k: string]: any }) => { [k: string]: any };
    isKeyValue: (k: any, v: any) => boolean;
};
export type VProps<NodeValue extends TNodeValue, Variable extends TVariable> = {
    variable: Variable,
    isNodeValue: Is<NodeValue>,
    getVariableValue: (a: NodeValue) => (variable: Variable) => DefaultValue;
};
export declare type PVariable<Value, Prop, K extends keyof Prop> = { [key in K]?: Prop[K] | Value };

export type VPropsMerge<
    NodeValue1 extends TNodeValue, Variable1 extends TVariable,
    NodeValue2 extends TNodeValue, Variable2 extends TVariable> =
    VProps<NodeValue1 | NodeValue2, Variable1 & Variable2>;
export type CProps<Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
    TAbbr, AdditionProp, CProp extends InputPropBase> =
    TInputProp<TRProp<Selector, Prop, VProp, Abbr, AdditionProp>, CProp>;
export type CMixedProps<Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
    TAbbr, AdditionProp, CProp extends InputPropBase> =
    TInputPropMixed<TRProp<Selector, Prop, VProp, Abbr, AdditionProp>, CProp>;
export type CPropsMerge<Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
    TAbbr, AdditionProp, CProp extends InputPropBase,
    Selector1 extends TSelector, Prop1 extends TProp, VProp1, Abbr1 extends
    TAbbr, AdditionProp1, CProp1 extends InputPropBase> =
    TInputProp<TRProp<Selector | Selector1, Prop & Prop1, VProp & VProp1, Abbr & Abbr1, AdditionProp & AdditionProp1>,
    CProp & CProp1>;

export type CFProps<Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
    TAbbr, AdditionProp, CFProp extends InputPropFunctionBase> =
    TInputPropF<TRProp<Selector, Prop, VProp, Abbr, AdditionProp>, CFProp>;
export type CFPropsMerge<Selector extends TSelector, Prop extends TProp, VProp, Abbr extends
    TAbbr, AdditionProp, CFProp extends InputPropFunctionBase,
    Selector1 extends TSelector, Prop1 extends TProp, VProp1, Abbr1 extends
    TAbbr, AdditionProp1, CFProp1 extends InputPropFunctionBase> =
    TInputPropF<TRProp<Selector | Selector1, Prop & Prop1, VProp & VProp1, Abbr & Abbr1,
    AdditionProp & AdditionProp1>,
    CFProp & CFProp1>;
export type MCss<
    Selector extends TSelector,
    Prop extends TProp,
    NodeValue extends TNodeValue,
    Variable extends TVariable,
    Abbr extends TAbbr,
    VProp,
    CProp extends InputPropBase,
    CFProp extends InputPropFunctionBase,
    AdditionProp,
    > = {
        css: ICss<Selector, Prop>;
        variable: VProps<NodeValue, Variable>;
        props: CProps<Selector, Prop, VProp, Abbr, AdditionProp, CProp>;
        propFunctions: CFProps<Selector, Prop, VProp, Abbr, AdditionProp, CFProp>;
        abbrs: AbbrProps<Prop, Abbr>;
    };
export type MCssMerge<
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
    > = {
        css: ICssMerge<Selector, Prop, Selector1, Prop1>;
        variable: VPropsMerge<NodeValue, Variable, NodeValue1, Variable1>;
        props: CPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CProp,
        Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CProp1>,
        /*         props: CPropsMerge<TInputProp<TRProp<Selector, Prop, VProp, Abbr, AdditionProp>, CProp>,
                TInputProp<TRProp<Selector1, Prop1, VProp1, Abbr1, AdditionProp1>, CProp1>>; */
        propFunctions: CFPropsMerge<Selector, Prop, VProp, Abbr, AdditionProp, CFProp,
        Selector1, Prop1, VProp1, Abbr1, AdditionProp1, CFProp1>;
        abbrs: AbbrPropsMerge<Prop, Abbr, Prop1, Abbr1>;
    };
export type TCProp = { [k: string]: any };
export type TVProp = { [k: string]: any };
export type TAProp = { [k: string]: any };
export type MCssT<
    Selector extends TSelector,
    Prop extends TProp,
    VProp extends TVProp,
    AProp extends TAProp,
    CProp extends TCProp,
    > =
    Css<Selector, Prop> & CssP<Selector, Prop, VProp, AProp, CProp>;
export type TRProp<
    Selector extends TSelector,
    Prop extends TProp,
    VProp extends TVProp,
    AProp extends TAProp,
    CProp extends TCProp,
    > = RCss<Selector, { mkstyle?: ObjectOverwrite<Prop, VProp & AProp> } & Partial<CProp>>;
export type TRuntimeProp<
    Selector extends TSelector,
    Prop extends TProp,
    VProp extends TVProp,
    AProp extends TAProp,
    CProp extends TCProp,
    > = RCss<Selector, ObjectOverwrite<Prop, VProp & AProp> & Partial<CProp>>;
export type Css<S extends TSelector, P> = {
    toCss: (r: RCss<S, P>) => string;
};
export type CssRP<S extends TSelector, P, PInput> = {
    toCss: (r: RCss<S, PInput>) => string;
};
export type CssP<
    Selector extends TSelector,
    Prop extends TProp,
    VProp extends TVProp,
    AProp extends TAProp,
    CProp extends TCProp> = {
        toRCss: (r: TRProp<Selector, Prop, VProp, AProp, CProp>) => RCss<Selector, Prop>;
        toTCss: (r: TRProp<Selector, Prop, VProp, AProp, CProp>) => string;
    };
export type CommonSelector<P> = {
    selector?: {
        name: string,
        value: P & CommonSelector<P>
    }[],

};
export type CssModule<
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
        mixed: (mixedObject: {
            variable?: Mixed, props?:
            CMixedProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CProp>
        }) => CssModule<VProp, AProp, CProp,
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
            ) => CssModule<VProp & VProp1, AProp & AProp1, CProp & CProp1,
            CFProp & CFProp1, AdditionProp & AdditionProp1,
            Mixed & Mixed1, Selector | Selector1, Prop & Prop1, NodeValue | NodeValue1, Variable & Variable1>,
        addProps: <CProp1 extends InputPropBase, CFProp1 extends InputPropFunctionBase= {}>(
            props:
                CProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CProp1>,
            propFunctions?:
                CFProps<Selector, Prop, VProp, AProp, ObjectOverwrite<AdditionProp, CProp & CFProp>, CFProp1>
        ) =>
            CssModule<VProp, AProp, CProp & CProp1, CFProp & CFProp1, AdditionProp,
            Mixed, Selector, Prop, NodeValue, Variable>,
        value: MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp>,
        toRCss: (r: TRProp<Selector, Prop, VProp, AProp, CProp & CFProp & AdditionProp>)
            => RCss<Selector, Prop>,
        toTCss: (r: TRProp<Selector, Prop, VProp, AProp, CProp & CFProp & AdditionProp>) => string,
        toCss: (r: RCss<Selector, Prop>) => string,
    };
