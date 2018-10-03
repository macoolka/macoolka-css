import { CssNode, CssSelector, BaseProps } from '../src/base';
import { CssNode, CssSelector, BaseProps } from '../src/base';

/**
 * CssProperties
 */
const p0: BaseProps = {}
const p1: BaseProps  = { color: 'red' }
const p2: BaseProps  = { color: 'red', height: '2px' }
// $ExpectError
const p3: CssNode<BaseProps> = { c: 'test' }
// $ExpectError
const p4: CssNode<BaseProps> = { width: 'red', c: 'test' }
/**
 * CssPseudos
 */
const selector0: CssSelector<{}> = {}
const selector1: CssSelector<BaseProps> = { ':focus': { width: '100px', height: '2px' } }
// $ExpectError
const selector2: CssSelector<BaseProps> = { ':focus': { width: '100px', c: '1' } }

//
// Css
//
const a0: CssNode<BaseProps>  = {}
const a1: CssNode<BaseProps>  = { color: 'red' }
const a2: CssNode<BaseProps>  = { color: 'red', selector: { ':focus': { width: '100px' } } }
// $ExpectError
const e1: CssNode<BaseProps>  = { c: 'test' }

// todo:this is a question
// const e2: Css = { color: 'red', selector: { ':focus': { width: '100px', c:'1', height: '3' } } }
// $ExpectError
const e3: CssNode<BaseProps>  = { color: 'red', selector: { ':focus': { width: '100px', c: '1' } }, g: '4' }
// $ExpectError
const e4: CssNode<BaseProps>  = { color: 'red', c: '1' }
