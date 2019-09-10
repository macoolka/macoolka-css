
import {  ruleModule } from '../index'
import { parseProp } from '../../../CssRule';
const parse = parseProp(ruleModule);
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
            mkVisible: 'none',
        })).toEqual({
            display: 'none',
            visibility: 'hidden',
        });
        expect(parse({
            mkBlock: 'center',
        })).toEqual({
            marginLeft: 'auto',
            marginRight: 'auto',
        });
        expect(parse({
            mkFlex: 'row',
        })).toEqual({
            "WebkitOverflowScrolling": "touch", "alignItems": "flex-start", "display": "flex", "listStyle": "none"
        });
        expect(parse({
            mkFixed: 'right',
        })).toEqual({
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
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
                paddingBottom: '0px',
                paddingTop: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
            });
        });
        it('should parse mkAbsoluteCenter', () => {
            expect(parse({ mkAbsolute: 'full' })).toEqual({ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                margin: '0px',
                paddingBottom: '0px',
                paddingTop: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
            });
        });

        
     
    })
});

