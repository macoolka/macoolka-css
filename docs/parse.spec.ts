import {parseProperties} from './parse';
import {resolve} from 'path';
describe('fs', () => {
    it('parse to object', () => {
        expect(parseProperties(resolve(__dirname,'tests'))('modules','Output')).toMatchSnapshot()

    })
})