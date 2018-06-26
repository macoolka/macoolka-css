import * as t from '../type';
import { of, ofVariable, ofICss,ofAbbr } from '../';
export type CssPropertyType = {
    color?: string;
    backgroundColor?: string;
    marginLeft?: number | string;
    paddingLeft?: number | string;
    width?: number | string;
    transform?: string;
};
export type CssSelector = 'focus' | 'hover';

export const css = ofICss<CssSelector, CssPropertyType>({
    cssProperty: [{
        cssName: 'color',
        propertyName: 'color',
    }, {
        cssName: 'background-color',
        propertyName: 'backgroundColor',
    }, {
        cssName: 'margin-left',
        propertyName: 'marginLeft',
        unitName: 'px',
    }, {
        cssName: 'padding-left',
        propertyName: 'paddingLeft',
        unitName: 'px',
    }, {
        cssName: 'width',
        propertyName: 'width',
        unitName: 'px',
    }, {
        cssName: 'transform',
        propertyName: 'transform',
    }],
    cssSelector: ['focus', 'hover'],
});

type VariableProp = {
    color?: string | NodeValue,
    backgroundColor?: string | NodeValue,
};
type Variable = {
    test: {
        variable: {
            black: string,
            white: string,
        }
    }
};
type Black = {
    'kind': 'black',
};
type White = {
    'kind': 'white',
};
type NodeValue = Black | White;
const getVariableValue = (a: NodeValue) => (v1: Variable) => {
    if (a.kind === 'black') {
        return v1.test.variable.black;
    }
    return v1.test.variable.white;
};
const variable = ofVariable<NodeValue, Variable>({
    variable: {
        test: {
            variable: {
                black: '#000',
                white: '#fff',
            },
        },
    },
    isNodeValue: (a: any): a is NodeValue => !!(a && a.kind && ['black', 'white'].includes(a.kind)),
    getVariableValue,
});
type C1 = t.AbbrProp<'MH', CssPropertyType, 'marginLeft'>;
type C2 = t.AbbrProp<'C', CssPropertyType, 'color'>;
type AbbrProps = C1 & C2;
type Mixed = {
    variable?: {
        test?: {
            variable?: {
                black?: string,
                white?: string,
            }
        }
    },
}
const abbrs = ofAbbr<CssPropertyType, AbbrProps>({ MH: ['marginLeft'], C: ['color'] });
const M = of<VariableProp, AbbrProps, {}, {}, {}, Mixed>()({
    variable,
    abbrs,
    css,
});
export type IconSvgProp = {
    size: 'inherit' | 'small' | 'medium' | 'large',
};
export type IconSvgPropF = {
    rotate: number,
};
const M1 = M.addProps<IconSvgProp, IconSvgPropF>(
    {
        size: {
            inherit: {
                mkstyle: { width: 20 },
                // iconSize: 'inherit',
            },
            small: {
                mkstyle: {
                    width: 30,
                },
                // backgroundSizeT: 'small',
            },
            medium: {
                mkstyle: {
                    width: 40,
                },
                // backgroundSizeTheme: 'medium',
            },
            large: {
                mkstyle: {
                    width: 50,
                },

            },
        },
    }, {
        rotate: (a: number) => ({
            mkstyle: { transform: `rotate(${a}deg)` },
        }),
    }
);
describe('Css module', () => {
    it('toRCss', () => {
        expect(M1.toRCss({
            size: 'medium', rotate: 70, selector: [{
                name: ':hover',
                value: {
                    rotate: 20,
                    size: 'small',
                    mkstyle: {
                        marginLeft: 1,
                    },
                },
            }],
        })).toEqual({
            width: 40, transform: 'rotate(70deg)', selector: [{
                name: ':hover',
                value: {
                    marginLeft: 1,
                    width: 30,
                    transform: 'rotate(20deg)',
                },
            }],
        });
    });
    it('css property with string', () => {
        expect(M1.toTCss({
            size: 'medium', rotate: 70, selector: [{
                name: ':hover',
                value: {
                    rotate: 20,
                    size: 'small',
                    mkstyle: {
                        marginLeft: 1,
                    },
                },
            }],
        })).toEqual(
`width: 40px;
transform: rotate(70deg);
:hover {
  transform: rotate(20deg);
  width: 30px;
  margin-left: 1px;
}`
        );
    });
});