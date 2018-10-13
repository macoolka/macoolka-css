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
    describe('should parse absolute', () => {
        it('should parse mkAbsoluteCenter', () => {
            expect(parse({ mkAbsoluteCenter: {width:18,height:34} })).toEqual({ 
                position: 'absolute',
                width:'18px',
                height:'34px',
                top: '50%',
                left: '50%',
                marginTop: '-17px',
                marginLeft: '-9px',
                marginBottom: '0px',
                marginRight: '0px',
                padding:'0px',
            });
        });
        it('should parse mkAbsoluteCenter', () => {
            expect(parse({ mkAbsoluteFull: true })).toEqual({ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                margin: '0px',
                padding: '0px',
            });
        });

        
     
    })
});

