import { fold as _fold } from 'mocoolka-fp/lib/Monoid';
import { Record } from 'mocoolka-fp/lib/Record';
/**
 * Properties is css properties's type
 * @type
 */
export type CssProperties = { [key: string]: any };
export const properties = <T extends CssProperties>() => Record<T>();
export const fold = <T>() => _fold(properties<T>());

const parseSingleProp = <P extends CssProperties, K extends keyof P = keyof P>(name: K) =>
 (value: P[K]) => ({ [name]: value });
const parseArrayProp = <P extends CssProperties, K extends keyof P= keyof P>(name: Array<K>) => (value: P[K]) =>
    fold()(name.map(a => parseSingleProp<P, K>(a)(value)));

/**
 * Parse mutil propname to one value.
 * etc. parseProps(2)(['paddingLeft,paddingRight]) output:{paddingLeft:2,paddingRight:2}
 */
export const parseProps = <P extends CssProperties, K extends keyof P= keyof P>(value: P[K]) =>
 (name: K | Array<K>) => (name instanceof Array) ?
    parseArrayProp<P, K>(name)(value) : parseSingleProp<P, K>(name)(value);
