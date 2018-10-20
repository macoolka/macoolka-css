import { omit } from 'mocoolka-fp/lib/object';
import { fromNullable } from 'mocoolka-fp/lib/Option';
import { mapValues } from 'mocoolka-fp/lib/object';
import { record } from 'mocoolka-fp/lib/Record';
import { fold as _fold } from 'mocoolka-fp/lib/Monoid';
export type Node<T extends object = never> = { [key: string]: T };
export type SNode<T extends object> = T & {
    selector?: {
        [key in string]: SNode<T>
    }
};
export const getMonoid = <T extends object>() => record<Node<T>>();
export const fold = <T extends object>() => _fold(getMonoid<T>());
export const parseSNode = <T extends object>(a: SNode<T>): Node<T> => {

    const toNode = (leaf: string, as: SNode<T>): Node<T> => ({
        [leaf]: omit(as, 'selector'),
    });
    const results: Node<T>[] = [];
    const go = (fa: SNode<T>, leafName: string): void => {
        results.push(toNode(leafName, fa));
        fromNullable(fa.selector).map(sel => {
            mapValues(sel, (v, k) => {
                fromNullable(v).map(c => go(c, leafName + k));
            });
        });

    };
    go(a, '');
    return fold<T>()(results);
};

/**
 * The Type contiane CssNode and Theme
 * @type
 */
export type InputNode<P extends object, T extends object> = SNode<P> & { theme?: T };
