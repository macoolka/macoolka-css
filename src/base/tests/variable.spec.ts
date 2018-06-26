import {of} from '../Css';
import {of as ofICss} from '../ICss';
import {of as ofVariable,compose as composeVariable} from '../VProp';
export type CssPropertyType = {
    color?: string;
    backgroundColor?: string;
    marginLeft?: number | string;
    paddingLeft?: number | string;
};
export type CssSelector = 'focus' | 'hover';

export const baseCssValue = ofICss<CssSelector, CssPropertyType>({
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
    }],
    cssSelector: ['focus', 'hover'],
});

type PV = {
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
const vt = ofVariable<NodeValue, Variable>({
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
type PV1 = {
    marginLeft?: number | string | NodeValue1
};
type Variable1 = {
    test1: {
        variable: {
            width: number,
            height: number,
        }
    }
};
type Width = {
    'kind': 'width',
};
type Height = {
    'kind': 'height',
};
type NodeValue1 = Width | Height;
const getVariableValue1 = (a: NodeValue1) => (v1: Variable1) => {
    if (a.kind === 'width') {
        return v1.test1.variable.width;
    }
    return v1.test1.variable.height;
};
const vt1 = ofVariable<NodeValue1, Variable1>({
    variable: {
        test1: {
            variable: {
                width: 20,
                height: 30,
            },
        },
    },
    isNodeValue: (a: any): a is NodeValue1 => a && a.kind && ['width', 'height'].includes(a.kind),
    getVariableValue: getVariableValue1,
});
const mergeVariable = of<PV1 & PV>()<CssSelector, CssPropertyType, NodeValue | NodeValue1, Variable1 & Variable>(
    { css: baseCssValue, variable: composeVariable(vt, vt1) });
const baseVariable = of<PV>()({ css: baseCssValue, variable: vt });
describe('VProp', () => {

    it('get css property with replace props', () => {
        expect(baseVariable.toRCss({})).toEqual({});
        expect(baseVariable.toRCss({ mkstyle: { backgroundColor: { kind: 'black' } } })).
        toEqual({ backgroundColor: '#000' });
        expect(baseVariable.toRCss({ mkstyle: {color: { kind: 'black' }, marginLeft: 2 }})).
            toEqual({ color: '#000', marginLeft: 2 });
        expect(baseVariable.toRCss({ focus: { mkstyle: {paddingLeft: 1 }} }))
            .toEqual({ focus: { paddingLeft: 1 } });

    });
});
describe('mix variable css with property and selector and replaceProp', () => {

    it('get css property with replace props', () => {
        expect(mergeVariable.toRCss({ hover: { mkstyle: {marginLeft: 2} } })).toEqual({ hover: { marginLeft: 2 } });
        expect(mergeVariable.toRCss({ mkstyle: {color: { kind: 'black' }, marginLeft: { kind: 'width' } }})).toEqual({
            color: '#000', marginLeft: 20,
        });
        expect(mergeVariable.toRCss({
            hover: { marginLeft: { kind: 'width' } },
        }))
            .toEqual({ hover: { marginLeft: 20 } });
    });
});
