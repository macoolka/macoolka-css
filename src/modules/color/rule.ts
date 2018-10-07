
import { Props as UnitProps } from '../../basic/unit';
import { Rule } from '../../base/rule';
import { selector, Theme } from './theme';
import R from 'mocoolka-fp/lib/Record';
export type PaletteColor = 'red' |
    'pink' |
    'purple' |
    'deepPurple' |
    'indigo' |
    'blue' |
    'lightBlue' |
    'cyan' |
    'teal' |
    'green' |
    'lightGreen' |
    'lime' |
    'yellow' |
    'amber' |
    'orange' |
    'deepOrange';
export type MainColor= 'accent'|'main'|'hint';
export type MonoColor= 'primary' | 'secondary';
export type StateColor= 'disabled';
export type EmColor= 'success' | 'warning' | 'alert';
export type Color= PaletteColor|MainColor;
export type Props = {
    /**
     * text color
     */
    mkTextColor: Color|StateColor|MonoColor|EmColor;
    /**
     * border color
     */
    mkBorderColor: Color|StateColor|MonoColor|EmColor;
    /**
     * background color
     */
    mkColor: 'body' | 'surface' | 'divider' | 'mini' | 'small' | 'medium' | 'large'
    | 'transparent' | 'inherit' | Color | EmColor,
};

const paletteColor = (propName: string) => (colorName: PaletteColor) => (t: Theme) => {
    const result = selector.getPColorPaletteType({ name: colorName, level: 'normal' })(t);
    if (propName === 'backgroundColor') {
        return {
            color: selector.getLightOrDarkColor(result)(t),
            [propName]: result,
        };
    } else {
        return { [propName]: result };
    }
};

const palette: PaletteColor[] = ['red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange'];

const foldAll = R();
const paletteList = (propName: string) => foldAll(palette.map(a => ({[a]: paletteColor(propName)(a)})));
const bgColor = (a: ((t: Theme) => string)) => (t: Theme) => {
    const value =  a(t);
    return ({
        backgroundColor: value,
        color: selector.getLightOrDarkColor(value)(t),
    });
};

export const rule: Rule<{}, Props, UnitProps, Theme> = {
    ruleEnum: {
        mkTextColor: {
            main: {
                color: selector.getColor({ name: 'primary', level: 'normal' }),
            },
            success: {
                color: selector.getColor({ name: 'success', level: 'normal' }),
            },
            warning: {
                color: selector.getColor({ name: 'warning', level: 'normal' }),
            },
            alert: {
                color: selector.getColor({ name: 'alert', level: 'normal' }),
            },
            accent: {
                color: selector.getColorAccent('normal'),
            },
            disabled: {
                color: selector.getColorText('disabled'),
            },
            hint: {
                color: selector.getColorText('divider'),
            },
            primary: {
                color: selector.getColorText('primary'),
            },
            secondary: {
                color: selector.getColorText('secondary'),
            },
            ...paletteList('color'),
        },
        mkBorderColor: {
            main: {
                borderColor: selector.getColor({ name: 'primary', level: 'normal' }),
            },
            success: {
                borderColor: selector.getColor({ name: 'success', level: 'normal' }),
            },
            warning: {
                borderColor: selector.getColor({ name: 'warning', level: 'normal' }),
            },
            alert: {
                borderColor: selector.getColor({ name: 'alert', level: 'normal' }),
            },
            accent: {
                borderColor: selector.getColorAccent('normal'),
            },
            disabled: {
                borderColor: selector.getColorText('disabled'),
            },
            hint: {
                borderColor: selector.getColorText('divider'),
            },
            primary: {
                borderColor: selector.getColorBg('medium'),
            },
            secondary: {
                borderColor: selector.getColorBg('large'),
            },
            ...paletteList('borderColor'),
        },
        mkColor: {

            surface: bgColor(selector.getColorBg('surface')),
            body: bgColor(selector.getColorBg('body')),
            divider: bgColor(selector.getColorText('divider')),
            main: bgColor(selector.getColor({ name: 'primary', level: 'normal' })),
            success: bgColor(selector.getColor({ name: 'success', level: 'normal' })),
            warning: bgColor(selector.getColor({ name: 'warning', level: 'normal' })),
            alert: bgColor(selector.getColor({ name: 'alert', level: 'normal' })),
            accent: bgColor(selector.getColorAccent('normal')),
            mini: bgColor(selector.getColorBg('mini')),
            small: bgColor(selector.getColorBg('small')),
            medium: bgColor(selector.getColorBg('medium')),
            large: bgColor(selector.getColorBg('large')),
            ...paletteList('backgroundColor'),
        },
    },
};
