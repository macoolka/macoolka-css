
import {  ruleModule } from '../index'
import { parseProp } from '../../../CssRule';
const parse = parseProp(ruleModule);
const theme:any=ruleModule.theme
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
    it('parse mkElementHeight', () => {
        expect(parse({
            mkElementHeight: 'large',
        })).toEqual({
            "height": theme.box.element.large+'px'
        });
        expect(parse({
            mkElementHeight: 'medium',
        })).toEqual({
            "height": theme.box.element.medium+'px'
        });
        expect(parse({
            mkElementHeight: 'small',
        })).toEqual({
            "height": theme.box.element.small+'px'
        });
    })
    it('parse mkContainerHeight', () => {
        expect(parse({
            mkContainerHeight: 'large',
        })).toEqual({
            "height": theme.box.container.large+'px'
        });
        expect(parse({
            mkContainerHeight: 'medium',
        })).toEqual({
            "height": theme.box.container.medium+'px'
        });
        expect(parse({
            mkContainerHeight: 'small',
        })).toEqual({
            "height": theme.box.container.small+'px'
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
    })
    it('parse mkContentWidth', () => {
        expect(parse({
            mkContentWidth: 'large',
        })).toEqual({
            "width": theme.box.contentWidth.large+'px'
        });
        expect(parse({
            mkContentWidth: 'nav',
        })).toEqual({
            "width": theme.box.contentWidth.nav+'px'
        });
        expect(parse({
            mkContentWidth: 'medium',
        })).toEqual({
            "width": theme.box.contentWidth.medium+'px'
        });
        expect(parse({
            mkContentWidth: 'small',
        })).toEqual({
            "width": theme.box.contentWidth.small+'px'
        });
    })
    it('parse mkElementWidth', () => {
        expect(parse({
            mkElementWidth: 'large',
        })).toEqual({
            "width": theme.box.element.large+'px'
        });
        expect(parse({
            mkElementWidth: 'medium',
        })).toEqual({
            "width": theme.box.element.medium+'px'
        });
        expect(parse({
            mkElementWidth: 'small',
        })).toEqual({
            "width": theme.box.element.small+'px'
        });
    })
    it('parse mkContainerWidth', () => {
        expect(parse({
            mkContainerWidth: 'large',
        })).toEqual({
            "width": theme.box.container.large+'px'
        });
        expect(parse({
            mkContainerWidth: 'medium',
        })).toEqual({
            "width": theme.box.container.medium+'px'
        });
        expect(parse({
            mkContainerWidth: 'small',
        })).toEqual({
            "width": theme.box.container.small+'px'
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
            "margin": "8px",
            "marginBottom": "8px",
            "marginLeft": "8px",
            "marginRight": "8px",
            "marginTop": "8px",
            "padding": "8px",
            "paddingBottom": "8px",
            "paddingLeft": "8px",
            "paddingRight": "8px",
            "paddingTop": "8px",
        });
    })
    it('parse margin gutter', () => {
        expect(parse({
            mkMarginGutter: 'small',
            mkMarginGutterTop: 'small',
            mkMarginGutterBottom: 'small',
            mkMarginGutterLeft: 'small',
            mkMarginGutterRight: 'small',
        })).toEqual({
            "margin": "20px",
            "marginBottom": "20px",
            "marginLeft": "20px",
            "marginRight": "20px",
            "marginTop": "20px",
        });
    })
    it('parse padding margin  x y', () => {
        expect(parse({
            mkMarginH: 'medium',
            mkMarginV: 'small',
            mkPaddingH:'small',
            mkPaddingV: 'small',
        })).toEqual({
            "marginLeft": "16px", "marginRight": "16px",
            "marginTop": "8px",
            "marginBottom": "8px",
            "paddingBottom": "8px", "paddingLeft": "8px", "paddingRight": "8px", "paddingTop": "8px"
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

