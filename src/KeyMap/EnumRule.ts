
import { SNode } from './Node';
import { mapValues } from 'mocoolka-fp/lib/object';
import { isFunction } from 'mocoolka-fp/lib/predicate';
import { RuleValue, StandRule, parse as _parse } from './StandRule';
import { Monoid, monoidString, fold as _fold } from 'mocoolka-fp/lib/Monoid';
export * from './StandRule';
export type RuleEnumProp = { [key: string]: string | undefined };
/* type RuleEnumValueFunction<I extends RuleEnumProp, K extends keyof I, T extends object, O extends object> = {
    [name in NonNullable<I[K]>]: RuleValueFunction<I, K, T, O> | Node<O>
};
 */
export type EnumRule<I extends RuleEnumProp, O extends object, T extends object> = {
    [K in keyof I]: {
        [name in NonNullable<I[K]>]: (a: RuleValue<I, K, T>) => SNode<O>;
    };
};

export const enumCssRuleGetCssRule =
    <I extends RuleEnumProp, O extends object, T extends object>
        (ruleEnum: EnumRule<I, O, T>) =>
        mapValues(ruleEnum, a => {
            const fn = (b: RuleValue<I, keyof I, T>): SNode<O> => {
                if (isFunction(a[b.value])) {
                    return (a[b.value] as any)(b);
                }

                return a[b.value] as any;

            };

            return fn;
        }) as StandRule<I, O, T>;

export const parse = <I extends RuleEnumProp, O extends object, T extends object>
    (rule: EnumRule<I, O, T>, themeDefaultValue: T, nameMonoid: Monoid<string> = monoidString) =>
    _parse(enumCssRuleGetCssRule(rule), themeDefaultValue, nameMonoid);
