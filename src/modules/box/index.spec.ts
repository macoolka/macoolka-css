import { parseUnitProp as _parse} from '../../basic';
import {theme,rule} from './index'
const parse = _parse(rule,theme);
describe('box', () => {

    it('parse height',()=>{

        expect(parse({
            mkHeight: 'fullScreen',
        })).toEqual({
            height: '100vh',
        });
        expect(parse({
            mkHeight: 'full',
        })).toEqual({
            height: '100%',
        });
 

        expect(parse({
            mkMaxHeight: 'fullScreen',
        })).toEqual({
            maxHeight: '100vh',
        });
        expect(parse({
            mkMaxHeight: 'full',
        })).toEqual({
            maxHeight: '100%',
        });
 

        expect(parse({
            mkMinHeight: 'fullScreen',
        })).toEqual({
            minHeight: '100vh',
        });
        expect(parse({
            mkMinHeight: 'full',
        })).toEqual({
            minHeight: '100%',
        });

    })
    it('parse mkSquare',()=>{
        expect(parse({
            mkSquare: 'full',
        })).toEqual({
            width: '100%',
            height: '100%',
        });
        expect(parse({
            mkSquare: 40,
        })).toEqual({
            width: '40px',
            height: '40px',
        });
    })
    it('parse mkWidth', () => {
        expect(parse({
            mkWidth: 'fullScreen',
        })).toEqual({
            width: '100vw',
        });
        expect(parse({
            mkWidth: 'full',
        })).toEqual({
            width: '100%',
        });
        expect(parse({
            mkWidth: 'content',
        })).toEqual({
            "width": theme.box.width.content+'px'
        });
        expect(parse({
            mkWidth: 'nav',
        })).toEqual({
            "width": theme.box.width.nav+'px'
        });
        expect(parse({
            mkWidth: 'gutter',
        })).toEqual({
            "width": theme.box.width.gutter+'px'
        });
        expect(parse({
            mkWidth: 'third',
        })).toEqual({
            "width": theme.box.width.third+'px'
        });
       
    })
    it('parse mkMinWidth', () => {
        expect(parse({
            mkMinWidth: 'fullScreen',
        })).toEqual({
            minWidth: '100vw',
        });
        expect(parse({
            mkMinWidth: 'full',
        })).toEqual({
            minWidth: '100%',
        });
        expect(parse({
            mkMinWidth: 'content',
        })).toEqual({
            "minWidth": theme.box.width.content+'px'
        });
        expect(parse({
            mkMinWidth: 'nav',
        })).toEqual({
            "minWidth": theme.box.width.nav+'px'
        });
        expect(parse({
            mkMinWidth: 'gutter',
        })).toEqual({
            "minWidth": theme.box.width.gutter+'px'
        });
        expect(parse({
            mkMinWidth: 'third',
        })).toEqual({
            "minWidth": theme.box.width.third+'px'
        });
        
    })
    it('parse mkMaxWidth', () => {
        expect(parse({
            mkMaxWidth: 'fullScreen',
        })).toEqual({
            maxWidth: '100vw',
        });
        expect(parse({
            mkMaxWidth: 'full',
        })).toEqual({
            maxWidth: '100%',
        });
        expect(parse({
            mkMaxWidth: 'content',
        })).toEqual({
            "maxWidth": theme.box.width.content+'px'
        });
        expect(parse({
            mkMaxWidth: 'nav',
        })).toEqual({
            "maxWidth": theme.box.width.nav+'px'
        });
        expect(parse({
            mkMaxWidth: 'gutter',
        })).toEqual({
            "maxWidth": theme.box.width.gutter+'px'
        });
        expect(parse({
            mkMaxWidth: 'third',
        })).toEqual({
            "maxWidth": theme.box.width.third+'px'
        });
        
    })
    it('parse padding margin single', () => {
        expect(parse({
            mkMargin: 'small',
            mkMarginTop: 'small',
            mkMarginBottom: 'small',
            mkMarginLeft: 'small',
            mkMarginRight: 'small',
            mkPadding: 'small',
            mkPaddingTop: 'small',
            mkPaddingBottom: 'small',
            mkPaddingLeft: 'small',
            mkPaddingRight:'small',
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
    it('parse padding margin  x y', () => {
        expect(parse({
            mkMarginH: 'medium',
            mkMarginV: 'small',
            mkPaddingH:'small',
            mkPaddingV: 'small',
        })).toEqual({
            "marginLeft": "8px", "marginRight": "8px",
            "marginTop": "4px",
            "marginBottom": "4px",
            "paddingBottom": "4px", "paddingLeft": "4px", "paddingRight": "4px", "paddingTop": "4px"
        });
    })
    it('parse padding margin  x y', () => {
        expect(parse({
            marginH: 8,
            marginV: 4,
            paddingH:4,
            paddingV: 4,
        })).toEqual({
            "marginLeft": "8px", "marginRight": "8px",
            "marginTop": "4px",
            "marginBottom": "4px",
            "paddingBottom": "4px", "paddingLeft": "4px", "paddingRight": "4px", "paddingTop": "4px"
        });
    })
});

