import {parseModuleProp as _parse,theme}from './index';
const parse = _parse({},theme);
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
    it('rounded', () => {
        expect(parse({ mkRounded: true })).toEqual({borderRadius: '50%'});
    });
    it('with height',()=>{
        expect(parse({
            mkContentWidth: 'large',
        })).toEqual({
            width: '1160px'
        });
        expect(parse({
            mkHeight: 'full',
        })).toEqual({
            height: '100%',
        });
    })
  
    it('parse textColor', () => {
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
    it('parse Color', () => {
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
            margin: 'auto',
        });
        expect(parse({
            mkFlex: 'row',
        })).toEqual({
            alignItems:'center',
            display: 'flex',
        });
        expect(parse({
            mkFixed: 'right',
        })).toEqual({
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom:'0px'
        });
    })
    it('parse effect', () => {
        expect(parse({
            mkFlip: 'horizontal',
        })).toEqual({
            transform: 'scale(-1, 1)'
        });
        expect(parse({
            mkRotate: 30,
        })).toEqual({
            transform: `rotate(${30}deg)`
        });
        expect(parse({
            mkTransition: {
                property: 'color',
                duration: 'shorter',
                ease: 'easeInOut',
                delay: 'shorter',
            },
        })).toEqual({
            "transitionDelay": "200ms",
            "transitionDuration": "200ms",
            "transitionProperty": "color",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
        });
    })
    it('parse flex', () => {
        expect(parse({
            mkFlexAlign: 'center',
            mkFlexAlignV: 'center',
            mkFlexAlignLines: 'center',
            mkFlexWrap: 'wrap',
            mkFlexDirection: 'row',
            mkFlexItemAlign: 'center',
            mkFlexItemAlignV: 'center',
            mkFlexItemGrow: 1,
            mkFlexItemOrder: 1,
            mkFlexItemShrink: 1,
            mkFlexItemWidth: 1,

        })).toEqual({
            'justifyContent': 'center',
            'alignItems': 'center',
            'alignContent': 'center',
            'flexWrap': 'wrap',
            'flexDirection': 'row',
            'justifySelf': 'center',
            'alignSelf': 'center',
            'flexGrow': 1,
            'order': 1,
            'flexShrink': 1,
            'flexBasis': '1px',
        });
    })
    it('parse text', () => {
        expect(parse({
            mkFontWeight: 'light',
        })).toEqual({
            fontWeight: 300
        });
        expect(parse({
            mkFontFamily: 'serif',
        })).toEqual({
            fontFamily: 'Georgia, Cambria, Times New Roman, Times, serif',
        });
        expect(parse({
            mkFontSize: 'h3',
        })).toEqual({
            fontSize: '48px',
        });
      
    })

});


