import { parseUnitRule as _parse} from '../../basic';
import {theme,rule} from './index'
const parse = _parse(rule)(theme);

describe('parse color', () => {
    it('parse fgColor', () => {
        expect(parse({
            mkTextColor: 'main',
        })).toEqual({
            color: '#009688'
        });
        expect(parse({
            mkTextColor: 'accent',
        })).toEqual({
            color: '#f50057'
        });
        expect(parse({
            mkTextColor: 'yellow',
        })).toEqual({"color": "#ffeb3b"});
    })
    it('parse bgColor', () => {
        expect(parse({
            mkColor: 'main',
        })).toEqual({
            "backgroundColor": "#009688", "color": "#fff"
        });
        expect(parse({
            mkColor: 'accent',
        })).toEqual({
            "backgroundColor": "#f50057", "color": "#fff"
        });
        expect(parse({
            mkColor: 'yellow',
        })).toEqual({"backgroundColor": "#ffeb3b", "color": "rgba(0, 0, 0, 0.87)"});
    })
});

