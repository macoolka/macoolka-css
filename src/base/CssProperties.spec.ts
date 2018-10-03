import { fold,parseProps} from './CssProperties';


describe('CssProperties ', () => {
    const prop={color:'black',margin:3};
    const prop1={color:'red',padding:2};
    const prop2={color:'green'};

    it('fold',()=>{
        expect(fold()([prop,prop1,prop2])).toEqual({
            color:'green',
            padding:2,
            margin:3,
        })
    })

    it('parseProp',()=>{
        expect(parseProps<any,any>('red')(['p1','p2'])).toEqual({
            p1:'red',
            p2:'red'
        })
        expect(parseProps<any,any>('red')('color')).toEqual({
            color:'red',
        })
    })
})