/**
 * convert number type to px or precent type
 * @rule
 */
import { BaseProps } from '../base/types';
import { Rule } from '../base/rule';
import { isNumber } from 'mocoolka-fp/lib/predicate';
import { getDictionaryMonoid, fold } from 'mocoolka-fp/lib/Monoid';
import { getObjectSemigroup } from 'mocoolka-fp/lib/Semigroup';
import { UnitProps } from './types';
const M = getDictionaryMonoid(getObjectSemigroup<any>());
const pxOrPercent = (n: any): any => !isNumber(n) || n > 1 ? px(n) : (n * 100) + '%';
const px = (n: any): any => isNumber(n) ? n + 'px' : n;
const ms = (n: any): any => isNumber(n) ? n + 'ms' : n;
export const pxProps = [
    'backgroundSize', 'borderBottomWidth', 'borderLeftWidth', 'borderRadius', 'borderRightWidth',
    'borderTopWidth', 'borderWidth', 'bottom', 'fontSize',
    'left', 'letterSpacing', 'lineHeight', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'right', 'top',
    'flexBasis',
];
export const pxOrPercentProps = ['width', 'height', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight'];
export const msProps = ['transitionDuration', 'transitionDelay', 'animationDuration', 'animationDelay'];
const pxArray = pxProps.map((a) => ({
    [a]: (v: any) => ({ [a]: px(v) }),
}));
const pxOrPercentArray = pxOrPercentProps.map((a) => ({
    [a]: (v: any) => ({ [a]: pxOrPercent(v) }),
}));
const msPropsArray = msProps.map((a) => ({
    [a]: (v: any) => ({ [a]: ms(v) }),
}));

export const rule: Rule<UnitProps, {}, BaseProps> = {
    rule: fold(M)(pxArray.concat(pxOrPercentArray).concat(msPropsArray)),
};
export {
    UnitProps
};
