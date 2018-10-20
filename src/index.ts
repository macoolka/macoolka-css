
import {
    parse, Props, Theme, theme, parseJss,
    OutProps, parseRuleJSS, parseMediaJss, parseMediaRule,
     parseRule, parseRuleMap, OutRule, parseMedia, parseMediaRuleMap,
    parseMediaRuleJss,
} from './mix';
import { MediaInput } from './basic';
import { CssProperties, InputNode, CssNode } from './css';

export type OutputPropsMedia<T extends CssProperties> = MediaInput<OutProps<T>>;
import { Animations, animations } from './modules/effect/animations';

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

    parseRule,
    parseRuleJSS,

    parseMediaRuleMap,
    parseRuleMap,

    parse,
    parseJss,

    parseMedia,
    parseMediaJss,

    parseMediaRule,
    parseMediaRuleJss
};
