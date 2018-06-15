import * as t from './type';
import {
    pcss, pselector, getterString,
} from './PCss';
import { array } from 'mocoolka-fp/lib/Array';
import { Getter } from 'mocoolka-fp/lib/Monocle';
import { isString, isNumber, isFunction, isArray, isObject } from 'mocoolka-fp/lib/predicate';
import { Is } from 'mocoolka-fp/lib/predicate';
import { merge } from 'mocoolka-fp/lib/object';
export { getterString };
export const isPropertyValue = (v: any): v is (string | number) => isString(v) || isNumber(v);
export const getPCssFromRCss = <S extends t.TSelector, P>(map: t.CssMap<S, P>) =>
    new Getter<t.RCss<S, P>, t.PCss<P>[]>(
        a => {
            const items: t.PCss<P>[] = [];
            Object.entries(a).map(([k, v]) => {
                if (map.isS(k)) {
                    items.push(pselector<P>({
                        name: k,
                        type: 'stand',
                        items: getPCssFromRCss<S, P>(map).get(v),
                    }));
                } else if (isCommonSelector(k)) {
                    v.forEach((vValue: any) => {
                        items.push(pselector<P>({
                            name: vValue.name,
                            type: 'common',
                            items: getPCssFromRCss<S, P>(map).get(vValue.value),
                        }));
                    });

                } else if (map.isPKey(k) && isPropertyValue(v)) {
                    items.push(pcss({ css: map.getCssProperty(k), value: v }));
                }
            });
            return items;
        });
export const getOCssFromICss = <S extends t.TSelector, P>(c: t.ICss<S, P>) => (r: t.RCss<S, P>): string =>
    getPCssFromRCss(getCssMapFromICsses<S, P>().get(c)).compose(getterString<P>()).get(r);

export const getPluginKeyFromAbbrProps = <P, A>() => new Getter<t.AbbrProps<P, A>, t.PluginKey<P, keyof A>>(
    a => ({
        isAKey: (b: any): b is keyof A => !!Object.keys(a).includes(b),
        getKey: (b: keyof A, value: any): P =>
            array.reduce(a[b]!, {}, (r, name) => Object.assign({}, r, { [name]: value })) as P,
    }));
export const getPluginKeyValueFromCProps = <InputProp extends { [name: string]: any } = {}>() =>
    new Getter<InputProp, t.PluginKeyValue>(
        a => ({
            isKeyValue: (k: any, v: any): boolean => !!(a && a[k] && isFunction(a[k])) || (a && a[k] && a[k][v]),
            parseProps: (input: { [k: string]: any }): { [k: string]: any } => {
                let result: any = {};
                const inputProp = a;
                const mergeP = (a1: any, a2: any) => {
                    const { selector: selector1 } = a1;
                    const { selector: selector2 } = a2;

                    const r = merge({}, a1, a2);
                    if (selector1 && selector2) {
                        r.selector = [].concat(selector1, selector2);

                    }
                    return r;
                };
                if (isFunction(input)) {
                    const v1 = input(a.variable);
                    const r1 = getPluginKeyValueFromCProps().get(a).parseProps(v1);
                    return mergeP(result, r1);
                }
                Object.entries(input).map(([k, v]) => {
                    if (isFunction(a[k])) {
                        const v1 = a[k](v);

                        const r1 = getPluginKeyValueFromCProps().get(a).parseProps(v1);
                        result = mergeP(result, r1);
                    } else if (inputProp[k] && inputProp[k][v]) {
                        const v1 = inputProp[k][v];
                        const r1 = getPluginKeyValueFromCProps().get(a).parseProps(v1);
                        result = mergeP(result, r1);
                    } else if (isArray(v)) {
                        result[k] = v.map(getPluginKeyValueFromCProps().get(a).parseProps);
                    } else if (isObject(v) && k !== 'mkstyle') {
                        result[k] = getPluginKeyValueFromCProps().get(a).parseProps(v);

                    } else {
                        result[k] = v;
                    }

                });
                const { mkstyle, ...others } = result;
                result = merge({}, others, mkstyle);
                return result;
            },
            mergeProps: (input: { [k: string]: any }): { [k: string]: any } => {
                let result: any = {};
                const inputProp = a;

                Object.entries(input).map(([k, v]) => {
                    if (k !== 'mkstyle') {
                        if (isFunction(a[k])) {
                            const v1 = a[k](v);
                            const r1 = getPluginKeyValueFromCProps().get(a).parseProps(v1);
                            result = Object.assign({}, result, r1);
                        } else if (inputProp[k] && inputProp[k][v]) {
                            const v1 = inputProp[k][v];
                            const r1 = getPluginKeyValueFromCProps().get(a).parseProps(v1);
                            result = Object.assign({}, result, r1);
                        } else if (isArray(v)) {
                            result[k] = v.map(getPluginKeyValueFromCProps().get(a).parseProps);
                        } else if (isObject(v)) {
                            result[k] = getPluginKeyValueFromCProps().get(a).parseProps(v);

                        } else {
                            result[k] = v;
                        }
                    }
                });
                const { mkstyle, ...others } = result;
                result = merge({}, others, mkstyle);
                return result;
            },
        }));
export const getRCssFromPluginKey = <S extends t.TSelector, P>(
    map: t.CssMap<S, P>) => <A>(pa: t.PluginKey<P, keyof A>) => new Getter<t.RCss<S, P | A>, t.RCss<S, P>>(
        a => {
            let result: any = {};
            Object.entries(a).map(([k, v]) => {
                if (pa.isAKey(k)) {
                    result = Object.assign({}, result, pa.getKey(k, v));
                } else if (map.isS(k)) {
                    result = Object.assign({}, result,
                        { [k]: getRCssFromPluginKey(map)(pa).get(v) });
                } else if (isArray(v)) {
                    result[k] = v.map(vValue => getRCssFromPluginKey(map)(pa).get(vValue as any));
                } else if (isObject(v)) {
                    result[k] = getRCssFromPluginKey(map)(pa).get(v as any);
                } else {
                    result[k] = v;
                }
            });
            return result as t.RCss<S, P>;
        });
/* export const getRCssFromCProps = <S extends string, P, K extends string, V extends string, Abbr>(
    map: t.CssMap<S, P>) => <InputProp, Prop>(
        pa: t.CProps<InputProp, Prop>) => new Getter<t.RCss<S, P & Prop>,
            t.RCss<S, P & Abbr>>(
                a => {
                    let result: { [name: string]: any } = {};
                    const input = pa.inputProps as any;
                    Object.entries(a).map(([k, v]) => {
                        if (input[k] && input[k][v]) {
                            const v1 = input[k][v];
                            const r1 = getRCssFromCProps(map)(pa).get(v1);
                            result = Object.assign({}, result, r1);
                        } else if (isObject(v)) {
                            result = Object.assign({}, result,
                                { [k]: getRCssFromCProps(map)(pa).get(v as any) });
                        } else {
                            result[k] = v;
                        }
                    });
                    return result as t.RCss<S, P & Abbr>;
                }); */
export const getRCssFromVProps = <PV>() => <S extends t.TSelector, P>(
    map: t.CssMap<S, P>) => <A extends t.TNodeValue, B>(pa: t.VProps<A, B>) =>
        new Getter<t.RCss<S, P | PV>, t.RCss<S, P>>(
            a => {
                let result: any = {};
                Object.entries(a).map(([k, v]) => {
                    if (map.isPKey(k)) {
                        if (pa.isNodeValue(v)) {
                            result[k] = pa.getVariableValue(v)(pa.variable) as any;
                        } else {
                            result[k] = v;
                        }

                    } else if (map.isS(k)) {
                        result = Object.assign({}, result,
                            { [k]: getRCssFromVProps<PV>()(map)(pa).get(v) });
                    } else if (isCommonSelector(k) && isArray(v)) {
                        result = Object.assign({}, result,
                            {
                                [k]: v.map((vValue: any) => ({
                                    name: vValue.name,
                                    value: getRCssFromVProps<PV>()(map)(pa).get(vValue.value),
                                })),

                            });
                    }
                });
                return result as t.RCss<S, P>;
            }
        );
const isCommonSelector = <P>(a: any): a is t.CommonSelector<P> => !!(a && a === 'selector');
export const getCssMapFromICsses = <S extends t.TSelector, P>() =>
    new Getter<t.ICss<S, P>, t.CssMap<S, P>>(
        css => {
            const cssMap: Map<keyof P, t.IProperty<P>> = new Map();
            css.cssProperty.forEach(v => {
                cssMap.set(v.propertyName, v);
            });
            const isPKey: Is<keyof P> = (a: any): a is keyof P => !!cssMap.has(a);
            const isS: Is<S> = (a: any): a is S => !!css.cssSelector.includes(a);
            const getCssProperty = (a: keyof P) => cssMap.get(a)!;
            return {
                isPKey,
                isS,
                getCssProperty,
            };
        });
export const getMCssTFromMCss = <VProp, AProp, CProp extends t.InputPropBase,
    CFProp extends t.InputPropFunctionBase,
    AdditionProp>() => <
        Selector extends t.TSelector,
        Prop extends t.TProp,
        NodeValue extends t.TNodeValue,
        Variable extends t.TVariable,
        >() =>
        new Getter<t.MCss<Selector, Prop, NodeValue, Variable, AProp, VProp, CProp, CFProp, AdditionProp>,
            t.MCssT<Selector, Prop, VProp, AProp, CProp & CFProp & AdditionProp>>(
                m => {
                    const map = getCssMapFromICsses<Selector, Prop>().get(m.css);
                    const toCss = getPCssFromRCss(getCssMapFromICsses<Selector, Prop>()
                        .get(m.css)).compose(getterString<Prop>()).get;
                    const toRCss = (r: t.TRProp<Selector, Prop, VProp, AProp, CProp & CFProp & AdditionProp>)
                        : t.RCss<Selector, Prop> => {
                        try {

                            const removeProp =
                                getPluginKeyValueFromCProps
                                    ().get(Object.assign({}, m.propFunctions, m.props, m.variable)).parseProps(r) as
                                t.RCss<Selector, Prop & VProp & AProp>;

                            const removeAbbrs = getRCssFromPluginKey<Selector, Prop>(map)(
                                getPluginKeyFromAbbrProps<Prop & VProp, AProp>().get(m.abbrs)).get(removeProp);
                            const removeVariable = getRCssFromVProps<VProp>()(map)(m.variable).get(removeAbbrs);
                            return removeVariable;
                        } catch (ex) {
                            throw new Error(ex);
                        }
                    };
                    const toTCss = (r: t.TRProp<Selector, Prop, VProp, AProp, CProp & CFProp & AdditionProp>): string =>
                        toCss(toRCss(r));
                    return {
                        toCss,
                        toRCss,
                        toTCss,
                    };
                });
