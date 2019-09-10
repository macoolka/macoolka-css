import ColorPaletteTheme, {
  MonoPaletteItem, AccentPaletteItem, ColorPalette, MonoPalette
} from './palette/type';
import { Lens } from 'monocle-ts';
export type ColorOpacity = {
  full: number;
  largeXX: number;
  largeX: number;
  large: number;
  medium: number;
  small: number;
  mini: number;
};

export type Level = 'light' | 'normal' | 'dark';
export type ColorTemplate = {
  [key in Level]: keyof MonoPaletteItem
};

export type ColorLevel = Level
export type AccentTemplate = {
  [key in Level]: keyof AccentPaletteItem
};
export type Opacity = keyof ColorOpacity;

export type BackgroundTemplate = keyof MonoPaletteItem | 0;

export type ColorsTemplate = {
  main: keyof ColorPalette;
  success: keyof ColorPalette;
  info: keyof ColorPalette;
  warning: keyof ColorPalette;
  alert: keyof ColorPalette;
};
export type ColorsTemplateType = keyof ColorsTemplate;

export type TBaseColors = {
  accentLevel: AccentTemplate;
  colorBgLevel: ColorTemplate;
  colorTextLevel: ColorTemplate;
  colors: ColorsTemplate;
  accent: keyof ColorPalette;
  mono: keyof MonoPalette;
  opacity: ColorOpacity;
  text: {
    primary: Opacity,
    secondary: Opacity,
    disabled: Opacity,
    divide: Opacity,
  },
  background: {
    primary: BackgroundTemplate,
    secondary: BackgroundTemplate,
    disabled: BackgroundTemplate,
    divide: BackgroundTemplate,
  },
};
export const baseColorsProps=Lens.fromProp<TBaseColors>()
export const accentLevelLens = baseColorsProps('accentLevel');
export const colorLevelLens = baseColorsProps('colorTextLevel');
export const colorsLens = baseColorsProps('colors');
export const accentLens = baseColorsProps('accent');
export const monoLens = baseColorsProps('mono');
export const opacityLens = baseColorsProps('opacity');
export const textLens = baseColorsProps('text');
export const background = baseColorsProps('background');
export const baseColorsPath=Lens.fromPath<TBaseColors>()
export const primary = baseColorsPath(['background', 'primary']);
//export const PrimaryLight = Lens.fromPath<TBaseColors, 'background', 'primary', 'light'>(['background', 'primary', 'light']);
export const secondary = baseColorsPath(['background', 'secondary']);
export const divide = baseColorsPath(['background', 'divide']);
export const colorThemePath=Lens.fromPath<ColorTheme>()
export const lightThemeLens = colorThemePath(['color', 'light']);
export const darkThemeLens = colorThemePath(['color', 'dark']);
export const typeThemeLens = colorThemePath(['color', 'type']);

type ColorTheme = ColorPaletteTheme & {
  color: {
    light: TBaseColors,
    dark: TBaseColors,
    type: 'light' | 'dark';
  }
};
export type TextColor = keyof TBaseColors['text'];
const textColors = ['primary', 'secondary', 'disabled', 'divide']
export const isTextColor = (a: any): a is TextColor => textColors.includes(a);
export type BgColor = keyof TBaseColors['background'];
const bgColors = ['primary', 'secondary', 'disabled', 'divide']
export const isBgColor = (a: any): a is BgColor => bgColors.includes(a)
export type Color = keyof ColorsTemplate;
const colors = ['main', 'success', 'info', 'warning', 'alert']
export const isColor = (a: any): a is Color => colors.includes(a)
export type PaletteColor = keyof ColorPalette;
export const paletteColors: PaletteColor[] = ['red',
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
export const isPaletteColor = (a: any): a is PaletteColor => paletteColors.includes(a)
export type AccentColor = 'accent'
const accentColors = ['accent']
export const isAccentColor = (a: any): a is PaletteColor => accentColors.includes(a)
export type ColorNames = Color | AccentColor | TextColor | PaletteColor;

export const mainColors: ColorNames[] = colors.concat(accentColors).concat(textColors) as ColorNames[]
export const colorNames: ColorNames[] = mainColors.concat(paletteColors) as ColorNames[]
export const monoPalettes: Array<keyof MonoPaletteItem | 0> = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
export const colorOpacity: Array<keyof ColorOpacity> = ['mini', 'small', 'medium', 'large', 'largeX', 'largeXX', 'full'];
export const levels:Level[] = ['normal', 'light', 'dark'] ;

export default ColorTheme;
