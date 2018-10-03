import { parse as basicParse, theme as basicTheme } from '../../basic';
import rule, { theme } from './index'
const parse = basicParse(rule)({ ...theme, ...basicTheme });

describe('effect', () => {
    it('parse effect', () => {
        expect(parse({
            mkFlip: 'horizontal',
        })).toEqual({
            transform: 'scale(-1, 1)'
        });
        expect(parse({
            mkRotate: 30,
        })).toEqual({
            transform: `rotate(${30}deg)`
        });
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
        expect(parse({
            mkTransition: 'color,width'
        })).toEqual({
            "transitionDelay": "0ms",
            "transitionDuration": "200ms",
            "transitionProperty": "color,width",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
        });
        expect(parse({
            mkShadow: 4
        })).toEqual({"boxShadow": "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"});
    })

});

