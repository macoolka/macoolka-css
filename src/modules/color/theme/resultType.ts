import {Level} from './type';
type ColorValue = {
    [key in Level]: string
/*     light: string,
    normal: string,
    dark: string */
};
export type TColorsValue = {
    text: {
        primary: ColorValue,
        secondary: ColorValue,
        divider: ColorValue,
        main: ColorValue,
        accent: ColorValue,
        disabled: ColorValue,
        success: ColorValue;
        info: ColorValue;
        warning: ColorValue;
        alert: ColorValue;
    },
    background: {
        body: ColorValue,
        surface: ColorValue,
        mini: ColorValue,
        small: ColorValue,
        medium: ColorValue,
        large: ColorValue,
        main: ColorValue,
        accent: ColorValue,
        disabled: ColorValue,
        success: ColorValue;
        info: ColorValue;
        warning: ColorValue;
        alert: ColorValue;
    },
};
export type ColorValueTheme =  {
    color: {
      light: TColorsValue,
      dark: TColorsValue,
    }
  };
