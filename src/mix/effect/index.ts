
/**
 * Border
 * @prop
 */
import { ModuleProps, Theme } from '../../modules';
import { Rule } from '../../base/rule';
import { PaletteColor, TextColor, Color, BorderColor } from '../../modules/color/rule';
export type SProps = {

    /**
     * hover using text color
     */
    mkHoverTextColor: TextColor,

    mkHoverTextColorLight: TextColor,
    mkHoverTextColorDark: TextColor,
    mkHoverTextColorToLight: TextColor,
    mkHoverTextColorToDark: TextColor,
   /**
    * hover using palette text color
    */
    mkHoverTextColors: PaletteColor,
    mkHoverTextColorsLight: PaletteColor,
    mkHoverTextColorsDark: PaletteColor,
    mkHoverTextColorsToLight: PaletteColor,
    mkHoverTextColorsToDark: PaletteColor,
    /**
     * hover using color
     */
    mkHoverColor: Color,
    mkHoverColorLight: Color,
    mkHoverColorDark: Color,
    mkHoverColorToLight: Color,
    mkHoverColorToDark: Color,
    /**
     * hover using palette color
     */
    mkHoverColors: PaletteColor,
    mkHoverColorsLight: PaletteColor,
    mkHoverColorsDark: PaletteColor,
    mkHoverColorsToLight: PaletteColor,
    mkHoverColorsToDark: PaletteColor,

    /**
     * hover using border color
     */
    mkHoverBorderColor: BorderColor,
    mkHoverBorderColorLight: BorderColor,
    mkHoverBorderColorDark: BorderColor,
    mkHoverBorderColorToLight: BorderColor,
    mkHoverBorderColorToDark: BorderColor,
    /**
     * hover using palette border color
     */
    mkHoverBorderColors: PaletteColor,
    mkHoverBorderColorsLight: PaletteColor,
    mkHoverBorderColorsDark: PaletteColor,
    mkHoverBorderColorsToLight: PaletteColor,
    mkHoverBorderColorsToDark: PaletteColor,

};
export type EProps = {

};
export type Props = EProps & SProps;
export const rule: Rule<SProps, EProps, ModuleProps, Theme> = {
    ruleEnum: {

    },
    rule: {
        mkHoverTextColor: (a) => ({ selector: { '&:hover': { mkTextColor: a } } }),
        mkHoverTextColorLight: (a) => ({ selector: { '&:hover': { mkTextColorLight: a } } }),
        mkHoverTextColorDark: (a) => ({ selector: { '&:hover': { mkTextColorDark: a } } }),
        mkHoverTextColorToLight: (a) => ({
            mkTextColor: a,
            selector: { '&:hover': { mkTextColorLight: a } },
        }),
        mkHoverTextColorToDark: (a) => ({
            mkTextColor: a,
            selector: { '&:hover': { mkTextColorDark: a } },
        }),

        mkHoverBorderColor: (a) => ({ selector: { '&:hover': { mkBorderColor: a } } }),
        mkHoverBorderColorLight: (a) => ({ selector: { '&:hover': { mkBorderColorLight: a } } }),
        mkHoverBorderColorDark: (a) => ({ selector: { '&:hover': { mkBorderColorDark: a } } }),
        mkHoverBorderColorToLight: (a) => ({
            mkBorderColor: a,
            selector: { '&:hover': { mkBorderColorLight: a } },
        }),
        mkHoverBorderColorToDark: (a) => ({
            mkBorderColor: a,
            selector: { '&:hover': { mkBorderColorDark: a } },
        }),

        mkHoverColor: (a) => ({ selector: { '&:hover': { mkColor: a } } }),
        mkHoverColorLight: (a) => ({ selector: { '&:hover': { mkColorLight: a } } }),
        mkHoverColorDark: (a) => ({ selector: { '&:hover': { mkColorDark: a } } }),
        mkHoverColorToLight: (a) => ({
            mkColor: a,
            selector: { '&:hover': { mkColorLight: a } },
        }),
        mkHoverColorToDark: (a) => ({
            mkColor: a,
            selector: { '&:hover': { mkColorDark: a } },
        }),
        mkHoverTextColors: (a) => ({
            selector: { '&:hover': { mkTextColors: a } },
        }),
        mkHoverTextColorsLight: (a) => ({
            selector: { '&:hover': { mkTextColorsLight: a } },
        }),
        mkHoverTextColorsDark: (a) => ({
            selector: { '&:hover': { mkTextColorsDark: a } },
        }),
        mkHoverTextColorsToLight: (a) => ({
            mkTextColors: a,
            selector: { '&:hover': { mkTextColorsLight: a } },
        }),
        mkHoverTextColorsToDark: (a) => ({
            mkTextColors: a,
            selector: { '&:hover': { mkTextColorsDark: a } },
        }),
        mkHoverColors: (a) => ({
            selector: { '&:hover': { mkColors: a } },
        }),
        mkHoverColorsLight: (a) => ({
            selector: { '&:hover': { mkColorsLight: a } },
        }),
        mkHoverColorsDark: (a) => ({
            selector: { '&:hover': { mkColorsDark: a } },
        }),
        mkHoverColorsToLight: (a) => ({
            mkColors: a,
            selector: { '&:hover': { mkColorsLight: a } },
        }),
        mkHoverColorsToDark: (a) => ({
            mkColors: a,
            selector: { '&:hover': { mkColorsDark: a } },
        }),

        mkHoverBorderColors: (a) => ({
            selector: { '&:hover': { mkBorderColors: a } },
        }),
        mkHoverBorderColorsLight: (a) => ({
            selector: { '&:hover': { mkBorderColorsLight: a } },
        }),
        mkHoverBorderColorsDark: (a) => ({
            selector: { '&:hover': { mkBorderColorsDark: a } },
        }),
        mkHoverBorderColorsToLight: (a) => ({
            mkBorderColors: a,
            selector: { '&:hover': { mkBorderColorsLight: a } },
        }),
        mkHoverBorderColorsToDark: (a) => ({
            mkBorderColors: a,
            selector: { '&:hover': { mkBorderColorsDark: a } },
        }),
    },
};

export default rule;
