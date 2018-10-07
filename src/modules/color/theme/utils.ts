import { TinyColor as Color , ColorInput} from '@ctrl/tinycolor';
// export const lighten = (a: any): any => new Color(a.color as string).lighten(a.value);
export const isDark = (a: ColorInput): boolean => new  Color(a).isDark();
/* const ColorFunctions = {
    lighten,
    isDark,
};
export default ColorFunctions; */
export const alpha = (v: number) => (c: string) => new Color(c).setAlpha(v).toString() as string;
