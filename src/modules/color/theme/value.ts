import ColorTheme , { ColorsTemplate } from './type';
import { theme as paletteTheme } from './palette';
const colors: ColorsTemplate = {
    main: 'teal',
    // secondary: 'lime',
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
                primary: {
                    light: 0.7,
                    normal: 0.87,
                    dark: 1,
                } ,
                secondary: {
                    light: 0.4,
                    normal: 0.54,
                    dark: 0.7,
                },
                disabled: {
                    light: 0.38,
                    normal: 0.38,
                    dark: 0.38,
                },
                divider: {
                    light: 0.075,
                    normal: 0.12,
                    dark: 0.3,
                },
            },
            background: {
                body: {
                    light: 0,
                    normal: 50,
                    dark: 100,
                },
                surface: {
                    light: 0,
                    normal: 0,
                    dark: 50,
                },
                mini: {
                    light: 50,
                    normal: 100,
                    dark: 200,
                },
                small: {
                    light: 50,
                    normal: 200,
                    dark: 200,
                },
                medium: {
                    light: 100,
                    normal: 300,
                    dark: 300,
                },
                large: {
                    light: 200,
                    normal: 400,
                    dark: 400,
                },
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
                primary: {
                    light: 0.7,
                    normal: 1,
                    dark: 1,
                } ,
                secondary: {
                    light: 0.6,
                    normal: 0.7,
                    dark: 1,
                },
                disabled: {
                    light: 0.5,
                    normal: 0.5,
                    dark: 0.5,
                },
                divider: {
                    light: 0.075,
                    normal: 0.12,
                    dark: 0.3,
                },
            },
            background: {
                body: {
                    light: 0,
                    normal: 0,
                    dark: 50,
                },
                surface: {
                    light: 700,
                    normal: 800,
                    dark: 900,
                },
                mini: {
                    light: 600,
                    normal: 700,
                    dark: 800,
                },
                small: {
                    light: 500,
                    normal: 600,
                    dark: 700,
                },
                medium: {
                    light: 400,
                    normal: 500,
                    dark: 600,
                },
                large: {
                    light: 300,
                    normal: 400,
                    dark: 500,
                },
            },
        },

    },
};

export default theme;
