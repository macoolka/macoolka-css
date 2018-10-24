
import {
    parse, Props, Theme, theme, parseJss,
    OutProps, parseRuleJSS, 
     parseRule, parseRuleMap, OutRule, 

} from './mix';
import { MediaInput } from './basic';
import { CssProperties, InputNode, CssNode ,parseToString} from './css';
import {Lens} from 'mocoolka-fp/lib/Monocle';
export type OutputPropsMedia<T extends CssProperties> = MediaInput<OutProps<T>>;
import { Animations, animations } from './modules/effect/animations';

export const typeThemeLens = Lens.fromPath<Theme, 'color', 'type'>(['color', 'type']);
export {
 
    Theme,
    theme,
    Animations,
    animations,
    CssNode,
    Props,
    OutProps,
    OutRule,
    InputNode,

    parseToString,

    parseRule,
    parseRuleJSS,

    parseRuleMap,

    parse,
    parseJss,

};
