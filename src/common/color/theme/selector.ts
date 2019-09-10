
import { isDark } from './utils';
import ColorTheme, {
    ColorsTemplate, ColorOpacity, TBaseColors, Level,
    monoPalettes, colorOpacity
} from './type';
import {
    getPaletteColor, getPaletteMonoColor, getCommonPaletteItem
} from './palette/selector';
import { findStep } from '../../../array';

import { alpha } from './utils';
import { compareNumber, compareString } from 'macoolka-compare'
import {
    MonoPaletteItem, CommonPaletteItem,
    ColorPalette
} from './palette/type';
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
const getColorTheme = (theme: ColorTheme, inverted: boolean): TBaseColors =>
    theme.color[getType(theme, inverted)]

const getType = (theme: ColorTheme, inverted: boolean): 'light' | 'dark' => {
    if (inverted) {
        return theme.color.type === 'dark' ? 'light' : 'dark';
    } else {
        return theme.color.type === 'dark' ? 'dark' : 'light';
    }
}
const levels: { [key in Level]: number } = {
    light: -1,
    normal: 0,
    dark: 1
}
const getOpacityItem = (level: Level, value: keyof ColorOpacity): keyof ColorOpacity => pipe(
    colorOpacity,
    findStep(levels[level])(compareString.eq(value)),
    O.getOrElse(() => 'full')
) as keyof ColorOpacity

const getMonoItem = (level: Level, value: keyof MonoPaletteItem | 0): keyof MonoPaletteItem | 0 =>
    pipe(
        monoPalettes,
        findStep(levels[level])(compareNumber.eq(value)),
        O.getOrElse(() => 0)
    ) as keyof MonoPaletteItem | 0

export {
    getPaletteColor, getPaletteMonoColor, getCommonPaletteItem
};

export const getColor = ({ name, type = 'text', level = 'normal', inverted = false, opacity }:
    { name: keyof ColorsTemplate, type: 'text' | 'bg', level?: Level, inverted?: boolean, opacity?: keyof ColorOpacity }) =>
    (theme: ColorTheme): string => {
        const value = getPaletteColor({
            name: getColorTheme(theme, inverted).colors[name],
            level: getColorTheme(theme, inverted)[type === 'text' ? 'colorTextLevel' : 'colorBgLevel'][level],
        })(theme);
        return getOpacityValue(value, opacity, inverted)(theme);
    }

export const getPColorPaletteType = ({ name, type = 'text', level = 'normal', inverted = false, opacity }:
    { name: keyof ColorPalette, type: 'text' | 'bg', level?: Level, inverted?: boolean, opacity?: keyof ColorOpacity }) =>
    (theme: ColorTheme): string => {
        const value = getPaletteColor({
            name,
            level: getColorTheme(theme, inverted)[type === 'text' ? 'colorTextLevel' : 'colorBgLevel'][level],
        })(theme);
        return getOpacityValue(value, opacity, inverted)(theme);
    }
export const getColorAccent = ({ level = 'normal', inverted = false, opacity }:
    { level?: Level, inverted?: boolean, opacity?: keyof ColorOpacity }) =>
    (theme: ColorTheme): string => {
        const value = getPaletteColor({
            name: getColorTheme(theme, inverted).accent,
            level: getColorTheme(theme, inverted).accentLevel[level],
        })(theme);
        return getOpacityValue(value, opacity, inverted)(theme);
    }

export const getColorMono = (a: keyof MonoPaletteItem = 500, inverted: boolean = false) =>
    (theme: ColorTheme): string => getPaletteMonoColor({
        name: getColorTheme(theme, inverted).mono,
        level: a,
    })(theme);

export const getColorCommon = ({ name, level }: {
    name: keyof CommonPaletteItem;
    level?: keyof ColorOpacity;
}, inverted: boolean = false) => (theme: ColorTheme): string => {
    const result = getCommonPaletteItem(name)(theme);

    const levelValue = level ? level : 'full';
    if (name === 'transparent') {
        return result;
    }
    return getOpacityValue(result, levelValue, inverted)(theme);

};
/**
 * get opacity value in theme
 * @param level 
 * @param inverted 
 */
export const getOpacity = (level: keyof ColorOpacity
    , inverted: boolean = false) => (theme: ColorTheme): number => {

        return getColorTheme(theme, inverted).opacity[level];
    };
/**
 * get css color value 
 * @param value 
 * @param level 
 * @param inverted 
 */
export const getOpacityValue = (value: string, level: keyof ColorOpacity = 'full'
    , inverted: boolean = false) => (theme: ColorTheme): string => {
        if (level === 'full') {
            return value
        } else {
            const opacity = getOpacity(level, inverted)(theme);
            return alpha(opacity)(value);
        }

    };
export const getTextColor = ({ name, level = 'normal', inverted = false, opacity = 'full' }:
    { name: keyof TBaseColors['text'], level?: Level, inverted?: boolean, opacity?: keyof ColorOpacity }

) =>
    (theme: ColorTheme): string => {
        const result = getCommonPaletteItem(getType(theme, !inverted))(theme);
        const opacityItem = getOpacityItem(level, getColorTheme(theme, inverted).text[name])
        const opacityText = getOpacity(opacityItem, inverted)(theme)
        const opacityValue = getOpacity(opacity, inverted)(theme)
        const opacityFinal = opacityValue * opacityText;
        if (opacityFinal === 1) {
            return result;
        }
        return alpha(opacityFinal)(result);
    };
export const getColorBg = ({ name, level = 'normal', inverted = false, opacity = 'full' }:
    {
        name: keyof TBaseColors['background'],
        level?: Level,
        inverted?: boolean,
        opacity?: keyof ColorOpacity
    }) => (theme: ColorTheme): string => {
        const colorTheme = getColorTheme(theme, inverted);
        const value = getMonoItem(level, colorTheme.background[name]);
        let cssValue: string;
        if (value === 0) {
            cssValue = getCommonPaletteItem(theme.color.type)(theme);
        } else {
            cssValue = getColorMono(value)(theme);
        }
        return getOpacityValue(cssValue, opacity, inverted)(theme);
    };

export const getLightOrDarkColor = (a: string, inverted: boolean = false) => (theme: ColorTheme): string => {
    const result = isDark(a) ? getColorCommon({ name: 'light', level: 'full' }, inverted)(theme) :
        getColorCommon({ name: 'dark', level: 'largeXX' }, inverted)(theme);
    return result;
};
