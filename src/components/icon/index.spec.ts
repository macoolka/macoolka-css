import { parseRule as _parseRule, theme as basicTheme } from '../../modules';
import  { rule } from './index'
const parse = _parseRule(rule)({...basicTheme });

describe('icon', () => {
    it('parse icon', () => {
        expect(parse({
            size: 'small',
        })).toMatchSnapshot();
        expect(parse({
            size: 'medium',
            disabled:true,
        })).toMatchSnapshot();
        
    })

});

