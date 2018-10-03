import {CssProperties} from './CssProperties';
import {CssNode} from './CssNode';
export type Css<T extends CssProperties>= {[key: string]: CssNode<T>};
