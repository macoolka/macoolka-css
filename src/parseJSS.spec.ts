
import { parseJSS, theme,parse } from '.';
const parseJ = parseJSS(theme);
const parseS = parse(theme);
describe('parseJSS', () => {
    it('parse stand', () => {
        expect(parseJ({
            mkWidth: 'small',
            height: 100,
            selector: {
                '&:focus': {
                    mkWidth: 'medium',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media', () => {
        expect(parseJ({
            height: 100,
            mkMedia: [{
                mkWidth: 'small',
                fontSize: 12
            }, {
                mkWidth: 'medium', fontSize: 13
            }, {
                mkWidth: 'large', fontSize: 14
            }, {
                mkWidth: 'xlarge', fontSize: 15
            }],
            selector: {
                '&:focus': {
                        mkColor: 'main',
                        borderWidth: 1
                }
            }
        })).toMatchSnapshot();
    });

});
describe('parse', () => {
    it('parse stand', () => {
        expect(parseS({
            mkWidth: 'small',
            height: 100,
            selector: {
                '&:focus': {
                    mkWidth: 'medium',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media', () => {
        expect(parseS({
            height: 100,
            mkMedia: [{
                mkWidth: 'small',
                fontSize: 12
            }, {
                mkWidth: 'medium', fontSize: 13
            }, {
                mkWidth: 'large', fontSize: 14
            }, {
                mkWidth: 'xlarge', fontSize: 15
            }],
            selector: {
                '&:focus': {
                    mkColor: 'main',
                    borderWidth: 1
            }
            }
        })).toMatchSnapshot();
    });

});