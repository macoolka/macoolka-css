import { parseModuleProp as _parse,theme} from '../../modules';
import {rule} from './index'
const parse = _parse(rule,theme);

describe('text', () => {
    it('parse mkTypography', () => {
        expect(parse({
            mkTypography: 'h1',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'h2',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'h3',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'h4',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'h5',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'h6',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'subtitle1',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'subtitle2',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'body1',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'body2',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'button',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'caption',
        })).toMatchSnapshot();
        expect(parse({
            mkTypography: 'overline',
        })).toMatchSnapshot();
    });
   

});

