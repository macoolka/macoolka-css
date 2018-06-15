import * as T from './type';
import * as t from '../../base';
import { defaultVariableTheme } from './value';
import { getVariableValue, isNodeValue } from './get';
export * from './type';
export { T };
import * as palette from '../palette';
const _variable = t.variable.of({
    variable: defaultVariableTheme,
    isNodeValue,
    getVariableValue,
});
export const variable = t.variable.compose(palette.variable, _variable);
