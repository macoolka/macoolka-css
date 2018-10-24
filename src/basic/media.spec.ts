import { theme, parseRule } from '../'
const parse = parseRule({}, theme);


describe('unit', () => {
    it('parse to object', () => {
        expect(parse({})).toEqual('\n\n')
        expect(parse({
            color: 'red',
            selector: { 'focus': { height: '12px' } },
            mkMedia: [{ width: '10px' }, { mkWidth: 'full' }, { width: '300px' }, { width: '700' }, { width: '800' }]
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
                    ':focus':{
                        height: '1px',
                    }
                },

            }, { 
                mkWidth: 'full',
                selector: {
                    ':focus':{
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
}`
            )
    })
})