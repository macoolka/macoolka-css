// tslint:disable
const Color = require('color');
// tslint:enable
const lighten = (a: any): any => Color(a.color as string).lighten(a.value);
const ColorFunctions = {
    lighten,
};
export default ColorFunctions;
export const alpha = (v: number) => (c: string) => Color(c).alpha(v).toString();
