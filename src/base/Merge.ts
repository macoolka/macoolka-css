import { merge } from 'mocoolka-fp/lib/object';
import { getArraySemigroup } from 'mocoolka-fp/lib/Semigroup';
import { Is } from 'mocoolka-fp/lib/predicate';
import { VProps, TNodeValue, DefaultValue } from './type';
export { merge as mergeObject };
/** @typeclass */
export interface Merge<A, B, C> {
    merge: (x: A, y: B) => C;
}
export const getIsMerge = <A, B>(): Merge<Is<A>, Is<B>, Is<A | B>> => ({
    merge: (x, y): Is<A | B> => (v: any): v is (A | B) => x(v) || y(v),
});
/** @instance */
export const getArrayMerge = <A, B>(): Merge<A[], B[], (A | B)[]> => ({
    merge: (x, y): (A | B)[] => getArraySemigroup<A | B>().concat(x, y),
});
/** @instance */
export const getObjectMerge = <A, B>
    (): Merge<A, B, (A & B)> => ({
        merge: (x, y) => merge(x, y),
    });
/* export type O<A extends string, B> = { [key in A]: B };
export type OM<A extends string, B, C extends string, D> = { [key in A]: B, [name in C]: D };
export const getKeyObjectMerge = <A1 extends string, A2, B1 extends string, B2>
    (): Merge<O<A1, A2>, O<B1, B2>, O<A1 | B1, A2 | B2>> => ({
        merge: (x, y) => merge(x, y),
    }); */
/* export type VariableTheme<A, B extends { [name: string]: any }, C> = {
    variable: B,
    isNodeValue: Is<A>,
    getVariableValue: (a: A) => (variable: B) => C
}; */
export const getGetVariableValueMerge = <A1 extends TNodeValue, A2, B1 extends TNodeValue, B2>():
    Merge<VProps<A1, A2>, VProps<B1, B2>, VProps<A1 | B1, A2 & B2>> => ({
        merge: (x, y) => ({
            kind: 'VariableTheme',
            variable: getObjectMerge<A2, B2>().merge(x.variable, y.variable),
            isNodeValue: getIsMerge<A1, B1>().merge(x.isNodeValue, y.isNodeValue),
            getVariableValue: (value: A1 | B1) => (variable: A2 & B2): DefaultValue =>
                x.isNodeValue(value) ? x.getVariableValue(value)(variable) : y.getVariableValue(value)(variable),
        }),
    });

/** @function */
/* export const getRecordMerge = <O extends { [key: string]: any }>(
    merges: { [K in keyof O]: Merge<O[K]> }
  ): Merge<O> => {
    return {
        merge: (x, y) => {
        const r: any = {}
        for (const k in merges) {
          r[k] = merges[k].merge(x[k], y[k])
        }
        return r
      }
    }
  } */
