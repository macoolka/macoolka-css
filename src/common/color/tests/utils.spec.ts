import { getTextColorValue,getColorValue} from '../rule';

import {theme} from '../index'

describe('parse color', () => {
    it('getTextColorValue', () => {
        expect(getTextColorValue({
           source:{
            '':{
                mkTextColor: 'main',
            }
           },
           theme
        })).toEqual('#00796b');
       
    })
    it('getTextColorValue with empty', () => {
        expect(getTextColorValue({
           source:{
           
           },
           theme
        })).toEqual(undefined);
       
    })
    it('getColorValue with empty', () => {
        expect(getColorValue({
           source:{
          
           },
           theme
        })).toEqual( undefined
        );
       
    })
    it('getColorValue with color', () => {
        expect(getColorValue({
           source:{
            '':{
                color: '#fff',
            }
           },
           theme
        })).toEqual( '#fff'
        );
       
    })
    it('getColorValue with color', () => {
        expect(getColorValue({
           source:{
            '':{
                mkTextColor: 'main',
            }
           },
           theme
        })).toEqual( '#00796b'
        );
       
    })
})