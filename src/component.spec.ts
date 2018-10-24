
import { OutRule,OutProps, parseRule,theme,typeThemeLens } from '.';
const darkTheme=typeThemeLens.set('dark')(theme);
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
export type Props = OutProps<EProp & SProp>;

export const rule: OutRule<SProp, EProp> = {
    /**
     * default style
     */
    style: {
        mkFontSize:'h3',
        selector: {
            ':focus': {
               width:30,
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
        disabled: ({value})=> ({
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
            medium:()=>({
                mkFontSize:'h2',
                mkMedia:[{mkPadding:'small'},{mkPadding:'medium'}],
                selector: {
                    ':focus': {
                       width:10,
                    },
                },
            }),
            small: ()=>({
                mkFontSize:'h1',
                mkHoverTextColor:'accent',
                selector: {
                    ':focus': {
                       width:10,
                    },
                },
            }),


        },
    },
};
export const parse = parseRule(rule,theme);
export const parseDark = parseRule(rule,darkTheme);
describe('should parse theme', () => {
    it('should parse light theme', () => {
        expect(parse({
            mkColor:'main',
        })).toMatchSnapshot()
    });
    it('should parse dark theme', () => {
        expect(parseDark({
            mkColor:'main',
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
            height:180,
        })).toMatchSnapshot()
    });
    it('3 should parse common props for place rule props', () => {
        expect(parse({
            fontSize:30,
        })).toMatchSnapshot()
    });
    it('4 should parse component props for palce default style ', () => {
        expect(parse({
            size:'small',
        })).toMatchSnapshot()
    }); 
    it('5 should parse common props and component props using the order base prop>module prop > mix prop>component prop >component default style', () => {
        expect(parse({
            fontSize:7,
            mkFontSize:'p',
            mkTypography:'h1',
            size:'small',
        })).toMatchSnapshot()
        expect(parse({
            mkFontSize:'p',
            mkTypography:'h1',
            size:'small',
        })).toMatchSnapshot() 
        expect(parse({
            mkFontSize:'overline',
            size:'small',
        })).toMatchSnapshot()
         expect(parse({
            size:'small',
        })).toMatchSnapshot()
        expect(parse({
        })).toMatchSnapshot() 
    });
    it('6 should parse media props', () => {
        expect(parse({
            mkMedia:[{mkPadding:'small'},{mkPadding:'medium'}],
        })).toMatchSnapshot();
    }); 
    it('7 should parse media props in rule', () => {
        expect(parse({
            size:'medium',
        })).toMatchSnapshot();
    });    
});