import {foldUnit,rule} from './unit';
import { parse as _parse } from '../base';
const parse = _parse(rule)({});
describe('unit', () => {
    it('parse to object', () => {
        expect(parse({})).toEqual({})
        expect(parse({ width: 2, height: '3em', margin: 5, padding: '6px', order: 2 })).
            toEqual({ width: '2px', height: '3em', margin: '5px', padding: '6px', order: 2 })
        expect(parse({ width: 2, height: 3, color: 'red', order: 2 })).toEqual(
            { width: '2px', height: '3px', color: 'red', order: 2 })
        expect(parse({ width: 0.1, height: 3, margin: 0.1, padding: '6px', color: 'red', order: 2 })).toEqual(
            { width: '10%', height: '3px', color: 'red', margin: '0.1px', padding: '6px', order: 2 })
        expect(parse({ width: 0.1, height: 3, color: 'red', order: 2, padding: 5 })).toEqual(
            { width: '10%', height: '3px', color: 'red', order: 2, padding: '5px' })
        expect(parse({
            width: 0.1, height: 3, margin: 0.1, padding: '6px', color: 'red', order: 2,
            selector: {
                '_focus': {
                    width: 0.1, height: 3, margin: 0.1, padding: '6px', color: 'red', order: 2
                }
            }
        })).toEqual(
            {
                width: '10%', height: '3px', color: 'red', margin: '0.1px', padding: '6px', order: 2,
                selector: {
                    '_focus': {
                        width: '10%', height: '3px', color: 'red', margin: '0.1px', padding: '6px', order: 2,
                    }
                }

            })
    })
    it('fold',()=>{
        expect(foldUnit([{margin:2,padding:1},{borderWidth:3,margin:1}])).toEqual({borderWidth:3,padding:1,margin:1})
    })
})