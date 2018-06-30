import * as t from '../type';
import { CssPropertyType, baseCssValue } from './icss.spec';
import {of} from '../';
import {of as ofAbbr} from '../AbbrProp';
type C1 = t.AbbrProp<'MH', CssPropertyType, 'marginLeft'>;
type C2 = t.AbbrProp<'C', CssPropertyType, 'color'>;
type AbbrProps = C1 & C2;
const abbrs = ofAbbr<CssPropertyType, AbbrProps>({ MH: ['marginLeft'], C: ['color'] });
const abbrCss = of<{}, AbbrProps>()({ css: baseCssValue, abbrs: abbrs });
describe('AbbrProp', () => {

    it('get css property with replace props', () => {
        expect(abbrCss.toRCss({})).toEqual({});
        expect(abbrCss.toRCss({ mkstyle: { C: 'red', MH: 2 } })).toEqual({ color: 'red', marginLeft: 2 });
        expect(abbrCss.toRCss({ focus: { hover: { mkstyle: { MH: '2px' } } } }))
            .toEqual({ focus: { hover: { marginLeft: '2px' } } });
        expect(abbrCss.toCss(abbrCss.toRCss({ focus: { hover: { mkstyle: { MH: '2px' } } } })))
            .toEqual(`:focus {\n  :hover {\n    margin-left: 2px;\n  }\n}`);
    });
});
type ReplaceProps1 = t.AbbrProp<'PH', CssPropertyType, 'marginLeft'>;
const abbrs1 = ofAbbr<CssPropertyType, ReplaceProps1>({ PH: ['marginLeft', 'marginRight'] });
const abbrMerge = abbrCss.compose<{}, ReplaceProps1 & AbbrProps>()({ css: baseCssValue, abbrs: abbrs1 });
describe('mix AbbrProp', () => {
    it('get css property with replace props', () => {
        expect(abbrMerge.toRCss({})).toEqual({});
        expect(abbrMerge.toRCss({ mkstyle: { PH: 1, C: 'red' } })).toEqual({
            color: 'red', marginLeft: 1, marginRight: 1,
        });
        expect(abbrMerge.toRCss({ hover: { hover: { mkstyle: { PH: 1 } } } }))
            .toEqual({ hover: { hover: { marginLeft: 1, marginRight: 1  } } });
    });
});
