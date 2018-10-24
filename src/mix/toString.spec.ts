import {parse}from './index';
describe('parse module', () => {
     it('toString',()=>{
        expect(parse({
            mkHeight:'full',
            mkFlexAlign: 'center',
            mkMedia:[{mkColor:'surface',width:200},{mkColor:'body',width:300},{mkColor:'body',width:500},{fontSize:'40px',width:700}],
        })).toMatchSnapshot();
    })
     it('parse media', () => {
        expect(parse({})).toEqual('\n\n')
        expect(parse({ mkMedia: [{ width: '10px' }, { width: '100%' }, { width: '300px' }] })).
            toEqual(
`
@media screen and (max-width: 93em) {
  width: 300px;
}
@media screen and (max-width: 80em) {
  width: 100%;
}
@media screen and (max-width: 50em) {
  width: 10px;
}
`                )
    }) 
});


