
/**
 * Border
 * @file
 */
import { Rule as ParentRule, ruleModule as parentRuleModule } from '../../basic';
import { ExtendRule, extendRuleModule } from '../../CssRule'
import { selector, Theme,theme } from './theme';
import { Level, Opacity, isTextColor, isBgColor, isColor, ColorNames, isPaletteColor } from './theme/type';
import { isObject, isMaybe } from 'macoolka-predicate'
import { fromNullable, chain, map, toUndefined } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

/**
# Color Property

The define text color,background color and border color.

The color value be define in theme.

Jss color={value} | backgroundColor={value} | borderColor={value}

mkColor define text color and background color.
@desczh
# 颜色属性

定义文本、背景、边框的的颜色

颜色具体值定义在方案中。

等价于 color={value} | backgroundColor={value} | borderColor={value}

mkColor 同时定义本文颜色和背景颜色。其中文本颜色会自动根据当前背景颜色亮度赋值
 * @mk
 * @memberof common
 * @name color
 * @title Color Property
 */
export interface Props extends EProps, SProps {

}
export type Color = ColorNames | OriginColor;
export interface ColorValue {
    name?: Color,
    level?: Level,
    inverted?: boolean
    opacity?: Opacity

}
export type ColorObject = Color | ColorValue

export type OriginColor = | 'inherit' | 'currentColor' | 'transparent'
export type TextColor = Color;
export type BorderColor = Color;

export interface SProps {


    /**
     * text color
     * @desczh
     * 文本颜色
     */
    mkTextColor?: ColorObject;


  
    /**
     * border color
     * @desczh
     * 边框颜色
     */
    mkBorderColor?: ColorObject;

    /**
     * background color with auto text color
     * @desczh
     * 背景颜色-文本颜色根据亮度自动赋值
     */
    mkColor?: ColorObject,

    /**
     * background  color
     * @desczh
     *  背景颜色
     */
    mkBgColor?: ColorObject,

  
    /**
     * opacity
     * @desczh
     * 透明度
     */
    mkOpacity?: Opacity,

};
export interface EProps {

};
export type Rule = ExtendRule<ParentRule, SProps, EProps, Theme>

export const getTextColor = ({ source }: { source?: any }) => {

    if (isMaybe(source) || isMaybe(source[''])) {
        return undefined;
    }

    const value = source[''];
    return isObject(value.mkTextColor) ? value.mkTextColor.name : (value.mkTextColor) ? value.mkTextColor : 'primary'
};

export const getColorValue = ({ theme, source }: { theme: Theme, source?: any }) => {

    if (isMaybe(source) || isMaybe(source[''])) {
        return undefined;
    }
    const value = source[''];
    if (value.color) {
        return value.color
    }
    return getTextColorValue({ theme, source })

};

const getTextColorRule = () => {
    if (rule.rule && rule.rule.mkTextColor) {
        return rule.rule.mkTextColor
    }
}
export const getTextColorValue = ({ theme, source }: { theme: Theme, source?: any }) => {
    const textColor = getTextColor({ source })
    return pipe(
        fromNullable(textColor),
        chain(textColorValue => {
            const ruleTextColor: any = getTextColorRule();
            return pipe(
                fromNullable(ruleTextColor),
                map(textColorValueFunc => {
                    const textColorObject = textColorValueFunc({ theme, value: textColorValue, source })
                    if (textColorObject && textColorObject.color) {
                        return textColorObject.color
                    }
                })
            )

        }),
        toUndefined
    )
};

const getColorObjectValue = (defaultValue: Color = 'primary') => (value: ColorObject): {
    name: Color,
    level: Level,
    inverted: boolean
    opacity: Opacity
} => {

    return {
        name: (isObject(value)) ? ((value.name) ? value.name : defaultValue) : value,
        inverted: (isObject(value) && value.inverted) ? value.inverted : false,
        level: (isObject(value) && value.level) ? value.level : 'normal',
        opacity: (isObject(value) && value.opacity) ? value.opacity : 'full',
    }
}
const getColorObjectValueR = (defaultValue: Color = 'primary') => (value: ColorObject): {
    name: Color,
    level: Level,
    inverted: boolean
    opacity: Opacity
} => {

    return {
        name: (isObject(value)) ? ((value.name && (value.name !== 'currentColor')) ? value.name : defaultValue) : value,
        inverted: (isObject(value) && value.inverted) ? value.inverted : false,
        level: (isObject(value) && value.level) ? value.level : 'normal',
        opacity: (isObject(value) && value.opacity) ? value.opacity : 'full',
    }
}
export const getDefaultColorTextValue = ({ value, source }: { value: ColorObject, source?: any }): {
    name: Color,
    level: Level,
    inverted: boolean,
    opacity: Opacity
} => getColorObjectValueR(getTextColor({ source }))(value)

const rule: Rule = {
    rule: {
        mkTextColor: ({ value, theme, source }) => {
            if (isMaybe(value)) {
                return ({})
            }
            const colorValue = getColorObjectValue()(value);
            if (isTextColor(colorValue.name)) {
                return ({ color: selector.getTextColor(colorValue as any)(theme) });
            }
            if (isColor(colorValue.name)) {
                return ({ color: selector.getColor(colorValue as any)(theme) });
            }
            if (colorValue.name === 'accent') {
                return ({ color: selector.getColorAccent(colorValue as any)(theme) });
            }
            if (isPaletteColor(colorValue.name)) {
                return ({ color: selector.getPColorPaletteType(colorValue as any)(theme) });
            }
            return ({
                color: colorValue.name
            })

        },

        mkBorderColor: ({ value, theme, source }) => {
            if (isMaybe(value)) {
                return ({})
            }
            if (value === 'transparent') {
                return ({ borderColor: 'transparent' });
            }
            if (value === 'inherit') {
                return ({ borderColor: 'inherit' });
            }

            const colorValue = getDefaultColorTextValue({ value, source });

            if (colorValue.name === 'divide') {
                return ({ borderColor: selector.getColorBg(colorValue as any)(theme) });
            }
            if (isTextColor(colorValue.name)) {
                return ({ borderColor: selector.getTextColor(colorValue as any)(theme) });
            }
            if (isPaletteColor(colorValue.name)) {
                return ({ borderColor: selector.getPColorPaletteType(colorValue as any)(theme) });
            }
            if (isColor(colorValue.name)) {
                return ({ borderColor: selector.getColor(colorValue as any)(theme) });
            }
            if (colorValue.name === 'accent') {
                return ({ borderColor: selector.getColorAccent(colorValue as any)(theme) });
            }

            return ({
                borderColor: colorValue.name
            })

        },

        mkBgColor: ({ value, theme, source }) => {
            if (isMaybe(value)) {
                return ({})
            }
            if (value === 'transparent') {
                return ({ backgroundColor: 'transparent' });
            }
            if (value === 'inherit') {
                return ({ backgroundColor: 'inherit' });
            }
            const colorValue = getDefaultColorTextValue({ value, source });

            if (isBgColor(colorValue.name)) {
                return ({ backgroundColor: selector.getColorBg(colorValue as any)(theme) });
            }
            if (isColor(colorValue.name)) {
                return ({ backgroundColor: selector.getColor({ ...colorValue as any, type: 'bg' })(theme) });
            }
            if (colorValue.name === 'accent') {
                return ({ backgroundColor: selector.getColorAccent(colorValue as any)(theme) });
            }
            if (isPaletteColor(colorValue.name)) {
                return ({ backgroundColor: selector.getPColorPaletteType({ ...colorValue as any, type: 'bg' })(theme) });
            }
            return ({
                backgroundColor: colorValue.name
            })

        },

        mkColor: ({ value, theme, source }) => {
            if (isMaybe(value)) {
                return ({})
            }
            if (value === 'transparent') {
                return ({ backgroundColor: 'transparent' });
            }
            if (value === 'inherit') {
                return ({ backgroundColor: 'inherit' });
            }
            const colorValue = getDefaultColorTextValue({ value, source });
            let rValue;

            if (isBgColor(colorValue.name)) {
                rValue = selector.getColorBg(colorValue as any)(theme);

            }
            if (isColor(colorValue.name)) {
                rValue = selector.getColor({ ...colorValue as any, type: 'bg' })(theme);
            }
            if (colorValue.name === 'accent') {
                rValue = selector.getColorAccent(colorValue as any)(theme);
            }
            if (isPaletteColor(colorValue.name)) {
                rValue = selector.getPColorPaletteType({ ...colorValue as any, type: 'bg' })(theme);

            }
            if (rValue) {
                return ({
                    backgroundColor: rValue,
                    color: selector.getLightOrDarkColor(rValue, colorValue.inverted)(theme),
                })
            }
            return ({ backgroundColor: selector.getColorBg(colorValue as any)(theme) });
        },
        mkOpacity: ({ value, theme }) => ({
            opacity: selector.getOpacity(value)(theme)
        })

    },

};

export const ruleModule = extendRuleModule(parentRuleModule)<Rule>({
    rule,
    theme,
})