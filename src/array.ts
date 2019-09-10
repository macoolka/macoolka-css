import { array as A } from 'macoolka-collection';
import { Predicate } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
/**
 *  Find the element which satisfies a predicate (or a refinement) function
 * @function
 * @since 1.0.0
 */
export const findStep = (step: number = 0) =>
    <A>(predicate: Predicate<A>)=>(as: Array<A>): O.Option<A> =>
        pipe(
            as,
            A.findFirstIndex(predicate),
            O.chain(a => pipe(
                as,
                A.getAt(a + step),

                O.fold(() => {
                    return (step >= 0) ? A.last(as) : A.first(as)
                }, b => {
                    return O.some(b) as O.Option<A>
                })
            )

            )
        )



