import { parseModuleProp as _parse,theme} from '../../modules';
import {rule} from './index'
const parse = _parse(rule,theme);
describe('text', () => {
    it('parse media ', () => {
        expect(parse({
            mkHide: ['small'],
        })).toMatchSnapshot();

    });
   

});

