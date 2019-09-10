export  * from 'macoolka-css-rule'
import { StandardProperties, SvgProperties, VendorLonghandProperties } from 'csstype';
import {Rule} from 'macoolka-css-rule'
/**
 * The Provide MDN CssProperties
 * @since 0.2.0
 */
export type BaseProps = StandardProperties<string> & SvgProperties<string> & VendorLonghandProperties<string>;
/**
 * Base Rule is output that is origial css
 * All Rule will final parse to the rule
 * @desczh
 * 基本规则输出是原始的css
 * 所有的规则最后解析到这里
 * @desczh
 */
export type BaseRule = Rule<{}, {}, BaseProps, {}>