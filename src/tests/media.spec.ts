

import {
    ExtendRule, RuleModule,
    parse as _parse, parseProp as _parseProp, Rule as ParentRule, ruleModule as ParentRuleModule, extendRule
} from '..';
/**
 * Enum Properties's value using string or number,
 * The tag 'ruleEnum' in rule describe the property style
 */
export type EProp = {
    size?: 'small' | 'medium'
};
/**
 * Stand Properties's value using any type,
 * The tag 'rule' in rule describe the property style
 */
export type SProp = {
    disabled?: boolean
};
export type Rule = ExtendRule<ParentRule, SProp, EProp>
export const rule: Rule = {
    rule: {
        disabled: ({ value }) => ({
            opacity: value ? 0.38 : 1,
        }),
    },
    /**
     * descirbe enum property.
     * the type is
     * propertyName :{propertyvalue:({value,name,theme,source})=>cssnode}
     */
    ruleEnum: {
        size: {
            small: () => ({
                mkFontSize: 'h1',
                mkHoverTextColor: 'accent',
                selector: {
                    ':focus': {
                        width: 10,
                    },
                },

            }),
            medium: () => ({
                mkFontSize: 'h2',
                selector: {
                    ':focus': {
                        width: 10,
                    },
                },
            }),

        },
    },
};
export const input: RuleModule<Rule> = {
    rule,
    theme: ParentRuleModule.theme,
    next: ParentRuleModule
}
export const mediaInput = extendRule(input)
export const parse = _parse(mediaInput);
describe('should parse component rule', () => {
    it('1 should parse empty props', () => {
        expect(parse({
            mkMedia: [{ size: 'small' }]
        })).toMatchSnapshot()
    });
    it('2 should parse common props', () => {
        expect(parse({
            mkMedia: [{ size: 'medium' }, { size: 'small' }, { size: 'small', disabled: false }]
        })).toMatchSnapshot()
    });

});