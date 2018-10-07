import { fold,getProps,getSelector,setProps,setSelector,map,isEmpty} from './CssNode';
import {none,some} from 'mocoolka-fp/lib/Option'

describe('CssNode ', () => {
    const prop={color:'red'};
    const selector={focus:{color:'black'}};
    const basic={...prop,selector}
    it('get isEmpty', () => {
        expect(isEmpty({})).toEqual(true)
        expect(isEmpty({a:1})).toEqual(false)
        expect(isEmpty({selector:{}})).toEqual(false)
    });
    it('get empty', () => {
        const cssNode={};
        expect(getProps(cssNode)).toEqual({})
        expect(getSelector(cssNode)).toEqual(none)
    });
    it('get entity', () => {
        const cssNode=basic;
        expect(getProps(cssNode)).toEqual(prop)
        expect(getSelector(cssNode)).toEqual(some(selector))
    });
    it('set entity', () => {
        const cssNode=basic;
        expect(setProps({color:'blue'})(cssNode)).toEqual({color:'blue',selector:{focus:{color:'black'}}})
        expect(setSelector({focus:{color:'blue'}})(cssNode)).toEqual({color:'red',selector:{focus:{color:'blue'}}})
    });
    it('map', () => {
        const cssNode=basic;
        const transfrom=()=>({color:'blue'});
        expect(map(cssNode,transfrom)).toEqual({color:'blue',selector:{focus:{color:'blue'}}})
    });
    it('fold', () => {
        const node={color:'red',bottom:2,selector:{focus:{color:'black',margin:3},hover:{color:'yellow',padding:1}}};
        const node1={color:'blck',top:2,selector:{focus:{color:'red',padding:2},active:{color:'black'}}};
        expect(fold()([node,node1])).toEqual({
            color:'blck',
            top:2,
            bottom:2,
            selector:{
                focus:{color:'red',padding:2,margin:3},
                hover:{color:'yellow',padding:1},
                active:{color:'black'}
            }
        })
    });

})