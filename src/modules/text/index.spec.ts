import { parse as basicParse,theme as basicTheme } from '../../basic';
import rule,{theme} from './index'
const parse = basicParse(rule)({...theme,...basicTheme});

describe('text', () => {
    it('parse text', () => {
        expect(parse({
            mkTypography: 'h2',
        })).toEqual({
            fontWeight: 300,
            letterSpacing: '-.00833em',
            lineHeight: '3.75rem',
            fontSize: '60px',
            textDecoration: 'inherit',
            textTransform: 'inherit',
        });
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

