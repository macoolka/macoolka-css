
import { Rule,OutputProps,parseRuleJSS,theme } from '.';

export type SProp = {
    disabled: boolean
};

export type Props = OutputProps<SProp>;

export const rule: Rule<SProp> = {
    style: {
        mkTypography: 'h1',
    },
    rule: {
        disabled: (a: boolean) => ({
            mkTypography: 'h5',
        }),
    },
};

const parse = parseRuleJSS(rule)(theme);

describe('check order', () => {
    it('parse prop', () => {
        expect(parse({
            disabled: true,
            mkFontWeight:'black'
        })).toEqual(
            { "fontFamily": "Roboto,Open Sans, Helvetica Neue, Helvetica,Arial, sans-serif",
                "fontSize": "24px", "fontWeight": 900, "letterSpacing": "0em", "lineHeight": "2rem", "textDecoration": "inherit", "textTransform": "inherit"});
  
    })
    it('parse null prop', () => {
        expect(parse({
            disabled: true,
        })).toEqual(
            { "fontFamily": "Roboto,Open Sans, Helvetica Neue, Helvetica,Arial, sans-serif",
                "fontSize": "24px", "fontWeight": 400, "letterSpacing": "0em",
             "lineHeight": "2rem", "textDecoration": "inherit", "textTransform": "inherit"});
  
    })
    it('parse empty', () => {
        expect(parse({
            mkFontWeight:'black'
        })).toEqual({
            "fontFamily": "Roboto,Open Sans, Helvetica Neue, Helvetica,Arial, sans-serif",
            "fontSize": "96px", "fontWeight": 900,
             "letterSpacing": "-.01562em", "lineHeight": "6rem", "textDecoration": "inherit", "textTransform": "inherit"});       
    })
});
//todo:temp change rule order.The later need add a new layer for typography