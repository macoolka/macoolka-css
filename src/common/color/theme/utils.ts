import { TinyColor as Color , ColorInput} from '@ctrl/tinycolor';
export const isDark = (a: ColorInput): boolean => new  Color(a).isDark();
export const alpha = (v: number) => (c: string) => new Color(c).setAlpha(v).toString() as string;
