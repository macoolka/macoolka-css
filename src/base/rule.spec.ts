import { Rule,parse,parseRule } from './rule';
import { BaseProps } from './types';
describe('rule', () => {
    it('rule using string', () => {
        const rule: Rule<{ A: number }, {}, BaseProps> = {
            rule: {
                A: 'width',
            }
        };
        expect(parse(rule)({})({ A: 1 })).toEqual({ width: 1 });
    });
    it('rule using string', () => {
        const rule: Rule<{ A: number }, {}, BaseProps> = {
            rule: {
                A: 'width',
            }
        };
        expect(parseRule<{ A: number },{},BaseProps>()(rule)({})({ A: 1 })).toEqual({ width: 1 });
    });
    it('rule using function', () => {
        const rule: Rule<{ A: number }, {}, BaseProps> = {
            rule: {
                A: (value) => ({ width: value + 1 }),
            }
        };
        expect(parse(rule)({})({ A: 1 })).toEqual({ width: 2 });
    });
    it('rule using function and theme', () => {
        const rule: Rule<{ A: number }, {}, BaseProps, { a: number }> = {
            rule: {
                A: (value, theme) => {
                    return ({ width: value * theme.a })
                },
            }
        };
        expect(parse(rule)({ a: 2 })({ A: 5 })).toEqual({ width: 10 });
    });
    it('rule using object', () => {
        const rule: Rule<{ A: number }, {}, BaseProps> = {
            rule: {
                A: { width: ((value) => `${value}px`) },
            }
        };
        expect(parse(rule)({})({ A: 1 })).toEqual({ width: '1px' });
    });
    it('rule using object and theme', () => {
        const rule: Rule<{ A: number }, {}, BaseProps, { a: number }> = {
            rule: {
                A: { width: ((value, theme) => `${value * theme.a}px`) },
            }
        };
        expect(parse(rule)({ a: 2 })({ A: 1 })).toEqual({ width: '2px' });
    });
    it('ruleEnum using object', () => {
        const rule: Rule<{}, { A: 'center' | 'left' }, BaseProps, {}> = {
            ruleEnum: {
                A: {
                    center: { width: '20px' },
                    left: { width: '50px' },
                }
            }
        };
        expect(parse(rule)({})({ A: 'center' })).toEqual({ width: '20px' });
        expect(parse(rule)({})({ A: 'left' })).toEqual({ width: '50px' });
    });
    it('ruleEnum using function and theme', () => {
        const rule: Rule<{}, { A: 'center' | 'left' }, BaseProps, { a: number, b: number }> = {
            ruleEnum: {
                A: {
                    center: (theme) => ({ width: theme.a }),
                    left: (theme) => ({ width: theme.b }),
                }
            }
        };
        expect(parse(rule)({ a: 1, b: 2 })({ A: 'center' })).toEqual({ width: 1 });
        expect(parse(rule)({ a: 1, b: 2 })({ A: 'left' })).toEqual({ width: 2 });
    });
    it('ruleEnum using object and theme', () => {
        const rule: Rule<{}, { A: 'center' | 'left' }, BaseProps, { a: number, b: number }> = {
            ruleEnum: {
                A: {
                    center: { width: (theme)=>`${theme.a}px` },
                    left: { width: (theme)=>`${theme.b}px` },
                }
            }
        };
        expect(parse(rule)({ a: 1, b: 2 })({ A: 'center' })).toEqual({ width: '1px' });
        expect(parse(rule)({ a: 1, b: 2 })({ A: 'left' })).toEqual({ width: '2px' });
    });
});
