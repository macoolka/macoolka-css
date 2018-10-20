import {parseMediaJss,parseMedia}from './index';
describe('parse module', () => {
     it('toString',()=>{
        expect(parseMedia({
            mkHeight:'full',
            mkFlexAlign: 'center',
            mkMedia:[{mkColor:'surface',width:200},{mkColor:'body',width:300},{mkColor:'body',width:500},{fontSize:'40px',width:700}],
            selector:{
                ':hover':{
                    mkFontSize: 'h1',
                }
            }
        })).toMatchSnapshot();
    })
     it('parse media', () => {
        expect(parseMedia({})).toEqual('')
        expect(parseMediaJss({ mkMedia: [{ width: '10px' }, { width: '100%' }, { width: '300px' }] })).
            toEqual({
                "selector": {
                    "@media screen and (max-width: 80em)":
                        { "width": "100%" },
                    "@media screen and (max-width: 93em)":
                        { "width": "300px" }
                },
                "width": "10px"
            })
    }) 
});


