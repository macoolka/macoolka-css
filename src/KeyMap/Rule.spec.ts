import { Rule,parseFromNodeToNode } from './Rule';
type BaseProps={
    width?:string|number,
    color?:string;
    padding?:string|number,
}
describe('Rule', () => {
    it('should parse rule with defaultValue', () => {
/*         type S={ A?: number };
        type E={B?:'B1'|'B2'};
        type O=BaseProps;
        type T={color:string};
        type P=S&E; */
        const rule: Rule<{ A?: number }, {B?:'B1'|'B2'}, BaseProps,{color:string}> = {
            rule: {
                A: ({value,theme}) => {
                    return ({ width: value + 1 ,color:theme.color})
                },
            },
            ruleEnum:{
                B:{
                    B1:()=>({padding:3}),
                    B2:()=>({padding:4})
                }
            }
        };
        expect(parseFromNodeToNode(rule,{color:'red'})({ A: 1 })).toEqual({ width: 2,color:'red' });
        expect(parseFromNodeToNode(rule,{color:'red'})(({ B: 'B1' }))).toEqual({ padding: 3 });
        expect(parseFromNodeToNode(rule,{color:'red'})(({A:1, B: 'B1' }))).toEqual({ width: 2,padding: 3 ,color:'red'});
        expect(parseFromNodeToNode(rule,{color:'red'})(({width: 7,padding: 8,A:1, B: 'B1' }))).toEqual({ width: 7,padding: 8,color:'red' });
    });
    it('should parse rule with entity theme value', () => {
  /*       type S={ A?: number };
        type E={B?:'B1'|'B2'};
        type O=BaseProps;
        type T={color:string};
        type P=S&E; */
        const rule: Rule<{ A?: number }, {B?:'B1'|'B2'}, BaseProps,{color:string}> = {
            rule: {
                A: ({value,theme}) => ({ width: value + 1 ,color:theme.color}),
            },
            ruleEnum:{
                B:{
                    B1:()=>({padding:3}),
                    B2:()=>({padding:4})
                }
            }
        };
        expect(parseFromNodeToNode(rule,{color:'red'})(({ A: 1 ,theme:{color:'green'}}))).toEqual({ width: 2,color:'green' });
        expect(parseFromNodeToNode(rule,{color:'red'})(({ B: 'B1' ,theme:{color:'green'}}))).toEqual({ padding: 3 });
        expect(parseFromNodeToNode(rule,{color:'red'})(({A:1, B: 'B1' ,theme:{color:'green'}}))).toEqual({ width: 2,padding: 3 ,color:'green'});
        expect(parseFromNodeToNode(rule,{color:'red'})((
            {width: 7,padding: 8,A:1, B: 'B1',theme:{color:'green'} })))
            .toEqual({ width: 7,padding: 8,color:'green' });
    });
 
});

