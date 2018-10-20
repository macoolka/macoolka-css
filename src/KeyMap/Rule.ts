
import { fromNullable, getMonoid as getMonoidOption, Option } from 'mocoolka-fp/lib/Option';
import { StandRule, getMonoid as cssRuleGetMonoid, Input,
    parse as ruleParse, Data, fromEnity, toEntity, InputOverwrite } from './StandRule';
import { EnumRule, enumCssRuleGetCssRule, RuleEnumProp } from './EnumRule';
import { Getter } from 'mocoolka-fp/lib/Monocle';
import { fold as _fold } from 'mocoolka-fp/lib/Monoid';
import { record } from 'mocoolka-fp/lib/Record';
import { keyMap, fold as mapFold } from './KeyMap';
import { SNode, parseSNode, InputNode } from './Node';
export {
    fromEnity,
    toEntity,
    Input,
    RuleEnumProp,
    InputOverwrite,
};
/**
 * Properties is css properties's type
 * @type
 */
export const getMonoid = <I extends object= {},
    IEnums extends RuleEnumProp= {}, O extends object= {},
    T extends object= {}>() => record<Rule<I, IEnums, O, T>>();
export const fold = <I extends object= {},
    IEnums extends RuleEnumProp= {}, O extends object= {},
    T extends object= {}>() => _fold(getMonoid<I, IEnums, O, T>());
/**
 * The define rule how covert from a properties type to another properties type
 */

export type Rule<I extends object= {},
    IEnums extends RuleEnumProp= {}, O extends object= {}, T extends object= {}> = {
        rule?: StandRule<I, O, T>,
        ruleEnum?: EnumRule<IEnums, O, T>,
        style?: SNode<O>
    };

export const ruleGetStandRule = <I extends object= {},
    IEnums extends RuleEnumProp= {}, O extends object= {}, T extends object= {}>() =>
    new Getter<Rule<I, IEnums, O, T>, StandRule<I & IEnums, O, T>>(rule => {
        const b = fromNullable(rule.rule) as Option<StandRule<I & IEnums, O, T>>;
        const a = fromNullable(rule.ruleEnum).map(enumCssRuleGetCssRule) as Option<StandRule<I & IEnums, O, T>>;
        const m = cssRuleGetMonoid<I & IEnums, O, T>();
        return getMonoidOption(m).concat(a, b).getOrElse(m.empty);

    });
export const parse = <I extends object= {},
    IEnums extends RuleEnumProp= {}, O extends object= {}, T extends object= {}>
    (rule: Rule<I, IEnums, O, T>,
     themeDefaultValue: T) => new Getter<Data<Input<I & IEnums, O>, T>, Data<O, T>>(value => {

        const ruleM = ruleGetStandRule<I, IEnums, O, T>().get(rule);

        const ruleResult = ruleParse<I & IEnums, O, T>(ruleM, themeDefaultValue).get(value as any).data;

        const b = keyMap.of(parseSNode(fromNullable(rule.style).getOrElse({} as SNode<O>)));

        return ({
            data: mapFold<O>()([b, ruleResult]),
            theme: value.theme,
        });
    });
export const parseOverWrite = <I extends object= {},
    IEnums extends RuleEnumProp= {}, O extends object= {}, T extends object= {}>
    (rule: Rule<I, IEnums, O, T>,
     themeDefaultValue: T) => new Getter<Data<InputOverwrite<I & IEnums, O>, T>, Data<O, T>>(value => {

        const ruleM = ruleGetStandRule<I, IEnums, O, T>().get(rule);

        const ruleResult = ruleParse<I & IEnums, O, T>(ruleM, themeDefaultValue).get(value as any).data;

        const b = keyMap.of(parseSNode(fromNullable(rule.style).getOrElse({} as SNode<O>)));

        return ({
            data: mapFold<O>()([b, ruleResult]),
            theme: value.theme,
        });
    });
export const parseFromNodeToNode = <
    S extends object= {},
    E extends RuleEnumProp= {},
    O extends object= {},
    T extends object= {}>(rule: Rule<S, E, O, T>, themeDefaultValue: T) =>
    (a: InputNode<Input<S & E, O>, T>): O =>
        toEntity(parse(rule, themeDefaultValue).get(fromEnity(a)));
export const parseToNodeWithGetter1 = <
    S extends object= {},
    E extends RuleEnumProp= {},
    O extends object= {},
    T extends object= {}>(m: (a: Data<Input<S & E, O>, T>) => Data<O, T>) =>
    (a: InputNode<Input<S & E, O>, T>): O =>
        toEntity(m(fromEnity(a)));
export const parseToNodeWithGetter = <
    S extends object= {},
    E extends RuleEnumProp= {},
    O extends object= {},
    T extends object= {}>(m: Getter<Data<Input<S & E, O>, T>, Data<O, T>>) =>
    (a: InputNode<Input<S & E, O>, T>): O =>
        toEntity(m.get(fromEnity(a)));
/* export const parseOverwriteProps = <I extends CssProperties= {},
    IEnums extends EnumProperty= {}, O extends CssProperties= {}, T extends CssTheme= {}>
    (rule: Rule<I, IEnums, O, T>,
     themeDefaultValue: T): Getter<CssEntity<OverwriteInput<I & IEnums, O>, T>, NodeTree<O>> =>
    cssEntityIOGetCssEntityO<I & IEnums, O, T>(ruleGetCssRule<I, IEnums, O, T>().get(rule), themeDefaultValue);
 */
