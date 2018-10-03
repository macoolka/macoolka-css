import {theme,parse as _parse,toString}from './index';
const parse = _parse(theme);
describe('parse Border', () => {
     it('toString',()=>{
        expect(toString(parse({
            mkHeight:'full',
            mkTypography: 'h2',
            mkFlexAlign: 'center',
            mkMedia:[{mkColor:'red',width:200},{mkColor:'body',width:300},{mkColor:'body',width:500},{fontSize:'40px',width:700}],
            selector:{
                ':hover':{
                    mkTypography: 'h1',
                }
            }
        }))).toMatchSnapshot();
    })
});


