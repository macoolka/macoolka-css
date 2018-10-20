import {OutRule} from './index';
import {parseUnitProp } from './index';
export const flexItemRule: OutRule<{A?:number}, {}> = {
    rule: {
        A:({value})=>({ width:value}),
    }
};

const parse=parseUnitProp(flexItemRule,{});
describe('unit', () => {
    it('parse to object', () => {
        expect(parse({})).toEqual({})
        expect(parse({A:1})).
            toEqual({
                "width": "100%"
            })
    })
})