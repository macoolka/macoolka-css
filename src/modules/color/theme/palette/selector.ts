
import ColorPaletteTheme,
 { ColorPalette, ColorPaletteItem, MonoPalette, MonoPaletteItem, CommonPaletteItem } from './type';
export const getPaletteColor = ({ name, level }: {
    name: keyof ColorPalette;
    level: keyof ColorPaletteItem;
}) => (theme: ColorPaletteTheme) => theme.palette.colorPalette[name][level];
export const getPaletteMonoColor = ({ name, level }: {
    name: keyof MonoPalette;
    level: keyof MonoPaletteItem;
}) => (theme: ColorPaletteTheme) => theme.palette.monoPalette[name][level];
export const getCommonPaletteItem = (level: keyof CommonPaletteItem) =>
 (theme: ColorPaletteTheme) => theme.palette.commonPalette[level];
