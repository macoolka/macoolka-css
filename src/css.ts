import { StandardProperties, SvgProperties, } from 'csstype';
import { ordString, ordNumber } from 'mocoolka-fp/lib/Ord';
import { partitionMap } from 'mocoolka-fp/lib/Array';
import { isNumber,isEmpty,isObject } from 'mocoolka-fp/lib/predicate';
import {left,right} from 'mocoolka-fp/lib/Either'
export * from 'csstype';
/**
 * The Provide MDN CssNode
 */
export type BaseProps = StandardProperties<string> & SvgProperties<string>;
import {
    Rule, parse as parseRule, parseFromNodeToNode, InputNode,  parseToNodeWithGetter, fromEnity, Input,
    InputOverwrite, parseOverWrite, foldRule, nodeToStringGetter, SNode,getPNode,
    toEntity as toEntity
} from './KeyMap';
const parseRuleOverwrite = parseOverWrite;




type CssTheme = object;
type CssProperties = object;
const sort=<T extends object>(a:[string, SNode<T>], b:[string, SNode<T>]) => {
    const a1 = getMediaInfoOrder(a[0]);
    const b1 = getMediaInfoOrder(b[0]);
    if (isNumber(a1) && isNumber(b1)) {
        return -ordNumber.compare(a1, b1)
    } else if (isNumber(a1)) {
        return 1;
    } else if (isNumber(b1)) {
        return -1;
    } else {
        return ordString.compare(a[0], b[0]);
    }
};
const parseToString = <T extends object>(a:SNode<T>)=>{
    let result=getPNode(a);
   const selector= result.selector;
   if(selector){
   // result=Object.assign({},omit(a,'selector'),{selector:orderSelector(selector)});
    const sortedA=selector.sort(sort);
    const mapA=partitionMap(sortedA,b=>{
        const info=getMediaInfo(b[0]);
        return isObject(info)?right([`@media screen and (max-width: ${info.value}em)`,[[info.name,b[1]]]]):left(b)
    })
    result.selector=mapA.left as [string,SNode<T>][]
    result.media=mapA.right as [string,[string,SNode<T>][]][]
   }
   return nodeToStringGetter(0).get(result);
}
const parse = parseFromNodeToNode;
export type CssNode<P extends CssProperties> = SNode<P>;

export {
    Rule,
    parseRule,
    foldRule,
     CssProperties,
    CssTheme,
    InputNode,
    parse,
    parseToNodeWithGetter,
    parseRuleOverwrite,
    fromEnity,
    toEntity,
    Input,
    InputOverwrite,
    parseToString,

};

export type OutProps<P extends CssProperties> = Input<P, BaseProps>;
export type OutRule<I extends object= {}, IEnums extends object= {},
    T extends CssTheme= {}> = Rule<I, IEnums, BaseProps, T>;

//const mediaInfo = /^@media screen and \(max-width: (\d*)em\)/i;
const mediaSelector = /^@media screen and \(max-width: (\d*)em\)([\s\S]*)/i;
export const getMediaInfo = (a: string): string | number|{value:number,name:string} => {
    const result = a.trim().match(mediaSelector);
    if (result && result.length >= 3 && result[1].length > 0){
        const name=result[2].trim();
        if(isEmpty(name)){
            return new Number(result[1]).valueOf()
        }
        return ({
            value: new Number(result[1]).valueOf(),
            name: result[2].trim()
         })
    }

    else if(result && result.length >= 2 && result[1].length > 0){
        return new Number(result[1]).valueOf()
    }
        return a;
}
export const getMediaInfoOrder = (a: string): string | number|{value:number,name:string} => {
    const result = a.trim().match(mediaSelector);
    if(result && result.length >= 2 && result[1].length > 0){
        return new Number(result[1]).valueOf()
    }
        return a;
}
/* export const getMediaInfo = (a: string): string | number => {
    const result = a.match(mediaInfo);
    if (result && result.length >= 2 && result[1].length > 0)
        return new Number(result[1]).valueOf()
    else
        return a;
} */
