
import { isDark } from './utils';
import defaultTheme from './value';
import ColorTheme, {
    ColorsTemplate, ColorLevel, ColorOpacity, TBaseColors
} from './type';
import {
    getPaletteColor, getPaletteMonoColor, getCommonPaletteItem
} from './palette/selector';
import { isString } from 'mocoolka-fp/lib/predicate';
import { alpha } from './utils';

import {
    MonoPaletteItem, CommonPaletteItem,
    ColorPalette
} from './palette/type';

const getColorTheme = (theme: ColorTheme = defaultTheme): TBaseColors =>
 theme.color.type === 'dark' ? theme.color.dark : theme.color.light;
export {
    getPaletteColor, getPaletteMonoColor, getCommonPaletteItem
};
export const getColor = ({ name, level }: {
    name: keyof ColorsTemplate;
    level?: ColorLevel;
}) => (theme: ColorTheme = defaultTheme): string => getPaletteColor({
    name: getColorTheme(theme).colors[name],
    level: getColorTheme(theme).colorLevel[level ? level : 'normal'],
})(theme);
export const getPColorPaletteType = ({ name, level }: {
    name: keyof ColorPalette;
    level?: ColorLevel;
}) => (theme: ColorTheme = defaultTheme): string => getPaletteColor({
    name,
    level: getColorTheme(theme).colorLevel[level ? level : 'normal'],
})(theme);
export const getColorAccent = (a: ColorLevel = 'normal') =>
 (theme: ColorTheme = defaultTheme): string => getPaletteColor({
    name: getColorTheme(theme).accent,
    level: getColorTheme(theme).accentLevel[a],
})(theme);

export const getColorMono = (a: keyof MonoPaletteItem = 500) =>
 (theme: ColorTheme = defaultTheme): string => getPaletteMonoColor({
    name: getColorTheme(theme).mono,
    level: a ? a : 500,
})(theme);

export const getColorCommon = ({ name, level }: {
    name: keyof CommonPaletteItem;
    level?: keyof ColorOpacity;
}) => (theme: ColorTheme = defaultTheme): string => {
    const result = getCommonPaletteItem(name)(theme);

    const levelValue = level ? level : 'full';
    if (name === 'transparent' || level === 'full') {
        return result;
    }
    const opacity = getColorTheme(theme).opacity[levelValue];
    return isString(result) ? alpha(opacity)(result) : result;
};

export const getColorText = (a: keyof TBaseColors['text']) => (theme: ColorTheme = defaultTheme): string => {
    const result = getCommonPaletteItem(theme.color.type === 'dark' ? 'light' : 'dark')(theme);
    const opacity = getColorTheme(theme).text[a];
    if (opacity === 1) {
        return result;
    }
    return isString(result) ? alpha(opacity)(result) : result;
};

export const getColorBg = (a: keyof TBaseColors['background']) => (theme: ColorTheme = defaultTheme): string => {
    const colorTheme = getColorTheme(theme);
    const value = colorTheme.background[a];

    if (value === 0) {
        return getCommonPaletteItem(theme.color.type)(theme);
    }
    return getColorMono(value)(theme);
};
export const getLightOrDarkColor = (a: string) => (theme: ColorTheme = defaultTheme): string => {
    const result = isDark(a) ? getColorCommon({ name: 'light', level: 'full' })(theme) :
        getColorCommon({ name: 'dark', level: 'largeXXX' })(theme);
    return result;
};
