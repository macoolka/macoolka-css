import { parseUnitRule as _parse} from '../../basic';
import {theme,rule} from './index'
const parse = _parse(rule)(theme);

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
            "alignItems": "center",
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

