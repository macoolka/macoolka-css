import {theme,rule}from './index';
import { parseUnitProp as _parse} from '../../basic';
const parse = _parse(rule,theme);
describe('parse Border', () => {
    it('none', () => {
        expect(parse({ mkBorder: 'none' })).toEqual({ 'borderWidth': '0px' });
    });
    it('topBar', () => {
        expect(parse({ mkBorder: 'topBar' })).toEqual({ 'borderTopWidth': '4px',borderTopStyle: 'solid' });
    });
    it('mkShadow', () => {
        expect(parse({ mkShadow: 2 })).toEqual({ 'boxShadow': '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)' });
    });
    it('mkRounded', () => {
        expect(parse({ mkRounded: true })).toEqual({borderRadius: '50%'});
    });
    it('mkRounded is false', () => {
        expect(parse({ mkRounded: false })).toEqual({});
    });
    it('mkBorderRadius', () => {
        expect(parse({ mkBorderRadius: 'small' })).toEqual({borderRadius:'2px'});
    });
});


