import * as t from '../base';
import { camelCase } from 'mocoolka-fp/lib/string';
import { CssProperty, data } from './Css';
import { TCssProperty } from './PropType';
export { TCssProperty };
const getCssProperty = (item: CssProperty): t.IProperty<TCssProperty> =>
    Object.assign({}, { propertyName: camelCase(item.cssName) }, item) as t.IProperty<TCssProperty>;
export const cssProperties = data.map(getCssProperty);
export type TCssSelector = 'focus' | 'hover' | 'active' | 'disabledS' | 'empty' | 'enabled' | 'invalid';

export const value = t.css.of<TCssSelector, TCssProperty>({
    cssSelector: ['focus', 'hover', 'active', 'empty', 'enabled', 'invalid'],
    cssProperty: cssProperties,
    /*
        replaceInputProps: {
            marginV: ['marginTop', 'marginBottom'],
            marginH: ['marginLeft', 'marginRight'],
            paddingV: ['paddingTop', 'paddingBottom'],
            paddingH: ['paddingLeft', 'paddingRight'],
            bgColor: ['backgroundColor'],
        }, */
});
