/**
 * The provide getter from CssNode to string
 *
 * @getter
 */
import { indent } from 'mocoolka-fp/lib/format';
import {  PNode } from './Node';
// import { CssSelector} from './CssSelector';
import { toPairs, omit } from 'mocoolka-fp/lib/object';
import { Getter } from 'mocoolka-fp/lib/Monocle';
import {hyphenate} from 'mocoolka-fp/lib/string';
import {fromNullable} from 'mocoolka-fp/lib/Option';
const CRLF = '\n';
const SPACE = ' ';
const printValue = (a: string | number) => a;
const printName = (a: string) => hyphenate(a);

const printProperty = (i: number) => ([name, value]: [string, any]): string =>
    `${indent(i)}${printName(name)}:${SPACE}${printValue(value)};`;

const printSelectorNode = (i: number) =>
    <T>([name, prop]: [string, T]): string =>
        `${indent(i)}${printName(name)}${SPACE}{${CRLF}${printProperties(i + 1)(prop)}${CRLF}${indent(i)}}`;
const printMediaNode = (i: number) =>
        <T extends object>([name, prop]: [string,[string,T][]]): string =>
            `${indent(i)}${printName(name)}${SPACE}{${CRLF}${printSelector(i + 1)(prop)}${CRLF}${indent(i)}}`;
const printProperties = (i: number) => <T>(a: T): string => toPairs(a as {}).map(printProperty(i)).join(CRLF);
const printSelector = (i: number) =>
    <T extends object>(a: [string,T][]): string => a.map(printSelectorNode(i)).join(CRLF);
const printMedia = (i: number) =>
    <T extends object>(a: [string,[string,T][]][]): string => a.map(printMediaNode(i)).join(CRLF);
const printNode = (i: number) => <T extends object> (node: PNode<T>) => {
    const result = '';

  /*      const prop= omit(node,'selector');
       const selector=node.selector;
       result+=(selector===''||selector!==undefined)?
       printProperties(i)(prop):printProperties(i+1)({[`${selector}`]:prop}) */
      // result+=printProperties(i)(propC):`${CRLF}${printSelector(i)(selector)}`

    return `${printProperties(i)(omit(node, ['selector','media']))}${fromNullable(node.selector).
        map(a => `${CRLF}${printSelector(i)(a)}`).getOrElse('')}${fromNullable(node.media).
            map(a => `${CRLF}${printMedia(i)(a)}`).getOrElse('')}`;

    return result;
/*    return `${printProperties(i)(lensA.props.get(node))}${lensA.selector.getOption(node).
    map(a => `${CRLF}${printSelector(i)(a)}`).getOrElse('')}`; */
};

// export const printCss = (i: number = 0) => (css: CommonCss) => toPairs(css).map(printCssNode(i)).join(CRLF);
export const nodeToStringGetter = <T extends object>(i: number = 0) => new Getter<PNode<T>, string>(printNode(i));
export const toString = nodeToStringGetter(0).get;
