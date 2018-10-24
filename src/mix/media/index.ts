
/**
 * Text
 * @prop
 */
import {  Theme, OutRule,ModuleProps } from '../../modules';
import {LevelX} from '../../modules/types';
import {arrayCompare} from 'mocoolka-fp/lib/Compare';
import {fromPredicate} from 'mocoolka-fp/lib/Option';
export interface SProps  {
    mkHide?: LevelX[]
};
export interface EProps  {
    
    

};
export interface Props extends EProps , SProps{
    
}

export const rule: OutRule<SProps, EProps,  Theme> = {
    rule: {
        mkHide: ({value})=>({
           mkMedia:[
               fromPredicate(arrayCompare.contains('small'))(value).map(_=>({mkVisible:'hidden'} as ModuleProps)).getOrElse({}),
               fromPredicate(arrayCompare.contains('medium'))(value).map(_=>({mkVisible:'hidden'} as ModuleProps)).getOrElse({}),
               fromPredicate(arrayCompare.contains('large'))(value).map(_=>({mkVisible:'hidden'} as ModuleProps)).getOrElse({}),
               fromPredicate(arrayCompare.contains('xLarge'))(value).map(_=>({mkVisible:'hidden'} as ModuleProps)).getOrElse({}),
            ] 
        }),
    },

};

export default rule;
