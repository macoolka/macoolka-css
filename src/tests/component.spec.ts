
import { standRuleModule, typeThemeLens, StandRule, ExtendRule, RuleModule, GetRuleProp,
      parse as _parse,parseProp as _parseProp } from '..';
const theme:any=standRuleModule.theme;
const darkTheme:any = typeThemeLens.set('dark')(theme);
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
/**
 * The output props. including predefine property and orginal property
 */
export type Props = GetRuleProp<Rule>

const rule: Rule = {
    /**
     * default style
     */
    style: {
        mkFontSize: 'h3',
        position: 'static',
        selector: {
            ':focus': {
                width: 30,
            },
        },
    },
    /**
     * descirbe stand property.
     * the type is
     * propertyName :({value,name,theme,source})=>cssnode
     * value is current value.
     * name is propertyname
     * theme is gloabe theme
     * source is component props
     */
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
            medium: () => ({
                mkFontSize: 'h2',
                mkMedia: [{ mkPadding: 'small' }, { mkPadding: 'medium' }],
                selector: {
                    ':focus': {
                        width: 10,
                    },
                },
            }),
            small: () => ({
                mkFontSize: 'h1',
                mkHoverTextColor: 'accent',
                selector: {
                    ':focus': {
                        width: 10,
                    },
                },
            }),


        },
    },
};
export type Rule = ExtendRule<StandRule, SProp, EProp>
export const _ruleModule: RuleModule<Rule> = {
    rule,
    theme,
    next:standRuleModule
}
export const parse = _parse(_ruleModule);
export const parseDark = _parse({ ..._ruleModule, theme: darkTheme });
describe('should parse theme', () => {
    it('should parse light theme', () => {
        expect(parse({
            mkColor: 'main',
        })).toMatchSnapshot()
    });
    it('should parse dark theme', () => {
        expect(parseDark({
            mkColor: 'main',
          
        })).toMatchSnapshot()
    });
    it('should parse dark with prop theme', () => {
        expect(parseDark({
            mkColor: 'main',
            theme: {
                color: {
                    type: 'dark'
                }
            } as any
        })).toMatchSnapshot()
    });
});
describe('should parse component rule', () => {
    it('1 should parse empty props', () => {
        expect(parse({
        })).toMatchSnapshot()
    });
    it('2 should parse common props', () => {
        expect(parse({
            height: 180,
        })).toMatchSnapshot()
    });
    it('3 should parse common props for place rule props', () => {
        expect(parse({
            fontSize: 30,
        })).toMatchSnapshot()
    });
    it('4 should parse component props for palce default style ', () => {
        expect(parse({
            size: 'small',
        })).toMatchSnapshot()
    });
    it('5 should parse common props and component props using the order base prop>module prop > advance prop>component prop >component default style', () => {
        expect(parse({
            fontSize: 7,
            mkFontSize: 'p',
            mkTypography: 'h1',
            size: 'small',
        })).toMatchSnapshot()
        expect(parse({
            mkFontSize: 'p',
            mkTypography: 'h1',
            size: 'small',
        })).toMatchSnapshot()
        expect(parse({
            mkFontSize: 'overline',
            size: 'small',
        })).toMatchSnapshot()
        expect(parse({
            size: 'small',
        })).toMatchSnapshot()
        expect(parse({
        })).toMatchSnapshot()
    });
    it('6 should parse media props', () => {
        expect(parse({
            mkMedia: [{ mkPadding: 'small' }, { mkPadding: 'medium' }],
        })).toMatchSnapshot();
    });
    it('7 should parse media props in rule', () => {
        expect(parse({
            size: 'medium',
        })).toMatchSnapshot();
    });
    it('8 should parse advance props', () => {
        expect(parse({
            mkAbsolute: 'bottom',
        })).toMatchSnapshot();
    });
});


describe('should compose rule', () => {
    type Rule1 = ExtendRule<StandRule, {}, { a?: 'a' | 'b' }>
    type Rule2 = ExtendRule<Rule1, {}, { b?: 'a' | 'b' }>

   // type Rule = ExtendRule<StandRule, {}, { a?: 'a' | 'b' } & { b?: 'a' | 'b' }>
    const input1: RuleModule<Rule1> = {
        rule: {
            ruleEnum: {
                a: {
                    a: {
                        color: 'red'
                    },
                    b: {
                        color: 'green',
                    }
                }
            }
        },
        theme: theme,
        next:standRuleModule
    }
    const input2: RuleModule<Rule2> = {
        rule: {
            ruleEnum: {
                b: {
                    a: {
                        backgroundColor: 'yellow'
                    },
                    b: {
                        backgroundColor: 'pink',
                    }
                }
            }
        },
        theme: theme,
        next:input1
    }
    const parseProp = _parseProp(input2);

    it('simple rule', () => {
        expect(parseProp({
            a: 'a', b: 'a'
        })).toEqual({
            color: 'red',
            backgroundColor: 'yellow',
        })
    });

}); 