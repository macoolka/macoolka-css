
/**
 * Border
 * @prop
 */
import { Rule as ParentRule,ruleModule as parentRuleModule } from '../../common';
import { ExtendRule, extendRuleModule } from '../../CssRule'
import { ColorObject } from '../../common/color/rule';

import { getDefaultColorTextValue } from '../../common/color/rule'

export interface SProps {

    /**
     * hover using text color
     */
    mkHoverTextColor?: ColorObject | 'none',

    /*     mkHoverTextColorLight?: TextColor|'none',
        mkHoverTextColorDark?: TextColor|'none',
        mkHoverTextColorToLight?: TextColor|'none',
        mkHoverTextColorToDark?: TextColor|'none', */
    /**
     * hover using palette text color
     */
    // mkHoverTextColors?: PaletteColor|'none',
    /*     mkHoverTextColorsLight?: PaletteColor|'none',
        mkHoverTextColorsDark?: PaletteColor|'none',
        mkHoverTextColorsToLight?: PaletteColor|'none',
        mkHoverTextColorsToDark?: PaletteColor|'none', */
    /**
     * hover using color
     */
    mkHoverColor?: ColorObject | 'none',
    /*     mkHoverColorLight?: Color|'none',
        mkHoverColorDark?: Color|'none',
        mkHoverColorToLight?: Color|'none',
        mkHoverColorToDark?: Color|'none', */
    /**
     * hover using palette color
     */
    // mkHoverColors?: PaletteColor|'none',
    /*     mkHoverColorsLight?: PaletteColor|'none',
        mkHoverColorsDark?: PaletteColor|'none',
        mkHoverColorsToLight?: PaletteColor|'none',
        mkHoverColorsToDark?: PaletteColor|'none', */

    /**
     * hover using border color
     */
    mkHoverBorderColor?: ColorObject | 'none',
    /*     mkHoverBorderColorLight?: BorderColor|'none',
        mkHoverBorderColorDark?: BorderColor|'none',
        mkHoverBorderColorToLight?: BorderColor|'none',
        mkHoverBorderColorToDark?: BorderColor|'none', */
    /**
     * hover using palette border color
     */
    //  mkHoverBorderColors?: PaletteColor|'none',
    /*     mkHoverBorderColorsLight?: PaletteColor|'none',
        mkHoverBorderColorsDark?: PaletteColor|'none',
        mkHoverBorderColorsToLight?: PaletteColor|'none',
        mkHoverBorderColorsToDark?: PaletteColor|'none', */

    /**
 * The element hide or show height.
 */
    /**
     * 
     * @language cn
     */
    mkCollapse?: boolean,

};
export interface EProps {

};
export interface Props extends EProps, SProps {

}
const hoverSelector = ':hover:not(:disabled)'
export type Rule = ExtendRule<ParentRule, SProps, EProps>
 const rule: Rule = {
    ruleEnum: {

    },
    rule: {
        mkHoverTextColor: ({ value, source }) => {
            return value === 'none'
                ? {} 
                : {
                    selector:
                        {
                            [hoverSelector]:
                            { mkTextColor: getDefaultColorTextValue({ value, source }) }
                        } 
                }
            /*             else if(value==='light'||value==='dark'){
                            const sourceValue:any=source;
                            if(sourceValue && sourceValue[''] && sourceValue[''].mkTextColor){
                                return { selector: { [hoverSelector]: { mkTextColor: sourceValue[''].mkTextColor+upperFirst(value) as any } } }
                            }else{
                                return {}
                            }
                           
                        }  */
            // else{
            /*                 if(value && isObject(value) && isNil(value.name)){
                                getTextColor({source})
                            } */

            //  return { selector: { [hoverSelector]: { mkTextColor: getDefaultColorTextValue({value,source}) } } }
            // }
        },

        mkHoverBorderColor: ({ value, source }) =>
            value === 'none'
                ? ({})
                : ({
                    selector: {
                        [hoverSelector]: {
                            mkBorderColor: getDefaultColorTextValue({ value, source })
                        }
                    }
                } ),

        mkHoverColor: ({ value, source }) =>
            value === 'none'
                ? ({})
                : ({
                    selector: {
                        [hoverSelector]: {
                            mkColor: getDefaultColorTextValue({ value, source })
                        }
                    }
                }
                ) ,

        /*   mkHoverTextColors: ({value})  => value==='none'?({}):({
              selector: { [hoverSelector]: { mkTextColors: value } },
          }), */

        /*   mkHoverColors: ({value})  => value==='none'?({}):({
              selector: { [hoverSelector]: { mkColors: value } },
          }), */

        /*    mkHoverBorderColors: ({value})  => value==='none'?({}):({
               selector: { [hoverSelector]: { mkBorderColors: value } },
           }), */

        mkCollapse: ({ value }) => value
            ? ({ mkVisible: 'hiddenHeight', mkTransition: 'height' })
            : ({
                mkVisible: 'visibleHeight', mkTransition: 'height'
            }) ,
    },
};


export const ruleModule = extendRuleModule(parentRuleModule)<Rule>({
    rule,
    theme:{},
})