
import { Rule,OutputProps,parseRuleJSS,theme } from '../src';
/**
 * convert number type to px or precent
 * @getter
 */
export type EProp = {
    size: 'small' | 'medium' | 'large' | 'xlarge'
};
export type SProp = {
    disabled: boolean
};

export type Props = OutputProps<EProp & SProp>;

export const rule: Rule<SProp, EProp> = {
    style: {
        mkMargin: 16,
        color:'red',
        selector: {
            '&:focus': {
                mkMargin: 12,
            },
        },
    },
    rule: {
        disabled: (a: boolean) => ({
            mkMargin: 16,
        }),
    },
    ruleEnum: {
        size: {
            small: {
                mkMargin: 2,
                mkTextColor:'main',
            },
            medium: {
                mkMargin: 4,
            },
            large: {
                mkMargin: 6,
            },
            xlarge: {
                mkMargin: 8,
            },
        },
    },
};

const parse = parseRuleJSS(rule)(theme);

describe('icon', () => {
    it('parse icon', () => {
        expect(parse({
            size: 'small',
        })).toEqual({color: "#009688",margin:'2px', "selector": {"&:focus": {"margin": "12px"}}});
        expect(parse({
            color:'#fff',
            size: 'small',
        })).toEqual({color: "#fff",margin:'2px', "selector": {"&:focus": {"margin": "12px"}}});
        expect(parse({
        })).toEqual({color:'red',margin:'16px', "selector": {"&:focus": {"margin": "12px"}}});
        expect(parse({
            size: 'small',
            mkMargin:8
        })).toEqual({color: "#009688",margin:'8px', "selector": {"&:focus": {"margin": "12px"}}});
        expect(parse({
            mkMargin:8
        })).toEqual({color:'red',margin:'8px', "selector": {"&:focus": {"margin": "12px"}}});       
    })

});