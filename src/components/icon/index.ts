
import { Rule } from '../../base/rule';
/**
 * convert number type to px or precent
 * @getter
 */
import { Props } from '../../modules';
export type EProp = {
    size: 'small' | 'medium' | 'large' | 'xlarge'
};
export type SProp = {
    disabled: boolean
};

export type Props = EProp & SProp;

export const rule: Rule<SProp, EProp, Props> = {
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
