import M from '../';
const c = M;
describe('build custmer css with property and selector', () => {
    it('css property with string', () => {
        expect(c.toRCss({})).toEqual({});
        expect(c.toRCss({ mkstyle: {color: { name: 'red', level: 500, kind: 'PaletteColor' } }}))
            .toEqual({ color: '#f44336' });
        expect(c.toRCss({ mkstyle: {color: { name: 'first', level: 'normal', kind: 'Color' } }}))
            .toEqual({ color: '#009688' });
        expect(c.toRCss({
            focus: {
                hover: {
                    mkstyle: {color:
                        { name: 'red', level: 500, kind: 'PaletteColor' }},
                },
            },
        })).toEqual({
            focus: {
                hover: {
                    color: '#f44336',
                },
            },
        });
        expect(c.toRCss({
            focus: {
                hover: {
                    mkstyle: { color:
                        { name: 'first', level: 'normal', kind: 'Color' }},
                },
            },
        })).toEqual({
            focus: {
                hover: {
                    color: '#009688',
                },
            },
        });
    });
});
