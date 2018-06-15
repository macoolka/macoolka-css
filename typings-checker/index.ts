import Palette from '../src/Palette';
import * as t from 'mocoolka-fp/lib/Type';
import * as m from '../src/M';
import { TCssSelector, TCssProperty, TCss } from '../src/Css';
import { MCssT } from '../src/M/type';

const cssProperty: m.TInputCss[] = [{
    cssName: 'color',
}, {
    cssName: 'margin-left',
    unitName: 'px',
}];
const cssSelector = ['focus', 'hover'];
type CssPropertyType = {
    color?: string;
    backgroundColor?: string;
    marginLeft?: number | string;
};
type CssSelector = 'focus' | 'hover';
type CssReplace = 'marginH' | 'marginV';
const isNode = (a1: any): a1 is CssReplace => ['marginH', 'marginV'].indexOf(a1) >= 0;
type Css = m.MTemplate<CssSelector, CssPropertyType>['css'];
const cssE: Css = {
};
const css: Css = {
    hover: {
        color: '#fff',
    },
};
const css1: Css = {
    hover1: {
        color: '#fff',
    },
};
type CssR = m.MOutTemplate<CssSelector, CssPropertyType, CssReplace>['props'];

const cssrE: CssR = {

};
const cssr: CssR = {
    hover: {
        color: '',
        marginV: 8,
        marginH: '8em',
    },
    marginH: 0,
};
type RI = m.MOutTemplate<CssSelector, CssPropertyType, CssReplace>['replaceInputProps'];
const riE: RI = {};
const ri: RI = { marginH: ['marginLeft'] };
const a = (n: string) => {
    if (isNode(n)) {
        return ri[n];
    }
};

// const outerT = m.getOutTheme<CssSelector, cssPropertyType>({ cssProperty, cssSelector });

type PaletteTheme = t.TypeOf<typeof Palette.themeType>;
type TCssA = MCssT<'focus' | 'hover', { color?: string, margin?: number }>;
type TProperty1 = TCssA['property'];
type TCss1 = TCssA['css'];
type TSelector1 = TCssA['selector'];

const pp: TProperty1 = {
    color: '#fff',
    margin: 0,
};
const pp0: TProperty1 = {
};
const pp1: TProperty1 = {
    color: '#fff',
    margin: '0',
};
const pp2: TProperty1 = {
    color1: '#fff',
};

const ss: TSelector1 = {

};
const ss0: TSelector1 = {
    focus: {
        color: '#fff',
        hover: {
            color: '#fff',
        },
    },
};
const ss1: TSelector1 = {
    focus: {
        color: '#fff',
        hover: {
            color: '#fff',
        },
    },
    color: '1',
};
const ss1: TSelector1 = {
    focus1: {

    },
};
const cs: TCss1 = {
    focus: {
        color: '#fff',
        hover: {
            color: '#fff',
        },
    },
    color: '1',
};
const cs0: TCss1 = {

};
const cs1: TCss1 = {
    color1: '1',
};
const p1: TCssProperty = {
    color: 'red',
    background: 'blue',
};
const p2: TCssProperty = {
    color: 'red',
    background: 'blue',
    f: 1,
};
const p3: TCssProperty = {
    color: 'red',
    background: {},
};
const s1: TCssSelector = {
    focus: {
        color: 'red',
        background: 'blue',
    },
    hover: {
        hover: {
            hover: {
                color: 'red',
                t: {
                    background: '8',
                },
            },
        },
    },
};
const s2: TCssSelector = {
    focus: '1',

};
const s3: TCssSelector = {
    focus1: { color: 'blue' },

};
const c1: TCss = {
    color: 'red',
    background: 'blue',
    focus: {
        color: 'red',
    },
    hover: {
        hover: {
            color: 'red',
        },
    },

};
const c2: TCss = {
    color: 'red',
    t: 'red',
    background: 'blue',
    focus: {
        color: 'red',
    },
    hover: {
        hover: {
            color: 'red',
        },
    },

};
