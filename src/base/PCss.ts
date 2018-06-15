import { ObjectOmit } from 'mocoolka-fp/lib/TypeLevel';
import { indent } from 'mocoolka-fp/lib/format';
import { isNumber, isNil, isArray } from 'mocoolka-fp/lib/predicate';
import { IProperty, PCssProperty, PCssSelector,  PCss, TSelector } from './type';
import { Getter } from 'mocoolka-fp/lib/Monocle';

export const pname = <P>(v: IProperty<P>): IProperty<P> => v;
export const pcss = <P>(v: ObjectOmit<PCssProperty<P>, 'kind'>): PCssProperty<P> =>
    Object.assign({}, v, { kind: 'value' } as { kind: 'value' });
export const pselector = <P>(v: ObjectOmit<PCssSelector<P>, 'kind'>): PCssSelector<P> =>
    Object.assign({}, v, { kind: 'selector' } as { kind: 'selector' });
export const template = (i: number = 0) => <S extends TSelector, P>(node: PCss<P> | PCss<P>[]): string => {
    if (isArray(node)) {
        return node.map(template(i)).join('\n');
    }
    switch (node.kind) {
        case 'value':
            return printPCssValue(i)(node);
        case 'selector':
            return printPCssSelector(i)(node);
    }
};

const printValue = (a: string | number, unitName?: string) => !isNil(unitName) && isNumber(a) ? `${a}${unitName}` : a;
const printPCssValue = (i: number) => <P>(a: PCssProperty<P>): string =>
    `${indent(i)}${a.css.cssName}: ${printValue(a.value, a.css.unitName)};`;
const printPCssSelector = (i: number) => <P>
    (a: PCssSelector<P>): string => `${indent(i)}${(a.type !== 'common') ? ':' : ''}${a.name} {
${a.items.map(template(i + 1)).join(
        '\n')}
${indent(i)}}`;

export const getterString = <P>() =>
    new Getter<PCss<P> | PCss<P>[], string>(a => template(0)(a));
