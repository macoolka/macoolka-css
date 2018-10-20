
import {  parse,parseMedia} from '.';

describe('parseJSS', () => {
    it('parse stand', () => {
        expect(parse({
            mkPadding: 'small',
            height: 100,
            selector: {
                '&:focus': {
                    mkPadding: 'medium',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media', () => {
        expect(parseMedia({
            height: 100,
            mkMedia: [{
                mkPadding: 'small',
                fontSize: 12
            }, {
                mkPadding: 'medium', fontSize: 13
            }, {
                mkPadding: 'large', fontSize: 14
            }, {
                mkPaddingTop: 'large', fontSize: 15
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
            mkPadding: 'small',
            height: 100,
            selector: {
                '&:focus': {
                    mkPadding: 'medium',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media', () => {
        expect(parseMedia({
            height: 100,
            mkMedia: [{
                mkPadding: 'small',
                fontSize: 12
            }, {
                mkPadding: 'medium', fontSize: 13
            }, {
                mkPadding: 'large', fontSize: 14
            }, {
                mkPadding: 'medium', fontSize: 15
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