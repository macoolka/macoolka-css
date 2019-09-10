import { Rule as PRule, ruleModule } from '../index';
import { ExtendRule, parseProp } from '../../CssRule'
type Rule = ExtendRule<PRule, { A?: number }, {}>
export const flexItemRule: Rule = {
    rule: {
        A: ({ value }) => ({ width: value }),
    }
};
const ruleModels = {
    rule: flexItemRule,
    theme: ruleModule.theme,
    next: ruleModule
}
const parse = parseProp(ruleModels);
describe('unit', () => {
    it('parse to object', () => {
        expect(parse({})).toEqual({})
        expect(parse({ A: 1 })).
            toEqual({
                "width": "100%"
            })
    })
})