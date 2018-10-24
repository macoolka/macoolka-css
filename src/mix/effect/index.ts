
/**
 * Border
 * @prop
 */
import {  Theme, OutRule } from '../../modules';
import { PaletteColor, TextColor, Color, BorderColor } from '../../modules/color/rule';
export interface SProps {

    /**
     * hover using text color
     */
    mkHoverTextColor?: TextColor,

    mkHoverTextColorLight?: TextColor,
    mkHoverTextColorDark?: TextColor,
    mkHoverTextColorToLight?: TextColor,
    mkHoverTextColorToDark?: TextColor,
   /**
    * hover using palette text color
    */
    mkHoverTextColors?: PaletteColor,
    mkHoverTextColorsLight?: PaletteColor,
    mkHoverTextColorsDark?: PaletteColor,
    mkHoverTextColorsToLight?: PaletteColor,
    mkHoverTextColorsToDark?: PaletteColor,
    /**
     * hover using color
     */
    mkHoverColor?: Color,
    mkHoverColorLight?: Color,
    mkHoverColorDark?: Color,
    mkHoverColorToLight?: Color,
    mkHoverColorToDark?: Color,
    /**
     * hover using palette color
     */
    mkHoverColors?: PaletteColor,
    mkHoverColorsLight?: PaletteColor,
    mkHoverColorsDark?: PaletteColor,
    mkHoverColorsToLight?: PaletteColor,
    mkHoverColorsToDark?: PaletteColor,

    /**
     * hover using border color
     */
    mkHoverBorderColor?: BorderColor,
    mkHoverBorderColorLight?: BorderColor,
    mkHoverBorderColorDark?: BorderColor,
    mkHoverBorderColorToLight?: BorderColor,
    mkHoverBorderColorToDark?: BorderColor,
    /**
     * hover using palette border color
     */
    mkHoverBorderColors?: PaletteColor,
    mkHoverBorderColorsLight?: PaletteColor,
    mkHoverBorderColorsDark?: PaletteColor,
    mkHoverBorderColorsToLight?: PaletteColor,
    mkHoverBorderColorsToDark?: PaletteColor,

};
export interface EProps {

};
export interface Props extends EProps ,SProps{

}
export const rule: OutRule<SProps, EProps,  Theme> = {
    ruleEnum: {

    },
    rule: {
        mkHoverTextColor: ({value}) => ({ selector: { '&:hover': { mkTextColor: value } } }),
        mkHoverTextColorLight: ({value})  => ({ selector: { '&:hover': { mkTextColorLight: value } } }),
        mkHoverTextColorDark: ({value})  => ({ selector: { '&:hover': { mkTextColorDark: value } } }),
        mkHoverTextColorToLight: ({value})  => ({
            mkTextColor: value,
            selector: { '&:hover': { mkTextColorLight: value } },
        }),
        mkHoverTextColorToDark: ({value})  => ({
            mkTextColor: value,
            selector: { '&:hover': { mkTextColorDark: value } },
        }),

        mkHoverBorderColor: ({value})  => ({ selector: { '&:hover': { mkBorderColor: value } } }),
        mkHoverBorderColorLight: ({value})  => ({ selector: { '&:hover': { mkBorderColorLight: value } } }),
        mkHoverBorderColorDark: ({value})  => ({ selector: { '&:hover': { mkBorderColorDark: value } } }),
        mkHoverBorderColorToLight: ({value})  => ({
            mkBorderColor: value,
            selector: { '&:hover': { mkBorderColorLight: value } },
        }),
        mkHoverBorderColorToDark: ({value})  => ({
            mkBorderColor: value,
            selector: { '&:hover': { mkBorderColorDark: value } },
        }),

        mkHoverColor: ({value})  => ({ selector: { '&:hover': { mkColor: value } } }),
        mkHoverColorLight: ({value})  => ({ selector: { '&:hover': { mkColorLight: value } } }),
        mkHoverColorDark: ({value})  => ({ selector: { '&:hover': { mkColorDark: value } } }),
        mkHoverColorToLight: ({value})  => ({
            mkColor: value,
            selector: { '&:hover': { mkColorLight: value } },
        }),
        mkHoverColorToDark: ({value})  => ({
            mkColor: value,
            selector: { '&:hover': { mkColorDark: value } },
        }),
        mkHoverTextColors: ({value})  => ({
            selector: { '&:hover': { mkTextColors: value } },
        }),
        mkHoverTextColorsLight: ({value})  => ({
            selector: { '&:hover': { mkTextColorsLight: value } },
        }),
        mkHoverTextColorsDark: ({value})  => ({
            selector: { '&:hover': { mkTextColorsDark: value } },
        }),
        mkHoverTextColorsToLight: ({value})  => ({
            mkTextColors: value,
            selector: { '&:hover': { mkTextColorsLight: value } },
        }),
        mkHoverTextColorsToDark: ({value})  => ({
            mkTextColors: value,
            selector: { '&:hover': { mkTextColorsDark: value } },
        }),
        mkHoverColors: ({value})  => ({
            selector: { '&:hover': { mkColors: value } },
        }),
        mkHoverColorsLight: ({value})  => ({
            selector: { '&:hover': { mkColorsLight: value } },
        }),
        mkHoverColorsDark: ({value})  => ({
            selector: { '&:hover': { mkColorsDark: value } },
        }),
        mkHoverColorsToLight: ({value})  => ({
            mkColors: value,
            selector: { '&:hover': { mkColorsLight: value } },
        }),
        mkHoverColorsToDark: ({value})  => ({
            mkColors: value,
            selector: { '&:hover': { mkColorsDark: value } },
        }),

        mkHoverBorderColors: ({value})  => ({
            selector: { '&:hover': { mkBorderColors: value } },
        }),
        mkHoverBorderColorsLight: ({value})  => ({
            selector: { '&:hover': { mkBorderColorsLight: value } },
        }),
        mkHoverBorderColorsDark: ({value})  => ({
            selector: { '&:hover': { mkBorderColorsDark: value } },
        }),
        mkHoverBorderColorsToLight: ({value})  => ({
            mkBorderColors: value,
            selector: { '&:hover': { mkBorderColorsLight: value } },
        }),
        mkHoverBorderColorsToDark: ({value})  => ({
            mkBorderColors: value,
            selector: { '&:hover': { mkBorderColorsDark: value } },
        }),
    },
};

export default rule;
