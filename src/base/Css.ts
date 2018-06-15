import * as t from './type';
import { Validation } from 'mocoolka-fp/lib/Validation';
import * as css from './ICss';
/* import * as abbr from './AbbrProp';
import * as variable from './VProp';

import * as prop from './CProp';
import { validCProps } from './validation'; */
export * from './type';

import { success, failure } from 'mocoolka-fp/lib/Validation';
export { success, failure, Validation };
import { getCssMapFromICsses, getPCssFromRCss, getterString } from './get';
const of = <Selector extends string, Prop, Variable, isNodeValue>(_icss: t.ICss<Selector, Prop>) => {
    const icss = css.of(_icss);
    const map = getCssMapFromICsses<Selector, Prop>().get(icss);
    const compose = <Selector1 extends string, Prop1>(b: t.ICss<Selector1, Prop1>) => of(css.compose(icss, b));
    const toCss = getPCssFromRCss(map).compose(getterString<Prop>()).get;

    return {
        toCss,
        compose,
    };
};
const M = {
    of,
};
export default M;
