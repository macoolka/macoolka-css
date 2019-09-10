
import {merge} from 'macoolka-object';

import {  ruleModule } from '../index'
import { parseProp } from '../../../CssRule';
const parse = parseProp(ruleModule);
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
        it('mkTransitionDelay', () => {
            expect(parse({
                mkTransitionDelay: 'shorter',
            })).toEqual({
                "transitionDelay": "200ms",
               
            });
        });
        it('mkTransitionDuration', () => {
            expect(parse({
                mkTransitionDuration: 'shorter',
            })).toEqual({
                "transitionDuration": "200ms",
               
            });
        });
        it('mkTransitionTimingFunction', () => {
            expect(parse({
                mkTransitionTimingFunction: 'easeInOut',
            })).toEqual({
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
        it('mkAnimationCount', () => {
            expect(parse({
                mkAnimationCount: 2})).toEqual({
                animationIterationCount:2
            });
        });
        it('mkAnimationDelay', () => {
            expect(parse({
                mkAnimationDelay: 'shorter'})).toEqual({
                    animationDelay:'200ms'
            });
        });
        it('mkAnimationDuration', () => {
            expect(parse({
                mkAnimationDuration: 'shorter'})).toEqual({
                    animationDuration:'200ms'
            });
        });
        it('mkAnimationTimingFunction', () => {
            expect(parse({
                mkAnimationTimingFunction: 'easeInOut'})).toEqual({
                    animationTimingFunction:'cubic-bezier(0.4, 0, 0.2, 1)'
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
       
      //  const parse1 = parse()(merge({},theme,{effect:{animations:{hide:'hide1'}}}))(rule);
        expect(parse({
            mkAnimation: 'hide',
            theme:merge({},ruleModule.theme,{ effect:{animations:{hide:'hide1'}},})

        })).toEqual({
            "animationDelay": "0ms",
            "animationDuration": "200ms",
            "animationName": "hide1",
            "animationTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            animationIterationCount:1
        });       
     
    })

});

