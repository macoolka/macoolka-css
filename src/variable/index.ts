import * as color from './color';
import * as PaletteType from './palette/type';
import * as ColorType from './color/type';
import * as global from './global';
import * as GlobalType from './global/type';
import * as b from '../base';
export {
    PaletteType,
    ColorType,
    GlobalType,
};
export const variable = b.variable.compose(color.variable, global.variable);
export type VariableMixed = ColorType.ColorVariableMixed & PaletteType.ColorPaletteVariableMixed
    & GlobalType.GlobalVariableMixed;
