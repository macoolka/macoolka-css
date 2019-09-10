
import { CssNode, CssProperties, Rule as _Rule, RuleModule, ExtendRule, GetRuleProp, extendRuleModule } from '../../CssRule';
export interface Props<P extends CssProperties> {

    /**
     * array value match media
     */
    /**
     * 值是 [Css Node]
     * @language cn
     */
    mkChildren?: CssNode<P>
    mkFirstChild?: CssNode<P>
    mkLastChild?: CssNode<P>
    /*     mkChildMarginLeft?: Level
        mkChildMarginTop?: Level
        mkChildMarginRight?: Level
        mkChildMarginBottom?: Level */
};
export type Rule<R extends _Rule> = ExtendRule<R, Props<GetRuleProp<R>>>
const rule: Rule<any> = {
    rule: {
        mkChildren: ({ value }: { value: any }) => ({
            selector: {
                '>*': value
            }
        }),
        mkFirstChild: ({ value }: { value: any }) => ({
            selector: {
                '>*:first-child': value
            }
        }),
        mkLastChild: ({ value }: { value: any }) => ({
            selector: {
                '>*:last-of-type': value
            }
        }),
        /*        mkChildMarginLeft: ({ value }) => ({
                   selector: {
                       '>*': {
                           mkMarginLeft: value,
                       },
                       '>*:first-child': {
                           mkMarginLeft: 'none',
                       }
                   }
               }) as CssNode<P>,
               mkChildMarginRight: ({ value }) => ({
                   selector: {
                       '>*': {
                           mkMarginRight: value,
                       },
                       '>*:first-child': {
                           mkMarginRight: 'none',
                       }
                   }
               }) as CssNode<P>,
               mkChildMarginBottom: ({ value }) => ({
                   selector: {
                       '>*': {
                           mkMarginBottom: value,
                       },
                       '>*:first-child': {
                           mkMarginBottom: 'none',
                       }
                   }
               }) as CssNode<P>,
               mkChildMarginTop: ({ value }) => ({
                   selector: {
                       '>*': {
                           mkMarginTop: value,
                       },
                       '>*:first-child': {
                           mkMarginTop: 'none',
                       }
                   }
               }) as CssNode<P>, */
    },
};




export const extendRule = <R extends _Rule>(parentRule: RuleModule<R>): RuleModule<Rule<R>> => {
    return extendRuleModule(parentRule)({
        rule: rule,
        theme: {}
    })

}
