
import {  ruleModule } from '../index'
import { parseProp } from '../../../CssRule';
const parse = parseProp(ruleModule);

describe('parse color', () => {
    it('should parse property mkTextColor', () => {
        expect(parse({
            mkTextColor: 'main',
        })).toEqual({
            color: '#00796b'
        });
        expect(parse({
            mkTextColor: 'accent',
        })).toEqual({
            color: '#f50057'
        });
        expect(parse({
            mkTextColor: 'primary',
        })).toEqual({
            color: 'rgba(0, 0, 0, 0.87)'
        });
        expect(parse({
            mkTextColor: {
               name: 'primary',
               inverted:true,
            }
        })).toEqual({
            color: '#fff'
        });
        expect(parse({
            mkTextColor: {
               name: 'main',
               opacity:'largeX',
            }
        })).toEqual({
            color: 'rgba(0, 121, 107, 0.7)'
        });
    })
    it('should parse property mkTextColor', () => {
        expect(parse({
            mkOpacity: 'largeXX',
        })).toEqual({
            opacity:0.87
        });
        expect(parse({
            mkOpacity: 'full',
        })).toEqual({
            opacity: 1
        });
    })
     it('should parse property mkTextColors', () => {
        expect(parse({
            mkTextColor: 'yellow',
        })).toEqual({"color": "#fbc02d"});
    }) 
    it('should parse property mkColor', () => {
        expect(parse({
            mkColor: 'main',
        })).toEqual({
            "backgroundColor": "#26a69a", "color": "#fff"
        });
        expect(parse({
            mkColor: 'primary',
        })).toEqual({
            "backgroundColor": "#fff", "color": "rgba(0, 0, 0, 0.87)"
        });
        expect(parse({
            mkColor:'transparent',
        })).toEqual({
            "backgroundColor": "transparent"
        });
       
        expect(parse({
            mkColor: {
               name: 'main',
               opacity:'largeX',
            }
        })).toEqual({
            backgroundColor: 'rgba(38, 166, 154, 0.7)',
            "color": "#fff"
        });

    })
    it('should parse property mkBorderColor', () => {
        expect(parse({
            mkBorderColor: 'main',
        })).toEqual({
            "borderColor": "#00796b"
        });
        expect(parse({
            mkBorderColor: 'primary',
        })).toEqual({
            "borderColor": "rgba(0, 0, 0, 0.87)"
        });
        expect(parse({
            mkBorderColor: {
               name: 'main',
               opacity:'largeX',
            }
        })).toEqual({
            borderColor: 'rgba(0, 121, 107, 0.7)',
        });
        expect(parse({
            mkTextColor:'main',
            mkBorderColor: {
               name: 'currentColor',
               opacity:'largeX',
            }
        })).toEqual({
            color: '#00796b',
            borderColor: 'rgba(0, 121, 107, 0.7)',
        });
        expect(parse({
            mkTextColor:'primary',
            mkBorderColor: {
               name: 'currentColor',
               opacity:'largeX',
            }
        })).toEqual({
            color: 'rgba(0, 0, 0, 0.87)',
            borderColor: 'rgba(0, 0, 0, 0.61)',
        });
        expect(parse({
           
            mkBorderColor: {
               name: 'currentColor',
               opacity:'largeX',
            }
        })).toEqual({
            borderColor: 'rgba(0, 0, 0, 0.61)',
        });
    })
    it('should parse property mkColor inverted', () => {
        expect(parse({
            mkColor: {
               name: 'main',
               inverted:true
            }
        })).toEqual({
            "backgroundColor": "#00796b", "color": "#fff"
        }); 
        expect(parse({
            mkColor: {
               name: 'divide',
               inverted:true
            }
        })).toEqual({
            "backgroundColor": "#757575", "color": "#fff"
        });
        expect(parse({
            mkColor: {
                name:'divide',
                level:'dark'
            },
        })).toEqual({
            "backgroundColor": "#bdbdbd", "color": "rgba(0, 0, 0, 0.87)"
        });

    })
    it('should parse property mkColor opacity', () => {
        expect(parse({
            mkColor: {
               name: 'main',
               opacity:'large',
            }
        })).toEqual({
            "backgroundColor": "rgba(38, 166, 154, 0.54)", "color": "#fff"
        }); 
        expect(parse({
            mkColor: {
               name: 'divide',
               opacity:'mini',
            }
        })).toEqual({
            "backgroundColor": "rgba(224, 224, 224, 0.08)", "color": "rgba(0, 0, 0, 0.87)"
        });

    })
    it('should parse property mkColor using mkTextColor opacity', () => {
        expect(parse({
            mkTextColor:'main',
            mkColor: {

               opacity:'large',
            }
        })).toEqual({
            "backgroundColor": "rgba(38, 166, 154, 0.54)", "color": "#fff"
        }); 
        expect(parse({
            mkTextColor:'primary',
            mkColor: {
               opacity:'mini',
            }
        })).toEqual({
            "backgroundColor": "rgba(255, 255, 255, 0.08)", "color": "rgba(0, 0, 0, 0.87)"
        });

    })
    it('should parse property mkColor using mkTextColor opacity', () => {
        expect(parse({
            mkTextColor:'main',
            mkBgColor: {

               opacity:'large',
            }
        })).toEqual({
            "backgroundColor": "rgba(38, 166, 154, 0.54)", "color": "#00796b"
        }); 
        expect(parse({
            mkTextColor:'primary',
            mkBgColor: {
               opacity:'mini',
            }
        })).toEqual({
            "backgroundColor": "rgba(255, 255, 255, 0.08)", "color": "rgba(0, 0, 0, 0.87)"
        });

    })
    
    it('should parse property mkColor and mkTextColor', () => {
        expect(parse({
            mkColor: 'main',
            mkTextColor:'secondary',
        })).toEqual({
            "backgroundColor": "#26a69a", "color": "#fff"
        });
        expect(parse({
            mkColor: 'accent' ,color:'red'
        })).toEqual({
            "backgroundColor": "#f50057", "color": "red"
        });

    })
     it('should parse property mkColors', () => {

        expect(parse({
            mkColor: 'yellow',
        })).toEqual({"backgroundColor": "#ffee58", "color": "rgba(0, 0, 0, 0.87)"});
    }) 
    it('parse bgColor Snapshot', () => {
        expect(parse({
            mkColor: 'primary',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'secondary',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'success',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'warning',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'alert',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'accent',
        })).toMatchSnapshot();
        expect(parse({
            mkColor: 'divide',
        })).toMatchSnapshot();
    })
    it('parse mkBorderColor Snapshot', () => {
        expect(parse({
            mkBorderColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'success',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'warning',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'alert',
        })).toMatchSnapshot();
        expect(parse({
            mkBorderColor: 'accent',
        })).toMatchSnapshot();

        expect(parse({
            mkBorderColor: 'divide',
        })).toMatchSnapshot();

        expect(parse({
            mkBorderColor: 'disabled',
        })).toMatchSnapshot();    
    })
    it('parse mkTextColor Snapshot', () => {

        expect(parse({
            mkTextColor: 'main',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'success',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'warning',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'alert',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'accent',
        })).toMatchSnapshot();

        expect(parse({
            mkTextColor: 'primary',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'secondary',
        })).toMatchSnapshot();
        expect(parse({
            mkTextColor: 'disabled',
        })).toMatchSnapshot();     
    })
});

