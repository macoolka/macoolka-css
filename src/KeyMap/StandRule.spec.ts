import {
    SNode
} from './Node';
import {

    StandRule,
    parse,
    Input,
    fromEnity,

} from './StandRule';
import { compose } from 'mocoolka-fp/lib/function'

type P2 = { colorM?: string };
type P = { color1?: string };
type P1 = { color?: string, margin?: number };

export const c: SNode<Input<P, P1>> = {

    color1: 'red',

    selector: {
        ':focus': {
            color1: '1',
        },
        ':focus:active': {
            margin: 5,
        },
        ':focus:disable': {
            margin: 5,
        },
        ':focus:active:disable': {
            color1: 'blue'
        },
        ':disable': {
            color1: 'yellow',
            margin: 7
        }
    }

}
export const c1: SNode<Input<P, P1>> = {

    color1: 'red',
    margin: 0,
    selector: {
        ':focus': {
            margin: 1,
        },
        ':focus:active': {
            margin: 2,
        },
        ':focus:disable': {
            margin: 3,
        },
        ':focus:active:disable': {
            margin: 4,
        },
        ':disable': {
            margin: 5,
        }
    }

}

const rule: StandRule<P, P1, {}> = {

    color1: ({ value }) => ({

        color: value + 1,

    })

};
const rule1: StandRule<P2, Input<P, P1>, {}> = {

    colorM: ({ value }) => ({

        color1: value + 1

    })

};
export const p2: SNode<Input<P2, Input<P, P1>>> = {

    colorM: 'red',
    selector: {
        ':focus': {
            colorM: '1',
        },
        ':focus:active': {
            margin: 5,
        },
        ':focus:disable': {
            margin: 5,
        },
        ':focus:active:disable': {
            colorM: 'blue'
        },
        ':disable': {
            colorM: 'yellow',
            margin: 7
        }
    }

}
export {
    compose
}
describe('FunctionRule', () => {
    it('parse', () => {
        const beginMap = fromEnity( c )
        const parseRule = parse(rule, {});
        const result = parseRule.get(beginMap);
        expect(result.data.value).toEqual({
            '': { color: 'red1' },
            ':focus': { color: '11' },
            ':focus:active': { margin: 5 },
            ':focus:disable': { margin: 5 },
            ':focus:active:disable': { color: 'blue1' },
            ':disable': { margin: 7, color: 'yellow1' }
        })

    })
    it('parse compose rule', () => {
        const beginMap = fromEnity( p2 )
        const parseRule1 = parse(rule1, {});
        const parseRule = parse(rule, {});
        const composeRule = parseRule1.compose(parseRule);
        parseRule.compose(parseRule1)
        //const result=parseRule(parseRule1(beginMap));
        const result = composeRule.get(beginMap)
        expect(result.data.value).toEqual({
            '': { color: 'red11' },
            ':focus': { color: '111' },
            ':focus:active': { margin: 5 },
            ':focus:disable': { margin: 5 },
            ':focus:active:disable': { color: 'blue11' },
            ':disable': { margin: 7, color: 'yellow11' }
        })
    })
    it('parse rule by input order', () => {
        const i: SNode<Input<P2, Input<P, P1>>> = {

            color: 'yellow',
            color1: 'green',
            colorM: 'red',
            selector: {
                ':focus': {
                    color: 'yellow',
                    color1: 'green',
                    colorM: 'red',
                },
            }


        }
        const i1: SNode<Input<P2, Input<P, P1>>> = {

            color1: 'green',
            colorM: 'red',
            selector: {
                ':focus': {
                    color1: 'green',
                    colorM: 'red',
                },
            }

        }
        const i2: SNode<Input<P2, Input<P, P1>>> = {

            colorM: 'red',
            selector: {
                ':focus': {
                    colorM: 'red',
                },
            }
        }
        const beginMap = fromEnity( i )
        const parseRule1 = parse(rule1, {});
        const parseRule = parse(rule, {});
        const composeRule = parseRule1.compose(parseRule);
        parseRule.compose(parseRule1)
        //const result=parseRule(parseRule1(beginMap));
        const result = composeRule.get(beginMap)
        expect(result.data.value).toEqual({
            '': { color: 'yellow' },
            ':focus': { color: 'yellow' },
        })
        const result1 = composeRule.get(fromEnity( i1 ))
        expect(result1.data.value).toEqual({
            '': { color: 'green1' },
            ':focus': { color: 'green1' },
        })
        expect(composeRule.get(fromEnity( i2 )).data.value).toEqual({
            '': { color: 'red11' },
            ':focus': { color: 'red11' },
        })
    })
    it('parse rule by rule order', () => {
        const ruleA: StandRule<P, P1, {}> = {

            color1: ({ value }) => ({

                color: value + 1,
                margin: 1,
                selector: {
                    ':hover': {
                        margin: 2,
                    }
                }

            })

        };
        const ruleB: StandRule<P2, Input<P, P1>, {}> = {

            colorM: ({ value }) => ({

                color1: value + 1,
                margin: 3,
                selector: {
                    ':hover': {
                        margin: 4,
                    }
                }

            })

        };
        const i: SNode<Input<P2, Input<P, P1>>> = {

            color: 'yellow',
            color1: 'green',
            colorM: 'red',
            selector: {
                ':focus': {
                    color: 'yellow',
                    color1: 'green',
                    colorM: 'red',
                },
            }

        }
        const i1: SNode<Input<P2, Input<P, P1>>> = {

            color1: 'green',
            colorM: 'red',
            selector: {
                ':focus': {
                    color1: 'green',
                    colorM: 'red',
                },
            }

        }
        const i2: SNode<Input<P2, Input<P, P1>>> = {

            color1: 'red',
            selector: {
                ':focus': {
                    color1: 'red',
                },
            }
        }
        const beginMap = fromEnity( i )
        const parseRule1 = parse(ruleB, {});
        const parseRule = parse(ruleA, {});
        const composeRule = parseRule1.compose(parseRule);
        parseRule.compose(parseRule1)
        //const result=parseRule(parseRule1(beginMap));
        const result = composeRule.get(beginMap)
        expect(result.data.value).toEqual({
            '': { color: 'yellow', margin: 3, },
            ':focus': { color: 'yellow', margin: 3, },
            ":focus:hover": { "margin": 4 },
            ":hover": { "margin": 4 }

        })
        const result1 = composeRule.get(fromEnity( i1 ))
        expect(result1.data.value).toEqual({
            '': { color: 'green1', margin: 3, },
            ':focus': { color: 'green1', margin: 3, },
            ":focus:hover": { "margin": 4 },
            ":hover": { "margin": 4 }
        })
        expect(composeRule.get(fromEnity( i2 )).data.value).toEqual({
            '': { color: 'red1', margin: 1, },
            ':focus': { color: 'red1', margin: 1, },
            ":focus:hover": { "margin": 2 },
            ":hover": { "margin": 2 }
        })
    })
    it('parse rule (object) by rule order', () => {
        const ruleA: StandRule<P, P1, {}> = {
            color1: {

                color: '1',
                margin: 1,
                selector: {
                    ':hover': {
                        margin: 2,
                    }
                }
            }

        };
        const ruleB: StandRule<P2, Input<P, P1>, {}> = {

            colorM: {

                color: '2',
                margin: 3,
                selector: {
                    ':hover': {
                        margin: 4,
                    }
                }
            }

        };
        const i: SNode<Input<P2, Input<P, P1>>> = {

            color: 'yellow',
            color1: 'green',
            colorM: 'red',
            selector: {
                ':focus': {
                    color: 'yellow',
                    color1: 'green',
                    colorM: 'red',
                },
            }

        }
        const i1: SNode<Input<P2, Input<P, P1>>> = {

            color1: 'green',
            colorM: 'red',
            selector: {
                ':focus': {
                    color1: 'green',
                    colorM: 'red',
                },
            }


        }
        const i2: SNode<Input<P2, Input<P, P1>>> = {

            color1: 'green',
            selector: {
                ':focus': {
                    color1: 'green',
                },
            }
        }
        const beginMap = fromEnity( i )
        const parseRule1 = parse(ruleB, {});
        const parseRule = parse(ruleA, {});
        const composeRule = parseRule1.compose(parseRule);
        parseRule.compose(parseRule1)
        //const result=parseRule(parseRule1(beginMap));
        const result = composeRule.get(beginMap)
        expect(result.data.value).toEqual({
            '': { color: 'yellow', margin: 3, },
            ':focus': { color: 'yellow', margin: 3, },
            ":focus:hover": { "margin": 4 },
            ":hover": { "margin": 4 }

        })
        const result1 = composeRule.get(fromEnity(i1 ))
        expect(result1.data.value).toEqual({
            '': { color: '2', margin: 3, },
            ':focus': { color: '2', margin: 3, },
            ":focus:hover": { "margin": 4 },
            ":hover": { "margin": 4 }
        })
        expect(composeRule.get(fromEnity( i2 )).data.value).toEqual({
            '': { color: '1', margin: 1, },
            ':focus': { color: '1', margin: 1, },
            ":focus:hover": { "margin": 2 },
            ":hover": { "margin": 2 }
        })
    })
    it('theme',()=>{
        type BaseProps={
            width?:string|number,
            color?:string;
            padding?:string|number,
        }
        const ruleA: StandRule<{ A?: number ,B?:number}, BaseProps, {color:string}> = {
            A: ({value,theme}) => {
                return ({ width: value + 1 ,color:theme.color})
            },
            B: ({value,theme}) => {
                return ({ width: value + 2 })
            },
        };
        const parseRule1 = parse(ruleA, {color:'red'}).get;
        expect(parseRule1(fromEnity( { A: 1 } )).data.value).toEqual({
            '': {color:'red',"width": 2},
        })
    })

})


/* 
const rule: Rule<{ A?: number }, {B?:'B1'|'B2'}, BaseProps,{color:string}> = {
    rule: {
        A: ({value,theme}) => {
            console.log(value)
            return ({ width: value + 1 ,color:theme.color})
        },
    },
    ruleEnum:{
        B:{
            B1:()=>({padding:3}),
            B2:()=>({padding:4})
        }
    }
}; */