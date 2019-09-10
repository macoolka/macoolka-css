import { merge } from 'macoolka-object';
import { theme, selector } from '../index';

const darkTheme = merge({}, theme, { color: { type: "dark" } });
describe('get palette theme variable value', () => {
    it('Color', () => {
        expect(selector.getColor({ name: 'main',type:'text' })(theme)).toEqual(
            theme.palette.colorPalette.teal['700']);
        expect(selector.getColor({ name: 'main',type:'text', level: 'normal' })(theme)).toEqual(
            theme.palette.colorPalette.teal['700']);
        expect(selector.getColor({ name: 'main',type:'text', level: 'dark' })(theme)).toEqual(
            theme.palette.colorPalette.teal['900']);
        expect(selector.getColor({ name: 'main',type:'text', level: 'light' })(theme)).toEqual(
            theme.palette.colorPalette.teal['600']);
    });
    it('getPColorPaletteType', () => {
        expect(selector.getPColorPaletteType({name:'red',type:'text',level:'normal'})(theme)).toEqual(
            theme.palette.colorPalette.red['700']);
        expect(selector.getPColorPaletteType({name:'red',type:'text',level:'normal'})(theme)).toEqual(
            theme.palette.colorPalette.red['700']);
    });
    it('ColorAccent', () => {
        expect(selector.getColorAccent({ level: 'normal' })(theme)).toEqual(
            theme.palette.colorPalette.pink.A400);
        expect(selector.getColorAccent({})(theme)).toEqual(
            theme.palette.colorPalette.pink.A400);
        expect(selector.getColorAccent({ level: 'dark' })(theme)).toEqual(
            theme.palette.colorPalette.pink.A700);
        expect(selector.getColorAccent({ level: 'light' })(theme)).toEqual(
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
        expect(selector.getColorCommon({ name: 'dark', level: 'largeXX' })(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getColorCommon({ name: 'dark' })(theme)).toEqual(
            '#000');
        expect(selector.getColorCommon({ name: 'dark', level: 'large', })(theme)).toEqual(
            'rgba(0, 0, 0, 0.54)');
    });
    it('getColorText', () => {
        expect(selector.getTextColor({name:'primary'})(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getTextColor({name:'secondary'})(theme)).toEqual(
            'rgba(0, 0, 0, 0.54)');
        expect(selector.getTextColor({name:'primary'})(darkTheme)).toEqual(
            '#fff');
        expect(selector.getTextColor({name:'secondary'})(darkTheme)).toEqual(
            'rgba(255, 255, 255, 0.7)');

    });
    it('getColorBg', () => {
        expect(selector.getColorBg({ name: 'primary' })(theme)).toEqual(
            '#fff');
        expect(selector.getColorBg({ name: 'secondary' })(theme)).toEqual(
            '#fafafa');
        expect(selector.getColorBg({ name: 'primary' })(darkTheme)).toEqual(
            '#212121');
        expect(selector.getColorBg({ name: 'secondary' })(darkTheme)).toEqual(
            '#424242');
    });
    it('getLightOrDarkColor', () => {
        const a = selector.getColorBg({ name: 'primary' })(theme);
        expect(selector.getLightOrDarkColor(a)(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getLightOrDarkColor('#fff')(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(selector.getLightOrDarkColor('#000')(theme)).toEqual(
            '#fff');
    });
    it('getOpacity', () => {
        expect(selector.getOpacity('largeXX')(theme)).toEqual(0.87)
        expect(selector.getOpacity('largeXX', true)(theme)).toEqual(0.8)
    });

});

