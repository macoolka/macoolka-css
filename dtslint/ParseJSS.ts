
import { parseJss, parse } from '../src/';

describe('parseJSS', () => {
    it('parse stand', () => {
        expect(parseJss({
            mkWidth: 'full',
            height: 100,
            selector: {
                '&:focus': {
                    mkWidth: 'full',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media', () => {
        expect(parseJss({
            height: 100,
            mkMedia: [{
                mkWidth: 'full',
                fontSize: 12
            }, {
                mkWidth: 'full', fontSize: 13
            }, {
                mkWidth: 'full', fontSize: 14
            }, {
                mkWidth: 'full', fontSize: 15
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
        expect(parse({
            mkWidth: 'full',
            height: 100,
            selector: {
                '&:focus': {
                    mkWidth: 'full',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media', () => {
        expect(parse({
            height: 100,
            mkMedia: [{
                mkWidth: 'full',
                fontSize: 12
            }, {
                mkWidth: 'full', fontSize: 13
            }, {
                mkWidth: 'full', fontSize: 14
            }, {
                mkWidth: 'full', fontSize: 15
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