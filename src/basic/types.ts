import {
    BackgroundSizeProperty,
    BorderBottomWidthProperty,
    BorderLeftWidthProperty,
    BorderRadiusProperty,
    BorderRightWidthProperty,
    BorderTopWidthProperty,
    BorderWidthProperty,
    BottomProperty,
    FontSizeProperty,
    LeftProperty,
    LetterSpacingProperty,
    MarginProperty,
    MarginTopProperty,
    MarginBottomProperty,
    MarginLeftProperty,
    MarginRightProperty,
    PaddingProperty,
    PaddingTopProperty,
    PaddingBottomProperty,
    PaddingLeftProperty,
    PaddingRightProperty,
    RightProperty,
    TopProperty,
    FlexBasisProperty,
    OutlineProperty,
    WidthProperty,
    HeightProperty,
    MaxWidthProperty,
    MinWidthProperty,
    MaxHeightProperty,
    MinHeightProperty,

} from 'csstype';
//import { BaseProps } from '../CssRule';

export type PxProps = {
    backgroundSize?: BackgroundSizeProperty<number>,
    borderBottomWidth?: BorderBottomWidthProperty<number>,
    borderLeftWidth?: BorderLeftWidthProperty<number>,
    borderRadius?: BorderRadiusProperty<number>,
    borderRightWidth?: BorderRightWidthProperty<number>,
    borderTopWidth?: BorderTopWidthProperty<number>,
    borderWidth?: BorderWidthProperty<number>,
    bottom?: BottomProperty<number>,
    fontSize?: FontSizeProperty<number>,
    left?: LeftProperty<number>,
    letterSpacing?: LetterSpacingProperty<number | string>,
    margin?: MarginProperty<number>,
    marginTop?: MarginTopProperty<number>,
    marginBottom?: MarginBottomProperty<number>,
    marginLeft?: MarginLeftProperty<number>,
    marginRight?: MarginRightProperty<number>,
    padding?: PaddingProperty<number>,
    paddingTop?: PaddingTopProperty<number>,
    paddingBottom?: PaddingBottomProperty<number>,
    paddingLeft?: PaddingLeftProperty<number>,
    paddingRight?: PaddingRightProperty<number>,
    right?: RightProperty<number>,
    top?: TopProperty<number>,
    flexBasis?: FlexBasisProperty<number>,
    outline?: OutlineProperty<number>,
};

export type PxOrPercents = {
    width?: WidthProperty<number>,
    height?: HeightProperty<number>,
    maxWidth?: MaxWidthProperty<number>,
    minWidth?: MinWidthProperty<number>,
    maxHeight?: MaxHeightProperty<number>,
    minHeight?: MinHeightProperty<number>
};
export type Ms = {
    transitionDuration?: _BaseProps['transition'] | number,
    transitionDelay?: _BaseProps['transitionDelay'] | number,
    animationDuration?: _BaseProps['animationDuration'] | number,
    animationDelay?: _BaseProps['animationDelay'] | number,
};
export type UnitNumberProps = Ms & PxOrPercents & PxProps;

import { StandardProperties, SvgProperties, VendorLonghandProperties } from 'csstype';

/**
 * The Provide MDN CssProperties
 * @since 0.2.0
 */
export type _BaseProps = StandardProperties<string> & SvgProperties<string> & VendorLonghandProperties<string>;
export type BaseProps=Omit<_BaseProps,keyof UnitNumberProps> & UnitNumberProps
