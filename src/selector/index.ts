import { Rule as _Rule, RuleModule,ExtendRule,GetRuleProp } from '../CssRule';
import * as media from './media';
import * as children from './children';
export interface Props<P extends {}> extends media.Props<P &children.Props<P>>, children.Props<P> {

}
export type Theme = media.Theme;
export { theme } from './media'

export type Rule<R extends _Rule=_Rule>=ExtendRule<R, Props<GetRuleProp<R>>,{},Theme>

export const extendRule = <R extends _Rule>(parentRule: RuleModule<R>): RuleModule<Rule<R>> => {
  
    const RuleModule=children.extendRule(parentRule)
    const mediaModel=media.extendRule(RuleModule)
    return {
        rule:mediaModel.rule as any,
        theme: mediaModel.theme ,
        next:RuleModule
    } //as RuleModule<Rule<R>> 
}
/* export const getInput = <R extends Rule>(parentRule: RuleModule<R>): RuleModule<ExtendRule<R, Props<GetRuleProp<R>>, {}, Theme>> => {
   const input= media.getInput(parentRule)

    return getFold()([
        input,
        children.getInput(input),

    ])

}
export const getInputs = <R extends Rule>(parentRule: RuleModule<R>): RuleModule[] => {
    const input= media.getInput(parentRule)

    return [
        input,
        children.getInput(input),
       
    ]

} */


