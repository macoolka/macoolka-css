
import { StrMap, strmap, getMonoid as _getMonoid } from 'mocoolka-fp/lib/StrMap';
export * from 'mocoolka-fp/lib/StrMap';
import { fold as _fold } from 'mocoolka-fp/lib/Monoid';
import { Semigroup, getObjectSemigroup } from 'mocoolka-fp/lib/Semigroup';
import {Node} from './Node';
export class StringMap<T> extends StrMap<T> {

}

const chain = <A extends object = never, B extends object = never>
    (a: StringMap<A>, f: (a: A, key: string) => StringMap<B>, m: Semigroup<B> = getObjectSemigroup<B>()) => {
    const value = a.value;
    const keys = Object.keys(value);
    const result: StringMap<B>[] = [];
    for (const keyA of keys) {
        const bMap = f(value[keyA], keyA);
        result.push(bMap);
        /*  const bMapValue = bMap.value
         const bMapValueKeys = Object.keys(bMapValue)
         for (const keyB of bMapValueKeys) {
          // const newKey=m.concat(keyA,keyB);
           if(result[keyB]){
               result[keyB]=merge(result[keyB],bMapValue[keyB])
           }else{
               result[keyB]=bMapValue[keyB];
           }
         } */
    }
    return _fold(getMonoid(m))(result);
};
export const getMonoid = <T extends object>(m: Semigroup<T> = getObjectSemigroup<T>()) => _getMonoid(m);
export const fold = <T extends object>(m?: Semigroup<T>) => _fold(getMonoid(m));
export const keyMap = {
    ...strmap,
    of: <T extends object>(a: Node<T>) => {
        return new StringMap(a);
    },
    chain,
};
