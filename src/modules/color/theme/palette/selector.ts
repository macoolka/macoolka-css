
import ColorPaletteTheme,
 { ColorPalette, ColorPaletteItem, MonoPalette, MonoPaletteItem, CommonPaletteItem } from './type';

import defaultTheme from './value';
export const getPaletteColor = ({ name, level }: {
    name: keyof ColorPalette;
    level: keyof ColorPaletteItem;
}) => (theme: ColorPaletteTheme= defaultTheme) => theme.palette.colorPalette[name][level];
export const getPaletteMonoColor = ({ name, level }: {
    name: keyof MonoPalette;
    level: keyof MonoPaletteItem;
}) => (theme: ColorPaletteTheme= defaultTheme) => theme.palette.monoPalette[name][level];
export const getCommonPaletteItem = (level: keyof CommonPaletteItem) =>
 (theme: ColorPaletteTheme= defaultTheme) => theme.palette.commonPalette[level];
