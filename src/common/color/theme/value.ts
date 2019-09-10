import ColorTheme , { ColorsTemplate } from './type';
import { theme as paletteTheme } from './palette';
const colors: ColorsTemplate = {
    main: 'teal',
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
            colorTextLevel: {
                light: 600,
                normal: 700,
                dark: 900,
            },
            colorBgLevel: {
                light: 300,
                normal: 400,
                dark: 500,
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
                primary: 'largeXX' ,
                secondary: 'large',
                disabled: 'medium',
                divide: 'small',

            },
            background: {
                primary: 0,
                secondary: 50,
                disabled: 200,
                divide: 300,
                
            },
            opacity: {
                full: 1,
                largeXX: 0.87,
                largeX: 0.7,
                large: 0.54,
                medium: 0.38,
                small: 0.12,
                mini: 0.075,
            },
        },
        dark: {

            colorBgLevel: {
                light: 500,
                normal: 700,
                dark: 900,
            },
            colorTextLevel: {
                light: 300,
                normal: 400,
                dark: 500,
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
                largeXX: 0.8,
                largeX: 0.7,
                large: 0.5,
                medium: 0.38,
                small: 0.12,
                mini: 0.075,
            },
            text: {
                primary: 'full' ,
                secondary: 'largeX',
                disabled: 'medium',
                divide: 'small',

            },
            background: {
                primary: 900,
                secondary:800,
                disabled: 700,
                divide: 600
            },
        },

    },
};

export default theme;
