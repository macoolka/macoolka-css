import { RuleC,parseRuleC } from './ruleC';
import { BaseProps } from './types';
const parse =parseRuleC();
describe('rule', () => {
    it('ruleEnum style using function and theme ', () => {
        const rule: RuleC<{}, { A: 'center' | 'left' }, BaseProps, { a: number, b: number }> = {
            ruleEnum: {
                A: {
                    center: (theme)=>({ width: `${theme.a}px` }),
                    left: (theme)=>({ width: `${theme.b}px` }),
                }
            },
            style:{
                color:'red'
            }
        };
        expect(parse(rule)({ a: 1, b: 2 })({ A: 'center' })).toEqual({ width: '1px',color:'red' });
        expect(parse(rule)({ a: 1, b: 2 })({ A: 'left' })).toEqual({ width: '2px',color:'red' });
    });
    it('rule result merge style ', () => {
        const rule: RuleC<{}, { A: 'center' | 'left' }, BaseProps> = {
            ruleEnum: {
                A:{
                    center: _=>( { color: 'blue' }),
                    left: _=>({ color: 'green' }),
                }
            },
            style:{
                color:'red'
            }
        };
        expect(parse(rule)({})({ })).toEqual({ color:'red' });
        expect(parse(rule)({})({ A: 'center' })).toEqual({ color:'blue' });
        expect(parse(rule)({})({ A: 'left' })).toEqual({ color: 'green' });
        expect(parse(rule)({})({ color:'yellow',A: 'left' })).toEqual({ color: 'yellow' });
        expect(parse(rule)({})({ A: 'left',color:'yellow' })).toEqual({ color: 'yellow' });
    });
});

