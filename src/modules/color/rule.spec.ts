import { parseUnitProp as _parse} from '../../basic';
import {theme,rule} from './index'
const parse = _parse(rule,theme);

describe('parse color', () => {
    it('should parse property mkTextColor', () => {
        expect(parse({
            mkTextColor: 'main',
        })).toEqual({
            color: '#009688'
        });
        expect(parse({
            mkTextColor: 'accent',
        })).toEqual({
            color: '#f50057'
        });
    })
    it('should parse property mkTextColors', () => {
        expect(parse({
            mkTextColors: 'yellow',
        })).toEqual({"color": "#ffeb3b"});
    })
    it('should parse property mkColor', () => {
        expect(parse({
            mkColor: 'main',
        })).toEqual({
            "backgroundColor": "#009688", "color": "#fff"
        });
        expect(parse({
            mkColor: 'accent',
        })).toEqual({
            "backgroundColor": "#f50057", "color": "#fff"
        });

    })
    it('should parse property mkColors', () => {

        expect(parse({
            mkColors: 'yellow',
        })).toEqual({"backgroundColor": "#ffeb3b", "color": "rgba(0, 0, 0, 0.87)"});
    })
    it('parse bgColor Snapshot', () => {
        expect(parse({
            mkColor: 'surface',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'body',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'divider',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'success',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'warning',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'alert',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'accent',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'mini',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'small',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'medium',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'large',
        })).toMatchSnapshot();
    })
    it('parse mkBorderColor Snapshot', () => {
        expect(parse({
            mkColor: 'divider',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'success',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'warning',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'alert',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'accent',
        })).toMatchSnapshot();

        expect(parse({
            mkBorderColor: 'mini',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'small',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'medium',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'large',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'disabled',
        })).toMatchSnapshot();    
    })
    it('parse mkTextColor Snapshot', () => {

        expect(parse({
            mkTextColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'success',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'warning',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'alert',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'accent',
        })).toMatchSnapshot();

        expect(parse({
            mkTextColor: 'hint',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'primary',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'secondary',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'disabled',
        })).toMatchSnapshot();     
    })
});

