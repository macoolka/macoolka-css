import {theme,parseModule as _parse}from './index';
const parse = _parse(theme);
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
            mkWidth: 'content',
        })).toEqual({
            width: '1160px'
        });
        expect(parse({
            mkHeight: 'full',
        })).toEqual({
            height: '100%',
        });
    })
    it('parse single', () => {
        expect(parse({
            mkMargin: 4,
            mkMarginTop: 4,
            mkMarginBottom: 4,
            mkMarginLeft: 4,
            mkMarginRight: 4,
            mkPadding: 4,
            mkPaddingTop: 4,
            mkPaddingBottom: 4,
            mkPaddingLeft: 4,
            mkPaddingRight: 4,
        })).toEqual({
            "margin": "4px",
            "marginBottom": "4px",
            "marginLeft": "4px",
            "marginRight": "4px",
            "marginTop": "4px",
            "padding": "4px",
            "paddingBottom": "4px",
            "paddingLeft": "4px",
            "paddingRight": "4px",
            "paddingTop": "4px",
        });
    })
    it('parse x y', () => {
        expect(parse({
            mkMarginH: 8,
            mkMarginV: 4,
            mkPaddingH: 4,
            mkPaddingV: 4,
        })).toEqual({
            "marginLeft": "8px", "marginRight": "8px",
            "marginTop": "4px",
            "marginBottom": "4px",
            "paddingBottom": "4px", "paddingLeft": "4px", "paddingRight": "4px", "paddingTop": "4px"
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
            alignItems:'center',
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
    it('parse media', () => {
        expect(parse({})).toEqual({})
        expect(parse({ mkMedia: [{ width: '10px' }, { width: '100%' }, { width: '300px' }] })).
            toEqual({
                "selector": {
                    "@media screen and (max-width: 80em)":
                        { "width": "100%" },
                    "@media screen and (max-width: 93em)":
                        { "width": "300px" }
                },
                "width": "10px"
            })
    })
});


