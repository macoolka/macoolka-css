import {  ruleModule } from '../../../advance';
import { extendRule } from '../index';
import {  parse as _parse } from '../../../CssRule'
const _input=extendRule(ruleModule)
const parse = _parse(_input)

describe('unit', () => {
  it('parse to object', () => {
    expect(parse({})).toEqual('')
    expect(parse({
      color: 'red',
      selector: { 'focus': { height: '12px' } },
      mkMedia: [{ width: '10px' }, { width: '300px' }, { width: '700px' }, { width: '800px' }]
    })).
      toEqual(
        `color: red;
focus {
  height: 12px;
}
@media screen and (max-width: 120em) {
  width: 800px;
}
@media screen and (max-width: 93em) {
  width: 700px;
}
@media screen and (max-width: 80em) {
  width: 300px;
}
@media screen and (max-width: 50em) {
  width: 10px;
}
`
      )
    expect(parse({
      color: 'red',
      selector: {
        'focus':
        {
          height: '12px',
        }
      },
      mkMedia: [{
        width: '10px',
        selector: {
          ':focus': {
            height: '1px',
          }
        },

      }, {
        width: '100%',
        selector: {
          ':focus': {
            height: '2px',
          }
        },
      }, { width: '300px' }, { width: '700' }, { width: '800' }]
    })).
      toEqual(
        `color: red;
focus {
  height: 12px;
}
@media screen and (max-width: 120em) {
  width: 700;
}
@media screen and (max-width: 93em) {
  width: 300px;
}
@media screen and (max-width: 80em) {
  width: 100%;
}
@media screen and (max-width: 50em) {
  width: 10px;
}
@media screen and (max-width: 80em) {
  :focus {
    height: 2px;
  }
}
@media screen and (max-width: 50em) {
  :focus {
    height: 1px;
  }
}
`
      )
  })
})