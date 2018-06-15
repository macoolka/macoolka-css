import M from '../';
import * as t from '../type';
export { t };
export type CssPropertyType = {
    color?: string;
    backgroundColor?: string;
    marginLeft?: number | string;
    marginRight?: number | string;
};
export type CssSelector = 'focus' | 'hover';

export const baseCssValue = M.ofCss<CssSelector, CssPropertyType>({
    cssProperty: [{
        cssName: 'color',
        propertyName: 'color',
    }, {
        cssName: 'background-color',
        propertyName: 'backgroundColor',
    }, {
        cssName: 'margin-left',
        propertyName: 'marginLeft',
        unitName: 'px',
    }, {
        cssName: 'margin-right',
        propertyName: 'marginRight',
        unitName: 'px',
    }],
    cssSelector: ['focus', 'hover'],
});
export const baseCss = M.of()({ css: baseCssValue });

export type CssSelector1 = 'active1';
export type CssPropertyType1 = {
    bgColor?: string,
    paddingLeft?: number | string,
    paddingRight?: number | string,
};

export const mergeCssValue = M.ofCss<CssSelector1, CssPropertyType1>({
    cssSelector: ['active1'],
    cssProperty: [{
        propertyName: 'paddingLeft',
        cssName: 'padding-left',
        unitName: 'px',
    }, {
        propertyName: 'paddingRight',
        cssName: 'padding-right',
        unitName: 'px',
    }, {
        cssName: 'backgound-color',
        propertyName: 'bgColor',
        unitName: 'px',
    }],
});
export const mergeCss = baseCss.compose()({
    css: mergeCssValue,
});
describe('build css with property and selector', () => {
    it('css property with emprty', () => {
        expect(baseCss.toCss({})).toEqual('');
    });
    it('css property with string ', () => {
        expect(baseCss.toCss({ color: 'red' })).toEqual('color: red;');
        expect(baseCss.toCss({ focus: { color: 'red', f: 1 } }))
            .toEqual(`:focus {\n  color: red;\n}`);
    });
    it('css selecotr and property with string ', () => {
        expect(baseCss.toCss({ focus: { color: 'red' } }))
            .toEqual(`:focus {\n  color: red;\n}`);
    });
    it('css property with number and unitName', () => {
        expect(baseCss.toCss({ marginLeft: 1 })).toEqual('margin-left: 1px;');
        expect(baseCss.toCss({ marginLeft: 0 })).toEqual('margin-left: 0px;');
        expect(baseCss.toCss({ marginLeft: '1' })).toEqual('margin-left: 1;');
        expect(baseCss.toCss({ focus: { marginLeft: 2 }, hover: { color: 'red' } }))
            .toEqual(`:focus {\n  margin-left: 2px;\n}\n:hover {\n  color: red;\n}`);
    });
});
describe('build css with property and common selector', () => {
    it('css property with string ', () => {
        expect(baseCss.toCss({ selector: [{ name: ':focus', value: { color: 'red' } }] }))
            .toEqual(`:focus {\n  color: red;\n}`);
        expect(baseCss.toCss({
            selector: [{
                name: '& > *', value: {
                    color: 'red', selector: [{
                        name: ':hover',
                        value: {
                            color: 'black',
                        },
                    }],
                },
            }],
        }))
            .toEqual(`& > * {\n  color: red;\n  :hover {\n    color: black;\n  }\n}`);
    });
});
/* type T = t.RCss<'focus',
    Pick<CssPropertyType, 'color' | 'backgroundColor' | 'marginLeft'> & CssPropertyType1 & {
        a?: string | undefined;
    }>;
type T1 = t.RCss<"focus" | "hover" | "active1",
    Pick<CssPropertyType, "color" | "backgroundColor" | "marginLeft"> & CssPropertyType1 & {
        a?: string | undefined;
    }>;
const a: T1 = { focus: { focus1: { color: 'f' } } }; */

describe('compose two css', () => {

    it('css property with string', () => {
        expect(mergeCss.toCss({})).toEqual('');
        expect(mergeCss.toCss({ color: 'red' })).toEqual('color: red;');
        // expect(mergeCss.toRCss({ focus: { focus1: { focus1: 12 } } })).toEqual('');
        expect(mergeCss.toCss({ bgColor: 'red' })).toEqual('backgound-color: red;');
        expect(mergeCss.toCss({ active1: { hover: { bgColor: 'red', f: 1 } } }))
            .toEqual(`:active1 {\n  :hover {\n    backgound-color: red;\n  }\n}`);
    });
    it('css property with number and unitName', () => {
        expect(mergeCss.toCss({ paddingLeft: 1 })).toEqual('padding-left: 1px;');
        expect(mergeCss.toCss({ paddingLeft: 0 })).toEqual('padding-left: 0px;');
        expect(mergeCss.toCss({ paddingLeft: '1' })).toEqual('padding-left: 1;');
        expect(mergeCss.toCss({ active1: { hover: { paddingLeft: 2 } } }))
            .toEqual(`:active1 {\n  :hover {\n    padding-left: 2px;\n  }\n}`);
    });
});
export type RCssSelector<Selecotor extends string, Property> = {
    [name in Selecotor]?: Property & RCssSelector<Selecotor, Property>;
};
export type RCss<Selecotor extends string, Property> = Property & RCssSelector<Selecotor, Property>;
export type t2 = RCss<'hover', { color?: string }>;
/**
 * check error
 */
// export const a1: t2 = { hover: { f: 1 } };
/**
 * check correct
 */
export const a2: t2 = { hover: { color: 'red', f: 1 } };
