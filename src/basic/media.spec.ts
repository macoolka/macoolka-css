import { theme,rule,Theme } from './media';
import {parse as _parse,BaseProps} from '../css'
const parse = _parse(rule<BaseProps,Theme>(),theme);


describe('unit', () => {
    it('parse to object', () => {
        expect(parse({})).toEqual({})
        expect(parse({ mkMedia: [{ width: '10px' }, { width: '100%' }, { width: '300px' }] })).
            toEqual({
                "selector": {
                    "@media screen and (max-width: 80em)":
                        { "width": "100%" },
                    "@media screen and (max-width: 93em)":
                        { "width": "300px" }
                },
                "width": "10px"
            })
            expect(parse({ selector:{'focus':{height:'12px'}},
            mkMedia: [{ width: '10px' }, { width: '100%' }, { width: '300px' }] })).
            toEqual({
                "selector": {
                    focus:{
                        height:'12px'
                    },
                    "@media screen and (max-width: 80em)":
                        { "width": "100%" },
                    "@media screen and (max-width: 93em)":
                        { "width": "300px" }
                },
                "width": "10px"
            })
    })
})