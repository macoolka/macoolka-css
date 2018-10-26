
import { OutRule,OutProps,parseRuleJss,theme } from '../src';
/**
 * convert number type to px or precent
 * @getter
 */
export type EProp = {
    size?: 'small' | 'medium' | 'large' | 'xlarge',
    disabled?: boolean
};
export type SProp = {
    disabled?: boolean
};

export type Props = OutProps<EProp & SProp>;

export const rule: OutRule<SProp, EProp> = {
    style: {
        mkMargin: 'small',
        color:'red',
        selector: {
            '&:focus': {
                mkMargin: 'small',
            },
        },
    },
    rule: {
        disabled:{
            mkMargin: 'small',
        },
    },
    ruleEnum: {
        size: {
            small: {
                mkMargin: 'small',
                mkTextColor:'main',
            },
            medium: {
                mkMargin: 'small',
            },
            large: {
                mkMargin: 'small',
            },
            xlarge: {
                mkMargin: 'small',
            },
        },

    },
};

const parse = parseRuleJss(rule,theme);

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
            mkMargin:'small'
        })).toEqual({color: "#009688",margin:'8px', "selector": {"&:focus": {"margin": "12px"}}});
        expect(parse({
            mkMargin:'small'
        })).toEqual({color:'red',margin:'8px', "selector": {"&:focus": {"margin": "12px"}}});       
    })

});