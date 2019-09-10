import {  ruleModule } from '../index'
import { parseProp } from '../../../CssRule';
const parse = parseProp(ruleModule);

describe('text', () => {
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
        expect(parse({
            mkTextNoWrap: true,
        })).toEqual({
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        });

        expect(parse({
            mkTextNoWrap: false,
        })).toEqual({
          
        });

        expect(parse({
            mkTextAlign: 'center',
        })).toEqual({
            textAlign: 'center',
        });
        expect(parse({
            mkTextTransform: 'capitalize',
        })).toEqual({
            textTransform: 'capitalize',
        });
        expect(parse({
            mkTextDirection: 'ltr',
        })).toEqual({
            direction: 'ltr',
        });
        expect(parse({
            mkTextDecoration: 'overline',
        })).toEqual({
            textDecoration: 'overline',
        });
        expect(parse({
            mkTextUnderlined: true,
        })).toEqual({
            borderBottomStyle: 'dotted',
            borderBottomWidth: '1px',
            borderBottomColor: '#e0e0e0',
        });
        expect(parse({
            mkTextUnderlined: false,
        })).toEqual({
        });
        expect(parse({
            mkTextItalic: true,
        })).toEqual({
            fontStyle: 'italic',
        });
        expect(parse({
            mkTextStrong: true,
        })).toEqual({
            fontWeight:700,
        });     
        expect(parse({
            mkParagraph: true,
        })).toEqual({
            marginBottom:'1em',
        });    
    })

});

