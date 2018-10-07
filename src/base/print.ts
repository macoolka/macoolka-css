/**
 * The provide getter from CssNode to string
 *
 * @getter
 */
import { indent } from 'mocoolka-fp/lib/format';
import { CssNode, getProps, getSelector} from './CssNode';
import { CssSelector} from './CssSelector';
import { toPairs } from 'mocoolka-fp/lib/object';
import { Getter } from 'mocoolka-fp/lib/Monocle';
import {hyphenate} from 'mocoolka-fp/lib/string';
const CRLF = '\n';
const SPACE = ' ';
const printValue = (a: string | number) => a;
const printName = (a: string) => hyphenate(a);

const printProperty = (i: number) => ([name, value]: [string, any]): string =>
    `${indent(i)}${printName(name)}:${SPACE}${printValue(value)};`;

const printSelectorNode = (i: number) =>
    <T>([name, prop]: [string, T]): string =>
        `${indent(i)}${printName(name)}${SPACE}{${CRLF}${printProperties(i + 1)(prop)}${CRLF}${indent(i)}}`;

const printProperties = (i: number) => <T>(a: T): string => toPairs(a as {}).map(printProperty(i)).join(CRLF);
const printSelector = (i: number) =>
    <T>(a: CssSelector<T>): string => toPairs(a).map(printSelectorNode(i)).join(CRLF);
const printNode = (i: number) => <T> (node: CssNode<T>) =>
    `${printProperties(i)(getProps(node))}${getSelector(node).map(a => `${CRLF}${printSelector(i)(a)}`).getOrElse('')}`;
// export const printCss = (i: number = 0) => (css: CommonCss) => toPairs(css).map(printCssNode(i)).join(CRLF);
export const cssNodeToStringGetter = <T>(i: number = 0) => new Getter<CssNode<T>, string>(printNode(i));
export const toString = cssNodeToStringGetter(0).get;
