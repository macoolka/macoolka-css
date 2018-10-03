import {Rule} from '../base';
import {BasicProps} from './index';
import {parse as basicParse} from './index';
export const flexItemRule: Rule<{A:number}, {}, BasicProps> = {
    rule: {
        A: 'width',
    }
};
const parse=basicParse(flexItemRule)({});
describe('unit', () => {
    it('parse to object', () => {
        expect(parse({})).toEqual({})
        expect(parse({A:1})).
            toEqual({
                "width": "100%"
            })
    })
})