/**
 * convert number type to px or precent type
 * @rule
 */
import { BaseProps } from '../base/types';
import { ObjectGet } from 'mocoolka-fp/lib/TypeLevel';
import { Rule, Input as RuleInput } from '../base/rule';
import { isNumber } from 'mocoolka-fp/lib/predicate';
import { getDictionaryMonoid, fold } from 'mocoolka-fp/lib/Monoid';
import { getObjectSemigroup } from 'mocoolka-fp/lib/Semigroup';
import R from 'mocoolka-fp/lib/Record';
const M = getDictionaryMonoid(getObjectSemigroup<any>());

type UnitCssPropeties<U extends keyof BaseProps, T> = ObjectGet<BaseProps, U, T>;
type PxProps = 'backgroundSize' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderRadius' | 'borderRightWidth' |
    'borderTopWidth' | 'borderWidth' | 'bottom' | 'fontSize' |
    'left' | 'letterSpacing' | 'lineHeight' | 'margin' | 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' |
    'padding' | 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'right' | 'top' |
    'flexBasis'|'outline';
type PxOrPercents = 'width' | 'height' | 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight';
export type Props = UnitCssPropeties<PxProps | PxOrPercents, number>;
export const foldUnit = R<Props>();
const pxOrPercent = (n: any): any => !isNumber(n) || n > 1 ? px(n) : (n * 100) + '%';
const px = (n: any): any => isNumber(n) ? n + 'px' : n;

export const pxProps: Array<keyof Props> = [
    'backgroundSize', 'borderBottomWidth', 'borderLeftWidth', 'borderRadius', 'borderRightWidth',
    'borderTopWidth', 'borderWidth', 'bottom', 'fontSize',
    'left', 'letterSpacing', 'lineHeight', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'right', 'top',
    'flexBasis',
];
export const pxOrPercentProps = ['width', 'height', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight'];

const pxArray = pxProps.map((a) => ({
    [a]: (v: any) => ({ [a]: px(v) }),
}));
const pxOrPercentArray = pxOrPercentProps.map((a) => ({
    [a]: (v: any) => ({ [a]: pxOrPercent(v) }),
}));
export type UnitProps = RuleInput<Props, BaseProps>;
export const rule = {rule: fold(M)(pxArray.concat(pxOrPercentArray))} as Rule<Props, {}, BaseProps>;
