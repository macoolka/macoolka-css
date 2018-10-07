import { merge } from 'mocoolka-fp/lib/object';
import { theme, selector } from './index';

const darkTheme = merge({}, theme, { color: { type: "dark" } });
describe('get palette theme variable value', () => {
    it('Color', () => {
        expect(selector.getColor({ name: 'primary', level: 'normal' })(theme)).toEqual(
            theme.palette.colorPalette.teal['500']);
        expect(selector.getColor({ name: 'primary' })(theme)).toEqual(
            theme.palette.colorPalette.teal['500']);
        expect(selector.getColor({ name: 'primary', level: 'dark', })(theme)).toEqual(
            theme.palette.colorPalette.teal['700']);
        expect(selector.getColor({ name: 'primary', level: 'light', })(theme)).toEqual(
            theme.palette.colorPalette.teal['300']);
    });
    it('getPColorPaletteType', () => {
        expect(selector.getPColorPaletteType({ name: 'red', level: 'normal' })(theme)).toEqual(
            theme.palette.colorPalette.red['500']);
        expect(selector.getPColorPaletteType({ name: 'red' })(theme)).toEqual(
            theme.palette.colorPalette.red['500']);
    });
    it('ColorAccent', () => {
        expect(selector.getColorAccent('normal')(theme)).toEqual(
            theme.palette.colorPalette.pink.A400);
        expect(selector.getColorAccent()(theme)).toEqual(
            theme.palette.colorPalette.pink.A400);
        expect(selector.getColorAccent('dark')(theme)).toEqual(
            theme.palette.colorPalette.pink.A700);
        expect(selector.getColorAccent('light')(theme)).toEqual(
            theme.palette.colorPalette.pink.A200);
    });
    it('getColorMono', () => {
        expect(selector.getColorMono()(theme)).toEqual(
            theme.palette.monoPalette.grey['500']);
        expect(selector.getColorMono(500)(theme)).toEqual(
            theme.palette.monoPalette.grey['500']);
        expect(selector.getColorMono()(theme)).toEqual(
            theme.palette.monoPalette.grey['500']);
        expect(selector.getColorMono(700)(theme)).toEqual(
            theme.palette.monoPalette.grey['700']);
        expect(selector.getColorMono(900)(theme)).toEqual(
            theme.palette.monoPalette.grey['900']);
    });
    it('getColorCommon', () => {
        expect(selector.getColorCommon({ name: 'dark', level: 'largeXXX' })(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getColorCommon({ name: 'dark' })(theme)).toEqual(
            '#000000');
        expect(selector.getColorCommon({ name: 'dark', level: 'large', })(theme)).toEqual(
            'rgba(0, 0, 0, 0.4)');
    });
    it('getColorText', () => {
        expect(selector.getColorText('primary')(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getColorText('secondary')(theme)).toEqual(
            'rgba(0, 0, 0, 0.54)');
        expect(selector.getColorText('primary')(darkTheme)).toEqual(
            '#fff');
        expect(selector.getColorText('secondary')(darkTheme)).toEqual(
            'rgba(255, 255, 255, 0.7)');

    });
    it('getColorBg', () => {
        expect(selector.getColorBg('body')(theme)).toEqual(
            '#fafafa');
        expect(selector.getColorBg('surface')(theme)).toEqual(
            '#fff');
        expect(selector.getColorBg('body')(darkTheme)).toEqual(
            '#000');
        expect(selector.getColorBg('surface')(darkTheme)).toEqual(
            '#424242');
    });
    it('getLightOrDarkColor', () => {
        const a = selector.getColorBg('body')(theme);
        expect(selector.getLightOrDarkColor(a)(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getLightOrDarkColor('#fff')(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getLightOrDarkColor('#000')(theme)).toEqual(
            '#fff');
    });
});

