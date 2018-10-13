import { CssNode,CssSelector } from '../src/base';
import { UnitProps as Props } from '../src/basic';
/**
 * CssProperties
 */
const p0: Props = {}
const p1: Props  = { width: '10px' }
const p2: Props  = { width: 10 }
// $ExpectError
const p3: CssNode<Props> = { mkWidth: 'test' }
// $ExpectError
const p4: CssNode<Props> = { mkWidth: 10 }
/**
 * CssPseudos
 */
const selector0: CssSelector<Props> = { ':focus': { width: 10, height: '2px' } }
const selector1: CssSelector<Props> = { ':focus': { width: '100px', height: '2px' } }
// $ExpectError
const selector2: CssSelector<Props> = { ':focus': { mkWidth: 10 } }

//
// Css
//
const a0: CssNode<Props>  = { color: 'red', selector: { ':focus': { width: 100 } } }
const a1: CssNode<Props>  = { color: 'red' }
const a2: CssNode<Props>  = { color: 'red', selector: { ':focus': { width: '100px' } } }
const e1: CssNode<Props>  = { width: 10 }
// $ExpectError
const e3: CssNode<Props>  = { color: 'red', selector: { ':focus': { mkWidth: 10 } } }
// $ExpectError
const e4: CssNode<Props>  = { color: 'red', mkWidth: 10 }
