
import {  ruleModule } from '../../../advance';
import { extendRule } from '../index';
import {  parseProp } from '../../../CssRule'
const _input=extendRule(ruleModule)
const parse = parseProp(_input)

describe('unit', () => {
  it('parse to object', () => {
    expect(parse({
      color: 'red',
      selector: { 'focus': { height: '12px' } },
      mkChildren: { mkMargin: 'medium' }
    })).
      toEqual({
        "color": "red",
        "selector":
        {
          ">*": { "margin": "16px" },
          "focus": { "height": "12px" }
        }
      }
      )

  })
})