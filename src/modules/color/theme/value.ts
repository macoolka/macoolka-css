import ColorTheme , { ColorsTemplate } from './type';
import { theme as paletteTheme } from './palette';
const colors: ColorsTemplate = {
    primary: 'teal',
    secondary: 'lime',
    success: 'green',
    info: 'lightBlue',
    warning: 'yellow',
    alert: 'red',
};

const theme: ColorTheme = {
    ...paletteTheme,

    color: {
        type: 'light',
        light: {
            colorLevel: {
                light: 300,
                normal: 500,
                dark: 700,
            },
            accentLevel: {
                light: 'A200',
                normal: 'A400',
                dark: 'A700',
            },
            colors,
            accent: 'pink',
            mono: 'grey',
            text: {
                primary: 0.87,
                secondary: 0.54,
                disabled: 0.38,
                divider: 0.12,
            },
            background: {
                body: 50,
                surface: 0,
                mini: 100,
                small: 200,
                medium: 300,
                large: 400,
            },
            opacity: {
                full: 1,
                largeXXX: 0.87,
                largeXX: 0.7,
                largeX: 0.5,
                large: 0.4,
                medium: 0.3,
                small: 0.12,
                mini: 0.075,
            },
        },
        dark: {
            colorLevel: {
                light: 400,
                normal: 600,
                dark: 700,
            },
            accentLevel: {
                light: 'A400',
                normal: 'A700',
                dark: 'A700',
            },
            colors,
            accent: 'pink',
            mono: 'grey',
            opacity: {
                full: 1,
                largeXXX: 0.87,
                largeXX: 0.54,
                largeX: 0.42,
                large: 0.38,
                medium: 0.26,
                small: 0.12,
                mini: 0.075,
            },
            text: {
                primary: 1,
                secondary: 0.7,
                disabled: 0.5,
                divider: 0.12,
            },
            background: {
                body: 0,
                surface: 800,
                mini: 700,
                small: 600,
                medium: 500,
                large: 900,
            },
        },

    },
};

export default theme;
