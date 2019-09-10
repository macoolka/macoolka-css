
import {  parseStand as parse} from '..';

describe('parse', () => {
    it('parse stand', () => {
        expect(parse({
            mkPadding: 'small',
            height: 100,
            selector: {
                '&:focus': {
                    mkPadding: 'medium',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse children', () => {
        expect(parse({
            mkPadding: 'small',
            mkChildren: {
                mkHoverBorderColor:'main',
                minWidth:20,
                selector:{
                    ':focus':{
                        color:'red'
                    }
                }
            },
            selector: {
                '&:focus': {
                    mkPadding: 'medium',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media children', () => {
        expect(parse({
            mkPadding: 'small',
            mkMedia: [{
                mkChildren: {
                    mkHoverBorderColor:'main',
                    minWidth:20,
                    selector:{
                        ':focus':{
                            color:'red'
                        }
                    }
                },
            }, {
                mkChildren: {
                    mkHoverBorderColor:'accent',
                    minWidth:10,
                    selector:{
                        ':focus':{
                            color:'green'
                        }
                    }
                },
            }] ,

            selector: {
                '&:focus': {
                    mkPadding: 'medium',
                    height: 200,
                }
            }
        })).toMatchSnapshot();
    });
    it('parse media', () => {
        expect(parse({
            height: 100,
            mkMedia: [{
                mkPadding: 'small',
                fontSize: 12
            }, {
                mkPadding: 'medium', fontSize: 13
            }, {
                mkPadding: 'large', fontSize: 14
            }, {
                mkPadding: 'medium', fontSize: 15
            }] ,
            selector: {
                '&:focus': {
                    mkColor: 'main',
                    borderWidth: 1
            }
            }
        })).toMatchSnapshot();
    });
    it('parse others prop', () => {
        expect(parse({
            height: 100,
            onclick:15,
            mkMedia: [{
                mkPadding: 'small',
                fontSize: 12
            }, {
                mkPadding: 'medium', fontSize: 13
            }, {
                mkPadding: 'large', fontSize: 14
            }, {
                mkPadding: 'medium', fontSize: 15
            }] ,
            selector: {
                '&:focus': {
                    mkColor: 'main',
                    borderWidth: 1
            }
            }
        } as any )).toMatchSnapshot();
    });

});