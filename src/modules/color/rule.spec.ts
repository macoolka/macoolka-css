import {rule} from './rule';
import { parse as basicParse,theme as basicTheme } from '../../basic';
import {theme} from './theme'
const parse = basicParse(rule)({...theme,...basicTheme});

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
    })
});

