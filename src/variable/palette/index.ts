
import * as T from './type';
export { T };
import { defaultColorPaletteVariable } from './value';
import { isNodeValue, getVariableValue } from './get';
export * from './type';
export const variable = {
    variable: defaultColorPaletteVariable,
    getVariableValue,
    isNodeValue,
};
