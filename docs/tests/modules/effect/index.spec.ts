import { parseUnitProp as _parse} from '../../basic';
import {theme,rule} from './index';
import {merge} from 'mocoolka-fp/lib/object';
const parse = _parse(rule,theme);

describe('effect', () => {
    it('should parse prop mkFlip ', () => {
        expect(parse({
            mkFlip: 'horizontal',
        })).toEqual({
            transform: 'scale(-1, 1)'
        });
    });
    it('should parse prop mkRotate ', () => {
        expect(parse({
            mkRotate: 30,
        })).toEqual({
            transform: `rotate(${30}deg)`
        });
    });
    describe('should parse prop mkTransition',()=>{
        it('should parse all properties', () => {
            expect(parse({
                mkTransition: {
                    property: 'color',
                    duration: 'shorter',
                    ease: 'easeInOut',
                    delay: 'shorter',
                },
            })).toEqual({
                "transitionDelay": "200ms",
                "transitionDuration": "200ms",
                "transitionProperty": "color",
                "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
            });
        });
        it('should parse part properties', () => {
            expect(parse({
                mkTransition: {
                    property:'color,width',
                    delay: 'shorter',
                }
            })).toEqual({
                "transitionDelay": "200ms",
                "transitionDuration": "200ms",
                "transitionProperty": "color,width",
                "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
            });
            expect(parse({
                mkTransition: 'color,width'
            })).toEqual({
                "transitionDelay": "0ms",
                "transitionDuration": "200ms",
                "transitionProperty": "color,width",
                "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
            });
        });
        it('should parse short name', () => {

            expect(parse({
                mkTransition: {
                    property:'color,width'
                }
            })).toEqual({
                "transitionDelay": "0ms",
                "transitionDuration": "200ms",
                "transitionProperty": "color,width",
                "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
            });

        })
    })
    describe('should parse prop mkAnimation',()=>{
        it('should parse all properties', () => {
            expect(parse({
                mkAnimation: {
                    name: 'hide',
                    duration: 'shorter',
                    ease: 'easeInOut',
                    delay: 'shorter',
                    count:1,
                },
            })).toEqual({
                "animationDelay": "200ms",
                "animationDuration": "200ms",
                "animationName": "hide",
                "animationTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                animationIterationCount:1
            });
        });
        it('should parse part properties', () => {
            expect(parse({
                mkAnimation: {
                    name:'hide',
    
            }})).toEqual({
                "animationDelay": "0ms",
                "animationDuration": "200ms",
                "animationName": "hide",
                "animationTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                animationIterationCount:1
            });
            expect(parse({
                mkAnimation: {
                    name:'hide',
                    count:2
    
            }})).toEqual({
                "animationDelay": "0ms",
                "animationDuration": "200ms",
                "animationName": "hide",
                "animationTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                animationIterationCount:2
            });
        });
        it('should parse short name', () => {

            expect(parse({
                mkAnimation: 'hide'
            })).toEqual({
                "animationDelay": "0ms",
                "animationDuration": "200ms",
                "animationName": "hide",
                "animationTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                animationIterationCount:1
            });

        })
    })
    it('should parse customer mkAnimation', () => {
       
        const parse1 = _parse(rule,merge({},theme,{effect:{animations:{hide:'hide1'}}}));
        expect(parse1({
            mkAnimation: 'hide',

        })).toEqual({
            "animationDelay": "0ms",
            "animationDuration": "200ms",
            "animationName": "hide1",
            "animationTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            animationIterationCount:1
        });       
        expect(parse({
            mkShadow: 4
        })).toEqual({"boxShadow": "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"});
    })

});

