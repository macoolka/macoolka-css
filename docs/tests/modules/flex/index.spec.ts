import { parseUnitProp as _parse} from '../../basic';
import {rule} from './index'
const parse = _parse(rule,{});
//import { cssNodeToStringGetter } from '../../base/print';


describe('flex', () => {
/*     it('print flex', () => {
        expect(cssNodeToStringGetter().get(parse({
            mkFlexAlign: 'center', mkFlexAlignV: 'center', mkFlexAlignLines: 'center', mkFlexWrap: 'wrap', mkFlexDirection: 'row'
        }))).toMatchSnapshot();
    }); */
    describe('parse flex', () => {
        it('flexAlign', () => {
            expect(parse({ mkFlexAlign: 'center' })).toEqual({ 'justifyContent': 'center' });
        });
        it('flexAlignV', () => {
            expect(parse({ mkFlexAlignV: 'center' })).toEqual({ 'alignItems': 'center' });
        });
        it('flexAlignLines', () => {
            expect(parse({ mkFlexAlignLines: 'center' })).toEqual({ 'alignContent': 'center' });
        });
        it('flexWrap', () => {
            expect(parse({ mkFlexWrap: 'wrap' })).toEqual({ 'flexWrap': 'wrap' });
        });
        it('flexDirection', () => {
            expect(parse({ mkFlexDirection: 'row' })).toEqual({ 'flexDirection': 'row' });
        });
        expect(parse({
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

