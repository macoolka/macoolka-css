import ColorPaletteTheme, {
  MonoPaletteItem, AccentPaletteItem, ColorPalette, MonoPalette
} from './palette/type';

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
export type ColorTemplate = {
  light: keyof MonoPaletteItem;
  normal: keyof MonoPaletteItem;
  dark: keyof MonoPaletteItem;
};
export type ColorLevel = keyof ColorTemplate;
export type AccentTemplate = {
  light: keyof AccentPaletteItem;
  normal: keyof AccentPaletteItem;
  dark: keyof AccentPaletteItem;
};
export type ColorsTemplate = {
  primary: keyof ColorPalette;
  secondary: keyof ColorPalette;
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
    primary: number,
    secondary: number,
    disabled: number,
    divider: number,
  },
  background: {
    body: keyof MonoPaletteItem | 0,
    surface: keyof MonoPaletteItem | 0,
    mini: keyof MonoPaletteItem | 0,
    small: keyof MonoPaletteItem | 0,
    medium: keyof MonoPaletteItem | 0,
    large: keyof MonoPaletteItem | 0,
  },
};
export interface ColorThemeMixed {
  color?: {
    type?: 'light' | 'dark';
    light?: {
      accentLevel?: Partial<AccentTemplate>;
      colorLevel?: Partial<ColorTemplate>;
      colors?: Partial<ColorsTemplate>;
      accent?: keyof ColorPalette;
      mono?: keyof MonoPalette;
      opacity?: Partial<ColorOpacity>

    };
    dark?: {
      accentLevel?: Partial<AccentTemplate>;
      colorLevel?: Partial<ColorTemplate>;
      colors?: Partial<ColorsTemplate>;
      accent?: keyof ColorPalette;
      mono?: keyof MonoPalette;
      opacity?: Partial<ColorOpacity>
    }
  };
}
type ColorTheme = ColorPaletteTheme & {
  color: {
    light: TBaseColors,
    dark: TBaseColors,
    type: 'light' | 'dark';
  }
};
export default ColorTheme;
