import {Rule} from '../base';
import {UnitProps} from './index';
import {parseUnitRule } from './index';
export const flexItemRule: Rule<{A:number}, {}, UnitProps> = {
    rule: {
        A: 'width',
    }
};
const parse=parseUnitRule(flexItemRule)({});
describe('unit', () => {
    it('parse to object', () => {
        expect(parse({})).toEqual({})
        expect(parse({A:1})).
            toEqual({
                "width": "100%"
            })
    })
})