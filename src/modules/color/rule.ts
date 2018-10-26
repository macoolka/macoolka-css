
import { OutRule, UnitProps ,OutTheme} from '../../basic';
import { selector, Theme } from './theme';
import { Level } from './theme/type';
import R from 'mocoolka-fp/lib/Record';
/**
# Color Property

The define text color,background color and border color.

The color value be define in theme.

Jss color={value} | backgroundColor={value} | borderColor={value}

mkColor define text color and background color.

 * @mk
 * @memberof common
 * @name color
 * @title Color Property
 */

 /**
# 颜色属性

定义文本、背景、边框的的颜色

颜色具体值定义在方案中。

等价于 color={value} | backgroundColor={value} | borderColor={value}

mkColor 同时定义本文颜色和背景颜色。其中文本颜色会自动根据当前背景颜色亮度赋值

@language cn
@title 颜色属性
  */
export interface Props extends EProps,SProps{
    
}
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
export type MainColor= 'accent'|'main';
export type MonoColor= 'primary' | 'secondary'|'hint';
export type StateColor= 'disabled';
export type EmColor= 'success' | 'warning' | 'alert';
// export type Color= PaletteColor|MainColor;
export type TextColor= MainColor|StateColor|MonoColor|EmColor | 'inherit'|'currentColor';
export type BorderColor= MainColor|StateColor| 'mini' | 'small' | 'medium' | 'large'|EmColor| 'inherit'|'currentColor';
export type Color= 'body' | 'surface' | 'divider' | 'mini' | 'small' | 'medium' | 'large'
| 'transparent' | 'inherit' | MainColor | EmColor|'currentColor';
export interface EProps {
    /**
     * text color
     */
    /**
     * 文本颜色
     * @language cn
     */
    mkTextColor?: TextColor;
    /**
     * text light color
     */
    /**
     * 文本颜色(更亮)
     * @language cn
     */
    mkTextColorLight?: TextColor;
    /**
     * text dark color
     */
    /**
     * 文本颜色(更暗)
     * @language cn
     */
    mkTextColorDark?: TextColor;
    /**
     * text palette color
     */
    /**
     * 调色板颜色
     * @language cn
     */
    mkTextColors?: PaletteColor;
    /**
     * text palette light color
     */
    /**
     * 调色板文本颜色(更亮)
     * @language cn
     */
    mkTextColorsLight?: PaletteColor;
    /**
     * text palette dark color
     */
    /**
     * 调色板文本颜色(更暗)
     * @language cn
     */
    mkTextColorsDark?: PaletteColor;
    /**
     * border color
     */
    /**
     * 边框颜色
     * @language cn
     */
    mkBorderColor?: BorderColor;
    /**
     * border light color
     */
    /**
     * 边框颜色(更亮)
     * @language cn
     */
    mkBorderColorLight?: BorderColor;
    /**
     * border dark color
     */
    /**
     * 边框颜色(更暗)
     * @language cn
     */
    mkBorderColorDark?: BorderColor;
    /**
     * border palette color
     */
    /**
     * 调色板边框颜色
     * @language cn
     */
    mkBorderColors?: PaletteColor;
    /**
     * border palette light color
     */
    /**
     * 调色板边框颜色(更亮)
     * @language cn
     */
    mkBorderColorsLight?: PaletteColor;
    /**
     * border palette dark color
     */
    /**
     * 调色板边框颜色(更暗)
     * @language cn
     */
    mkBorderColorsDark?: PaletteColor;
    /**
     * background  color
     */
    /**
     * 背景颜色
     * @language cn
     */
    mkColor?: Color,
    /**
     * background  light color
     */
    /**
     * 背景颜色(更亮)
     * @language cn
     */
    mkColorLight?: Color,
    /**
     * background  dark color
     */
    /**
     * 背景颜色(更暗)
     * @language cn
     */
    mkColorDark?: Color,
    /**
     * background palette color
     */
    /**
     * 调色板背景颜色
     * @language cn
     */
    mkColors?: PaletteColor,
    /**
     * background palette light color
     */
    /**
     * 调色板背景颜色(更亮)
     * @language cn
     */
    mkColorsLight?: PaletteColor,
    /**
     * background palette dark color
     */
    /**
     * 调色板背景颜色(更暗)
     * @language cn
     */
    mkColorsDark?: PaletteColor,
};
export interface SProps {
};

const paletteColor = (level: Level) => (propName: string) => (colorName: PaletteColor) => (t: Theme) => {
    const result = selector.getPColorPaletteType(level)(colorName)(t);
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
const paletteList = (level: Level= 'normal') => (propName: string) => foldAll(palette.map(a =>
    ({[a]:  ({theme}: {theme: Theme}) => paletteColor(level)(propName)(a)(theme)})));
const bgColor = (a: ((t: Theme) => string)) => ({theme}: {theme: Theme}) => {
    const value =  a(theme);
    return ({
        backgroundColor: value,
        color: selector.getLightOrDarkColor(value)(theme),
    });
};
const mapColorText = (level: Level= 'normal'): {[k in  TextColor]: ({theme}: {theme: Theme}) => UnitProps} => ({
    main: ({theme}) => ({
        color: selector.getColor(level)('main')(theme),
    }),
    success: ({theme}) => ({
        color: selector.getColor(level)('success')(theme),
    }),
    warning: ({theme}) => ({
        color: selector.getColor(level)('warning')(theme),
    }),
    alert: ({theme}) => ({
        color: selector.getColor(level)('alert')(theme),
    }),
    accent: ({theme}) => ({
        color: selector.getColorAccent(level)(theme),
    }),
    disabled: ({theme}) => ({
        color: selector.getColorText(level)('disabled')(theme),
    }),
    hint: ({theme}) => ({
        color: selector.getColorText(level)('divider')(theme),
    }),
    primary: ({theme}) => ({
        color: selector.getColorText(level)('primary')(theme),
    }),
    secondary: ({theme}) => ({
        color: selector.getColorText(level)('secondary')(theme),
    }),
    inherit: _ => ({
        color: 'inherit',
    }),
    currentColor: _ => ({
        color: 'currentColor',
    }),
});
const mapBorderColor = (level: Level= 'normal'): {[k in  BorderColor]: ({theme}: {theme: Theme}) => UnitProps} => ({
    main: ({theme}) => ({
        borderColor: selector.getColor(level)('main')(theme),

    }),
    success: ({theme}) => ({
        borderColor: selector.getColor(level)('success')(theme),
    }),
    warning: ({theme}) => ({
        borderColor: selector.getColor(level)('warning')(theme),
    }),
    alert: ({theme}) => ({
        borderColor: selector.getColor(level)('alert')(theme),
    }),
    accent: ({theme}) => ({
        borderColor: selector.getColorAccent(level)(theme),
    }),
    disabled: ({theme}) => ({
        borderColor: selector.getColorText(level)('disabled')(theme),
    }),
    mini: ({theme}) => ({
        borderColor: selector.getColorBg(level)('mini')(theme),
    }),
    small: ({theme}) => ({
        borderColor: selector.getColorBg(level)('small')(theme),
    }),
    medium: ({theme}) => ({
        borderColor: selector.getColorBg(level)('medium')(theme),
    }),
    large: ({theme}) => ({
        borderColor: selector.getColorBg(level)('large')(theme),
    }),
    inherit: _ => ({
        borderColor: 'inherit',
    }),
    currentColor: _ => ({
        borderColor: 'currentColor',
    }),
});
const mapColor = (level: Level= 'normal'): {[k in  Color]: ({theme: t}: {theme: Theme}) => UnitProps} => {
    const getter = selector.getColorBg(level);
    const getterText = selector.getColorText(level);
    const getterColor = selector.getColor(level);
    return ({
        surface: bgColor(getter('surface')),
        body: bgColor(getter('body')),
        divider: bgColor(getterText('divider')),
        main: bgColor(getterColor('main')),
        success: bgColor(getterColor('success')),
        warning: bgColor(getterColor('warning')),
        alert: bgColor(getterColor('alert')),
        accent: bgColor(selector.getColorAccent(level)),
        mini: bgColor(getter('mini')),
        small: bgColor(getter('small')),
        medium: bgColor(getter('medium')),
        large: bgColor(getter('large')),
        inherit: _ => ({
            backgroundColor: 'inherit',
        }),
        currentColor: _ => ({
            backgroundColor: 'currentColor',
        }),
        transparent: _ => ({
            backgroundColor: 'transparent',
        }),
    });
};

export const rule: OutRule<{}, EProps,  OutTheme<Theme>> = {
    ruleEnum: {
        mkTextColor: mapColorText(),
        mkTextColorLight: mapColorText('light'),
        mkTextColorDark: mapColorText('dark'),
        mkTextColors: {
            ...paletteList()('color'),
        },
        mkTextColorsLight: {
            ...paletteList('light')('color'),
        },
        mkTextColorsDark: {
            ...paletteList('dark')('color'),
        },
        mkBorderColor: mapBorderColor(),
        mkBorderColorLight: mapBorderColor('light'),
        mkBorderColorDark: mapBorderColor('dark'),
        mkBorderColors: {
            ...paletteList()('borderColor'),
        },
        mkBorderColorsLight: {
            ...paletteList('light')('borderColor'),
        },
        mkBorderColorsDark: {
            ...paletteList('dark')('borderColor'),
        },
        mkColor: mapColor(),
        mkColorLight: mapColor('light'),
        mkColorDark: mapColor('dark'),
        mkColors: {
            ...paletteList()('backgroundColor'),
        },
        mkColorsLight: {
            ...paletteList('light')('backgroundColor'),
        },
        mkColorsDark: {
            ...paletteList('dark')('backgroundColor'),
        },
    },
};
