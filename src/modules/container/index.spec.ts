import { parse as basicParse,theme as basicTheme } from '../../basic';
import {theme,rule} from './index'
const parse = basicParse(rule)({...theme,...basicTheme});

describe('container', () => {
    it('parse container', () => {

        expect(parse({
            mkZIndex: 'tooltip',
        })).toEqual({
            zIndex: 9990
        });
        expect(parse({
            mkScrollBar: 'horizontal',
        })).toEqual({
            overflowX: 'auto',
            overflowY: 'hidden',
        });

        expect(parse({
            mkVisibility: 'none',
        })).toEqual({
            display: 'none',
            visibility: 'hidden',
        });
        expect(parse({
            mkAlign: 'center',
        })).toEqual({
            margin: 'auto',
        });
        expect(parse({
            mkLayout: 'row',
        })).toEqual({
            display: 'flex',
        });
        expect(parse({
            mkPosition: 'fixedRightTop',
        })).toEqual({
            position: 'fixed',
            top: '0',
            right: '0',
        });
    })

});

