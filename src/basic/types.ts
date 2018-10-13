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
    LineHeightProperty,
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
    BaseProps
} from '../base/types';
import {Overwrite} from 'mocoolka-fp/lib/TypeLevel';

export type PxProps = {
    backgroundSize ?: BackgroundSizeProperty<number>,
    borderBottomWidth?: BorderBottomWidthProperty<number>,
    borderLeftWidth?: BorderLeftWidthProperty<number>,
    borderRadius?: BorderRadiusProperty<number>,
    borderRightWidth?: BorderRightWidthProperty<number>,
    borderTopWidth?: BorderTopWidthProperty<number>,
    borderWidth?: BorderWidthProperty<number>,
    bottom?: BottomProperty<number>,
    fontSize?: FontSizeProperty<number>,
    left?: LeftProperty<number>,
    letterSpacing?: LetterSpacingProperty<number|string>,
    lineHeight?: LineHeightProperty<number>,
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
/* 'backgroundSize' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderRadius' | 'borderRightWidth' |
    'borderTopWidth' | 'borderWidth' | 'bottom' | 'fontSize' |
    'left' | 'letterSpacing' | 'lineHeight' | 'margin' | 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' |
    'padding' | 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'right' | 'top' |
    'flexBasis' | 'outline'; */
export type PxOrPercents = {
    width?: WidthProperty<number>,
    height?: HeightProperty<number>,
    maxWidth?: MaxWidthProperty<number>,
    minWidth?: MinWidthProperty<number>,
    maxHeight?: MaxHeightProperty<number>,
    minHeight?: MinHeightProperty<number>
};
export type Ms = {
    transitionDuration?: BaseProps['transition']|number,
    transitionDelay?: BaseProps['transitionDelay']|number,
    animationDuration?: BaseProps['animationDuration']|number,
    animationDelay?: BaseProps['animationDelay']|number,
};
// 'transitionDuration' | 'transitionDelay' | 'animationDuration' | 'animationDelay';
export type UnitProps = Overwrite<BaseProps, Ms&PxOrPercents&PxProps>;
