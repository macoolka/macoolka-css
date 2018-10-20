/**
 * convert number type to px or precent type
 * @rule
 */
import { OutRule, InputOverwrite, BaseProps } from '../css';
import { isNumber } from 'mocoolka-fp/lib/predicate';
import { getDictionaryMonoid, fold } from 'mocoolka-fp/lib/Monoid';
import { getObjectSemigroup } from 'mocoolka-fp/lib/Semigroup';
import { UnitNumberProps } from './types';
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
    [a]: ({value}: any) => ({ [a]: px(value) }),
}));
const pxOrPercentArray = pxOrPercentProps.map((a) => ({
    [a]: ({value}: any) => ({ [a]: pxOrPercent(value) }),
}));
const msPropsArray = msProps.map((a) => ({
    [a]: ({value}: any) => ({ [a]: ms(value) }),
}));
export const rule: OutRule<UnitNumberProps> = {
    rule: fold(M)(pxArray.concat(pxOrPercentArray).concat(msPropsArray)),
};
export type UnitProps= InputOverwrite<UnitNumberProps, BaseProps>;
