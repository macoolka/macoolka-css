import  { flexContainerRule,rule } from './index';
import { parse } from '../../basic';
import { cssNodeToStringGetter } from '../../base/print';
const flexContainer = parse(flexContainerRule)({});
const flex = parse(rule)({});
describe('parse flexContainerRule', () => {
    it('flexAlign', () => {
        expect(flexContainer({ mkFlexAlign: 'center' })).toEqual({ 'justifyContent': 'center' });
    });
    it('flexAlignV', () => {
        expect(flexContainer({ mkFlexAlignV: 'center' })).toEqual({ 'alignItems': 'center' });
    });
    it('flexAlignLines', () => {
        expect(flexContainer({ mkFlexAlignLines: 'center' })).toEqual({ 'alignContent': 'center' });
    });
    it('flexWrap', () => {
        expect(flexContainer({ mkFlexWrap: 'wrap' })).toEqual({ 'flexWrap': 'wrap' });
    });
    it('flexDirection', () => {
        expect(flexContainer({ mkFlexDirection: 'row' })).toEqual({ 'flexDirection': 'row' });
    });
});
describe('print flexContainerRule', () => {
    it('flexAlign', () => {
        expect(cssNodeToStringGetter().get(flexContainer({
            mkFlexAlign: 'center', mkFlexAlignV: 'center', mkFlexAlignLines: 'center', mkFlexWrap: 'wrap', mkFlexDirection: 'row'
        }))).toMatchSnapshot();
    });
});
describe('flex', () => {
    it('parse flex', () => {
        expect(flex({
            mkFlexAlign: 'center',
            mkFlexAlignV: 'center',
            mkFlexAlignLines: 'center',
            mkFlexWrap: 'wrap',
            mkFlexDirection: 'row',
            mkFlexItemAlign: 'center',
            mkFlexItemAlignV: 'center',
            mkFlexItemGrow: 1,
            mkFlexItemOrder: 1,
            mkFlexItemShrink: 1,
            mkFlexItemWidth: 1,

        })).toEqual({
            'justifyContent': 'center',
            'alignItems': 'center',
            'alignContent': 'center',
            'flexWrap': 'wrap',
            'flexDirection': 'row',
            'justifySelf': 'center',
            'alignSelf': 'center',
            'flexGrow': 1,
            'order': 1,
            'flexShrink': 1,
            'flexBasis': '1px',
        });
    })
});

