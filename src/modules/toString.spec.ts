import {theme,parseModule as _parse,toString}from './index';
const parse = _parse(theme);
describe('parse module', () => {
     it('toString',()=>{
        expect(toString(parse({
            mkHeight:'full',
            mkFlexAlign: 'center',
            mkMedia:[{mkColor:'red',width:200},{mkColor:'body',width:300},{mkColor:'body',width:500},{fontSize:'40px',width:700}],
            selector:{
                ':hover':{
                    mkFontSize: 'h1',
                }
            }
        }))).toMatchSnapshot();
    })
});


