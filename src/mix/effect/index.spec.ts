import { parseModuleRule as _parse,theme} from '../../modules';
import {rule} from './index'
const parse = _parse(rule)(theme);

describe('text', () => {
    it('parse mkHoverColor', () => {
        expect(parse({
            mkHoverColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkHoverColor: 'accent',
        })).toMatchSnapshot();
    });
    it('parse mkHoverColor', () => {
        expect(parse({
            mkHoverTextColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkHoverTextColor: 'yellow',
        })).toMatchSnapshot();
    });  

});

