import {readFiles} from './fs';
import {resolve} from 'path';
describe('fs', () => {
    it('parse to object', () => {
        expect(readFiles('**/*.ts')(resolve(__dirname,'tests'),'KeyMap','Output').run()).toMatchSnapshot()

    })
})