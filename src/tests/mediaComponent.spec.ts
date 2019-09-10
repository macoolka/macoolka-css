

import { ExtendRule, RuleModule, 
    parse as _parse,parseProp as _parseProp,standRuleModule,StandRule as ParentRule } from '..';
/**
* Enum Properties's value using string or number,
* The tag 'ruleEnum' in rule describe the property style
*/
export type EProp = {
   size?: 'small' | 'medium' 
};
/**
* Stand Properties's value using any type,
* The tag 'rule' in rule describe the property style
*/
export type SProp = {
   disabled?: boolean
};
export type Rule=ExtendRule<ParentRule,SProp, EProp>
export const rule: Rule= {
   /**
    * default style
    */
   style: {
       mkFontSize:'h3',
       selector: {
           ':focus': {
              width:30,
           },
       },
       mkMedia:[{width:1,selector:{':hover':{width:10}}},{width:2,selector:{':hover':{width:20}}},{width:3,selector:{':hover':{width:30}}}]
   },
   /**
    * descirbe stand property.
    * the type is
    * propertyName :({value,name,theme,source})=>cssnode
    * value is current value.
    * name is propertyname
    * theme is gloabe theme
    * source is component props
    */
   rule: {
       disabled: ({value})=> ({
           opacity: value ? 0.38 : 1,
       }),
   },
   /**
    * descirbe enum property.
    * the type is
    * propertyName :{propertyvalue:({value,name,theme,source})=>cssnode}
    */
   ruleEnum: {
       size: {
           small: ()=>({
               mkFontSize:'h1',
               mkHoverTextColor:'accent',
               selector: {
                   ':focus': {
                      width:10,
                   },
               },
               mkMedia:[{width:11,selector:{':hover':{width:110}}},{width:2,selector:{':hover':{width:120}}},{width:13,selector:{':hover':{width:130}}}]
           }),
           medium:()=>({
               mkFontSize:'h2',
               mkMedia:[{mkPadding:'small'},{mkPadding:'medium'}],
               selector: {
                   ':focus': {
                      width:10,
                   },
               },
           }),

       },
   },
};
export const input:RuleModule<Rule>={
   rule,
   theme:standRuleModule.theme,
   next:standRuleModule,
}
export const parse = _parse(input);
describe('should parse component rule', () => {
   it('1 should parse empty props', () => {
       expect(parse({
       })).toMatchSnapshot()
   });
   it('2 should parse common props', () => {
       expect(parse({
           size:'small',
       })).toMatchSnapshot()
   });

});