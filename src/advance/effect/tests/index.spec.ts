import {  ruleModule } from '../index'
import { parseProp } from '../../../CssRule';
const parse = parseProp(ruleModule);
describe('text', () => {
    it('parse mkHoverColor', () => {
        expect(parse({
            mkHoverColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkHoverColor: 'accent',
        })).toMatchSnapshot();
    });
    it('parse mkHoverColor', () => {
        expect(parse({
            mkHoverTextColor: 'main',
        })).toMatchSnapshot();
     /*    expect(parse({
            mkHoverTextColors: 'yellow',
        })).toMatchSnapshot(); */
    });  
    it('parse mkCollapse', () => {
        expect(parse({
            mkCollapse: true,
        })).toMatchSnapshot();
        expect(parse({
            mkCollapse: false,
        })).toMatchSnapshot();
    });  
});

