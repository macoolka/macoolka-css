import   {theme,selector}  from './index';
describe('get palette theme variable value', () => {
    it('PaletteColor', () => {
        expect(selector.getPaletteColor({ name: 'red', level: 500})(theme)).toEqual(
            theme.palette.colorPalette.red['500']);
        expect(selector.getPaletteColor({ name: 'red', level: 800 })(theme)).toEqual(
            theme.palette.colorPalette.red['800']);
    });
    it('PaletteCommonColor', () => {
        expect(selector.getCommonPaletteItem('dark')(theme)).toEqual(
            theme.palette.commonPalette.dark);
    });
    it('PaletteMonoColor', () => {
        expect(selector.getPaletteMonoColor({ name: 'grey', level: 800 })(theme)).toEqual(
            theme.palette.monoPalette.grey['800']);
    });
});
