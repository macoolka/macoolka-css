import ColorPaletteTheme, {
  MonoPaletteItem, AccentPaletteItem, ColorPalette, MonoPalette
} from './palette/type';
import {Lens} from 'mocoolka-fp/lib/Monocle';
export type ColorOpacity = {
  full: number;
  largeXXX: number;
  largeXX: number;
  largeX: number;
  large: number;
  medium: number;
  small: number;
  mini: number;
};
/* export type ColorBorder = {
  [key in Level]:number
};
export type TextBorder = {
  [key in Level]:number
}; */

export type Level= 'light'|'normal'|'dark';
export type ColorTemplate = {
  [key in Level]: keyof MonoPaletteItem
/*   light: keyof MonoPaletteItem;
  normal: keyof MonoPaletteItem;
  dark: keyof MonoPaletteItem; */
};

export type ColorLevel = keyof ColorTemplate;
export type AccentTemplate = {
  [key in Level]: keyof AccentPaletteItem
/*   light: keyof AccentPaletteItem;
  normal: keyof AccentPaletteItem;
  dark: keyof AccentPaletteItem; */
};
export type TextTemplate = {
  [key in Level]: number
/*   light: number;
  normal: number;
  dark: number; */
};
export type BackgroundTemplate = {
  [key in Level]: keyof MonoPaletteItem | 0;
/*   light: keyof MonoPaletteItem | 0;
  normal: keyof MonoPaletteItem | 0;
  dark: keyof MonoPaletteItem | 0; */
};
export type ColorsTemplate = {
  main: keyof ColorPalette;
  // secondary: keyof ColorPalette;
  success: keyof ColorPalette;
  info: keyof ColorPalette;
  warning: keyof ColorPalette;
  alert: keyof ColorPalette;
};
export type ColorsTemplateType = keyof ColorsTemplate;

export type TBaseColors = {
  accentLevel: AccentTemplate;
  colorLevel: ColorTemplate;
  colors: ColorsTemplate;
  accent: keyof ColorPalette;
  mono: keyof MonoPalette;
  opacity: ColorOpacity;
  text: {
    primary: TextTemplate,
    secondary: TextTemplate,
    disabled: TextTemplate,
    divider: TextTemplate,
  },
  background: {
    body: BackgroundTemplate,
    surface: BackgroundTemplate,
    mini: BackgroundTemplate,
    small: BackgroundTemplate,
    medium: BackgroundTemplate,
    large: BackgroundTemplate,
  },
};

export const accentLevelLens = Lens.fromProp<TBaseColors, 'accentLevel'>('accentLevel');
export const colorLevelLens = Lens.fromProp<TBaseColors, 'colorLevel'>('colorLevel');
export const colorsLens = Lens.fromProp<TBaseColors, 'colors'>('colors');
export const accentLens = Lens.fromProp<TBaseColors, 'accent'>('accent');
export const monoLens = Lens.fromProp<TBaseColors, 'mono'>('mono');
export const opacityLens = Lens.fromProp<TBaseColors, 'opacity'>('opacity');
export const textLens = Lens.fromProp<TBaseColors, 'text'>('text');
export const background = Lens.fromProp<TBaseColors, 'background'>('background');
export const body = Lens.fromPath<TBaseColors, 'background', 'body'>(['background', 'body']);
export const bodyLight = Lens.fromPath<TBaseColors, 'background', 'body', 'light'>(['background', 'body', 'light']);
export const surface = Lens.fromPath<TBaseColors, 'background', 'surface'>(['background', 'surface']);
export const mini = Lens.fromPath<TBaseColors, 'background', 'mini'>(['background', 'mini']);
export const small = Lens.fromPath<TBaseColors, 'background', 'small'>(['background', 'small']);
export const medium = Lens.fromPath<TBaseColors, 'background', 'medium'>(['background', 'medium']);
export const large = Lens.fromPath<TBaseColors, 'background', 'large'>(['background', 'large']);

export const lightThemeLens = Lens.fromPath<ColorTheme, 'color', 'light'>(['color', 'light']);
export const darkThemeLens = Lens.fromPath<ColorTheme, 'color', 'dark'>(['color', 'dark']);
export const typeThemeLens = Lens.fromPath<ColorTheme, 'color', 'type'>(['color', 'type']);
type ColorTheme = ColorPaletteTheme & {
  color: {
    light: TBaseColors,
    dark: TBaseColors,
    type: 'light' | 'dark';
  }
};
export default ColorTheme;
