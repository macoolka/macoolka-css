import { parseUnitRule as _parse} from '../../basic';
import {theme,rule} from './index'
const parse = _parse(rule)(theme);
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
            mkHeight: 'small',
        })).toEqual({
            height: '18px',
        });
        expect(parse({
            mkHeight: 'medium',
        })).toEqual({
            height: '24px',
        });
        expect(parse({
            mkHeight: 'large',
        })).toEqual({
            height: '36px',
        });
        expect(parse({
            mkHeight: 'xlarge',
        })).toEqual({
            height: '48px',
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
            mkMaxHeight: 'small',
        })).toEqual({
            maxHeight: '18px',
        });
        expect(parse({
            mkMaxHeight: 'medium',
        })).toEqual({
            maxHeight: '24px',
        });
        expect(parse({
            mkMaxHeight: 'large',
        })).toEqual({
            maxHeight: '36px',
        });
        expect(parse({
            mkMaxHeight: 'xlarge',
        })).toEqual({
            maxHeight: '48px',
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
        expect(parse({
            mkMinHeight: 'small',
        })).toEqual({
            minHeight: '18px',
        });
        expect(parse({
            mkMinHeight: 'medium',
        })).toEqual({
            minHeight: '24px',
        });
        expect(parse({
            mkMinHeight: 'large',
        })).toEqual({
            minHeight: '36px',
        });
        expect(parse({
            mkMinHeight: 'xlarge',
        })).toEqual({
            minHeight: '48px',
        });
    })
    it('parse mkSquare',()=>{
        expect(parse({
            mkSquare: 'small',
        })).toEqual({
            width: '18px',
            height: '18px',
        });
        expect(parse({
            mkSquare: 'medium',
        })).toEqual({
            width: '24px',
            height: '24px',
        });
        expect(parse({
            mkSquare: 'large',
        })).toEqual({
            width: '36px',
            height: '36px',
        });
        expect(parse({
            mkSquare: 'xlarge',
        })).toEqual({
            width: '48px',
            height: '48px',
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
        expect(parse({
            mkWidth: 'small',
        })).toEqual({
            "width": theme.box.size.small+'px'
        });
        expect(parse({
            mkWidth: 'medium',
        })).toEqual({
            "width": theme.box.size.medium+'px'
        });
        expect(parse({
            mkWidth: 'large',
        })).toEqual({
            "width": theme.box.size.large+'px'
        });
        expect(parse({
            mkWidth: 'xlarge',
        })).toEqual({
            "width": theme.box.size.xlarge+'px'
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
        expect(parse({
            mkMinWidth: 'small',
        })).toEqual({
            "minWidth": theme.box.size.small+'px'
        });
        expect(parse({
            mkMinWidth: 'medium',
        })).toEqual({
            "minWidth": theme.box.size.medium+'px'
        });
        expect(parse({
            mkMinWidth: 'large',
        })).toEqual({
            "minWidth": theme.box.size.large+'px'
        });
        expect(parse({
            mkMinWidth: 'xlarge',
        })).toEqual({
            "minWidth": theme.box.size.xlarge+'px'
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
        expect(parse({
            mkMaxWidth: 'small',
        })).toEqual({
            "maxWidth": theme.box.size.small+'px'
        });
        expect(parse({
            mkMaxWidth: 'medium',
        })).toEqual({
            "maxWidth": theme.box.size.medium+'px'
        });
        expect(parse({
            mkMaxWidth: 'large',
        })).toEqual({
            "maxWidth": theme.box.size.large+'px'
        });
        expect(parse({
            mkMaxWidth: 'xlarge',
        })).toEqual({
            maxWidth: theme.box.size.xlarge+'px'
        });
    })
    it('parse padding margin single', () => {
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
    it('parse padding margin  x y', () => {
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

});

