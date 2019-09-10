import {findStep} from '../array';
import {compareNumber} from 'macoolka-compare';
import {some,none} from 'fp-ts/lib/Option'
const as=[0,50,100,200,300]
describe('array', () => {
    describe('findStep', () => {
        it('-1', () => {
            expect(findStep(-1)(compareNumber.eq(50))(as)).toEqual(some(0))
            expect(findStep(-1)(compareNumber.eq(0))(as)).toEqual(some(0))
            expect(findStep(-1)(compareNumber.eq(50))([])).toEqual(none)
        });
        it('+1', () => {
            expect(findStep(1)(compareNumber.eq(50))(as)).toEqual(some(100))
            expect(findStep(1)(compareNumber.eq(0))(as)).toEqual(some(50))
            expect(findStep(1)(compareNumber.eq(300))(as)).toEqual(some(300))
            expect(findStep(1)(compareNumber.eq(50))([])).toEqual(none)
        });
    })
});