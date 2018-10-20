import {
    keyMap,
    StringMap,
} from './KeyMap';
import {Node} from './Node'
import {

    omit
} from 'mocoolka-fp/lib/object';

type P = { color?: string, margin?: number };
type P1 = { color1?: string, margin?: number };
export const c: Node<P> = {
    '': {
        color: 'red',
    },
    ':focus': {
        color: '1',
    },
    ':focus:active': {
        margin: 5,
    },
    ':focus:disable': {
        margin: 5,
    },
    ':focus:active:disable': {
        color: 'blue'
    },
    ':disable': {
        color: 'yellow',
        margin: 7
    }
}
export const c1: Node<P> = {
    '': {
        color: 'red',
        margin: 0,
    },
    ':focus': {
        margin: 1,
    },
    ':focus:active': {
        margin: 2,
    },
    ':focus:disable': {
        margin: 3,
    },
    ':focus:active:disable': {
        margin: 4,
    },
    ':disable': {
        margin: 5,
    }
}
const map1 = (a: P): P1 => a.color ? { ...omit(a, 'color'), color1: a.color + 1 } : a;


const value = keyMap.of(c);
const value1 = keyMap.of(c1);
describe('KeyMap', () => {
    it('map', () => {
        expect(value.map(map1).value).toEqual({
            '': { color1: 'red1' },
            ':focus': { color1: '11' },
            ':focus:active': { margin: 5 },
            ':focus:disable': { margin: 5 },
            ':focus:active:disable': { color1: 'blue1' },
            ':disable': { margin: 7, color1: 'yellow1' }
        })

    })
    it('chain with empty key ', () => {
        const map2 = (a: P,key:string): StringMap<P1> => {
            if (a.color) {
                return keyMap.of({
                    [key]: { ...omit(a, 'color'), color1: a.color + 1 },
                })
            } else {
                return keyMap.of({[key]:a}) 
            }
        }
        expect(keyMap.chain(value, map2).value).toEqual({
            '': { color1: 'red1' },
            ':focus': { color1: '11' },
            ':focus:active': { margin: 5 },
            ':focus:disable': { margin: 5 },
            ':focus:active:disable': { color1: 'blue1' },
            ':disable': { margin: 7, color1: 'yellow1' }
        })

    })
    it('chain with simply key', () => {
        const map3 = (a: P,key:string): StringMap<P1> => {
            if (a.color) {
                return keyMap.of({
                    [key]: { ...omit(a, 'color'), color1: a.color + 1 },
                    [`${key}:focus`]: {
                        color1: 'blue'
                    },
                })
            } else {
                return keyMap.of({[key]:a}) 
            }


        }
        const result = keyMap.chain(value1, map3);
        expect(result.value).toEqual({
            '': {  margin: 0, color1: 'red1' },
            ':focus': { color1: 'blue', margin: 1 },
            ':focus:active': { margin: 2 },
            ':focus:disable': { margin: 3 },
            ':focus:active:disable': { margin: 4 },
            ':disable': { margin: 5 }
        })

    }) 
     it('chain with repeat key', () => {
        const map3 = (a: P,key:string): StringMap<P1> => {
            if (a.color) {
                return keyMap.of({
                    [key]: { ...omit(a, 'color'), color1: a.color + 1 },
                    [`${key}:focus`]: {
                        color1: 'blue'
                    },
                })
            } else {
                return keyMap.of({[key]:a}) 
            }


        }
        const result = keyMap.chain(value, map3);
        expect(result.value).toEqual({
            '': { color1: 'red1' },
            ':focus': { color1: '11' },
            ':focus:focus': { color1: 'blue' },
            ':focus:active': { margin: 5 },
            ':focus:disable': { margin: 5 },
            ':focus:active:disable': { color1: 'blue1' },
            ':disable': { margin: 7, color1: 'yellow1' },
            ':focus:active:disable:focus': { color1: 'blue' },
            ':disable:focus': { color1: 'blue' }
        })

    }) 
})



