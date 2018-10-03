import { parse as basicParse,theme as basicTheme } from '../../basic';
import {theme,rule} from './index'
const parse = basicParse(rule)({...theme,...basicTheme});
describe('box', () => {

    it('parse height',()=>{
        expect(parse({
            mkWidth: 'content',
        })).toEqual({
            width: '1160px'
        });
        expect(parse({
            mkHeight: 'full',
        })).toEqual({
            minHeight: '100vh',
            maxHeight: '100vh',
        });
        expect(parse({
            mkSquare: 'medium',
        })).toEqual({
            width: '24px',
            height: '24px',
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

});

