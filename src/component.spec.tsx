
import { RuleC } from './base/ruleC';
/**
 * convert number type to px or precent
 * @getter
 */
import { Props } from './mix';
export type EProp = {
    size: 'small' | 'medium' | 'large' | 'xlarge'
};
export type SProp = {
    disabled: boolean
};

export type Props = EProp & SProp;

export const rule: RuleC<SProp, EProp, Props> = {
    style: {
        mkLayout: 'inlineRow',
        borderColor: 'currentColor',
        mkTransition:  'background-color, color, opacity',
        selector: {
            '& > svg': {
                fill: 'currentColor',
            },
        },
    },
    rule: {
        disabled: (a: boolean) => ({
            opacity: `${a ? 0.38 : 1}`,
        }),
    },
    ruleEnum: {
        size: {
            small: {
                mkSquare: 'small',
                borderWidth: 1,
                selector: {
                    '& > svg': {
                        mkSquare: 'small',
                    },
                },
            },
            medium: {
                mkSquare: 'medium',
                borderWidth: 1,
                mkMedia:[{mkWidth:'small'},{mkWidth:'medium'},{mkWidth:'large'},{mkWidth:'xlarge'}],
                selector: {
                    '& > svg': {
                        mkSquare: 'medium',
                    },
                },
            },
            large: {
                borderWidth: 2,
                mkSquare: 'large',
                selector: {
                    '& > svg': {
                        mkSquare: 'large',
                    },
                },
            },
            xlarge: {
                borderWidth: 2,
                mkSquare: 'xlarge',
                selector: {
                    '& > svg': {
                        mkSquare: 'xlarge',
                    },
                },
            },
        },
    },
};
import { parsePropRule as _parseRule, theme as basicTheme } from './mix';
const parse = _parseRule(rule)({...basicTheme });

describe('icon', () => {
    it('parse icon', () => {
        expect(parse({
            size: 'small',
        })).toMatchSnapshot();
        expect(parse({
            mkMedia:[{mkWidth:'small'},{mkWidth:'medium'},{mkWidth:'large'},{mkWidth:'xlarge'}],
            size: 'small',
        })).toMatchSnapshot();
         expect(parse({
            size: 'medium',
            disabled:true,
        })).toMatchSnapshot(); 
        
    })

});