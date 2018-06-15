import { withDefaults as _withDefaults } from 'mocoolka-fp/lib/object';
import { Semigroup, semigroupAny } from 'mocoolka-fp/lib/Semigroup';
import { Is } from 'mocoolka-fp/lib/predicate';
import {merge} from 'mocoolka-fp/lib/object';
// import { getGetVariableValueMerge } from './Merge';
import { VProps, VPropsMerge, TNodeValue, TVariable } from './type';

export const getIsSemigroup = <A = never>(): Semigroup<Is<A>> => {
    return {
        concat: (f, g) => (a): a is A => semigroupAny.concat(f(a), g(a)),
    };
};

export const getGetVariableValueMerge = <A1 extends TNodeValue, A2>():
    Semigroup<VProps<A1, A2>> => ({
        concat: (x, y) => ({
            variable: merge(x.variable, y.variable),
            isNodeValue: getIsSemigroup<A1>().concat(x.isNodeValue, y.isNodeValue),
            getVariableValue: (value) => (variable) =>
                x.isNodeValue(value) ? x.getVariableValue(value)(variable) : y.getVariableValue(value)(variable),
        }),
    });

export const compose = <NodeValue extends TNodeValue, Variable extends TVariable,
    NodeValue1 extends TNodeValue, Variable1 extends TVariable>
    (a: VProps<NodeValue, Variable>, b: VProps<NodeValue1, Variable1>):
    VPropsMerge<NodeValue, Variable, NodeValue1, Variable1> =>
    getGetVariableValueMerge<NodeValue | NodeValue1, Variable & Variable1>().concat(a as any,
        b as any);

export const emptyVariableTheme = <NodeValue extends TNodeValue, Variable extends TVariable>():
    VProps<NodeValue, Variable> => ({
        variable: {} as Variable,
        isNodeValue: (a: any): a is NodeValue => false,
        getVariableValue: (a: NodeValue) => (t: Variable) => '',
    });
export const of = <NodeValue extends TNodeValue, Variable extends TVariable>(a?: Partial<VProps<NodeValue, Variable>>):
    VProps<NodeValue, Variable> => _withDefaults(emptyVariableTheme<NodeValue, Variable>())(a);
