import { fold,map} from './CssSelector';
describe('CssSelector ', () => {
    const selector={focus:{color:'black'},hover:{color:'yellow',padding:1}};
    const selector1={focus:{color:'red',padding:2}};
    const selector2={active:{color:'green'},focus:{top:2}};
    const color=(a:any)=>a['color']?({...a,color:'new'}):a;

    it('map', () => {
        expect(map(selector,color)).toEqual({focus:{color:'new'},hover:{color:'new',padding:1}})
    });
    it('fold',()=>{
        expect(fold()([selector1,selector,selector2])).toEqual({
            focus:{color:'black',padding:2,top:2},
            hover:{color:'yellow',padding:1},
            active:{color:'green'},
        })
    })
/*     it('optionMap',()=>{
        const inputs=some(selector);
        expect(optionMap().map(inputs,color).toUndefined()).toEqual({focus:{color:'new'},hover:{color:'new',padding:1}})
        expect(optionMap().map(none,color).toUndefined()).toBeUndefined();
    }) */
})