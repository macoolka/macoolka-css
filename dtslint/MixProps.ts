// TypeScript Version: 3.1
import { CssNode,CssSelector } from '../src/base';
import { MixProps as Props } from '../src/mix';
/**
 * CssProperties
 */
const p0: Props = {}
const p1: Props  = { width: '10px' }
const p2: Props  = { width: 10 }
const p3: CssNode<Props> = { mkWidth: 'full' }
// $ExpectError
const p4: CssNode<Props> = { mkTypography: 'h1' }
// $ExpectError
const p5: CssNode<Props> = { mkWidth: 'error' }
// $ExpectError
const p6: CssNode<Props> = { mkTypography: 'error' }
/**
 * CssPseudos
 */
const selector0: CssSelector<Props> = { ':focus': { width: 10, height: '2px' } }
const selector1: CssSelector<Props> = { ':focus': { width: '100px', height: '2px' } }
const selector2: CssSelector<Props> = { ':focus': { mkWidth: 'full' } }
const selector3: CssSelector<Props> = { ':focus': {  mkTypography: 'h1' } }
// $ExpectError
const selector4: CssSelector<Props> = { ':focus': { mkWidth: 'error' } }
// $ExpectError
const selector5: CssSelector<Props> = { ':focus': { mkTypography: 'error' } }
//
// Css
//
const a0: CssNode<Props>  = { color: 'red', selector: { ':focus': { width: 100 } } }
const a1: CssNode<Props>  = { color: 'red' }
const a2: CssNode<Props>  = { color: 'red', selector: { ':focus': { width: '100px' } } }
const e1: CssNode<Props>  = { width: 10 }
const e3: CssNode<Props>  = { color: 'red', selector: { ':focus': { mkWidth: 'full' } } }
const e4: CssNode<Props>  = { color: 'red',  mkTypography: 'h1' }
// $ExpectError
const e5: CssNode<Props>  = { color: 'red', mkWidth: 10 }
// $ExpectError
const e6: CssNode<Props>  = { color: 'red', mkTypography: 10 }
