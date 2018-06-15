import * as t from './base';
import * as css from './css';
import * as variable from './variable';
export * from './variable/type';
export { variable, t as base, css };
export type Mixed = variable.VariableMixed;
export type ColorVariableProps =
    t.PVariable<variable.PaletteType.PaletteNodeValue |
    variable.ColorType.ColorNodeValue, css.TCssProperty, 'color' | 'backgroundColor'
    | 'borderColor' | 'borderLeftColor' | 'borderRightColor' | 'borderTopColor' | 'borderBottomColor'>;
export type GlobalVariableProps =
    t.PVariable<variable.GlobalType.BorderRadiusType, css.TCssProperty, 'borderRadius'>
    & t.PVariable<variable.GlobalType.BorderWidthType, css.TCssProperty, 'borderWidth'
    | 'borderTopWidth' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderRightWidth'>
    & t.PVariable<variable.GlobalType.FontWeightType, css.TCssProperty, 'fontWeight'>
    & t.PVariable<variable.GlobalType.FontSizeType, css.TCssProperty, 'fontSize'>
    & t.PVariable<variable.GlobalType.FontFamilyType, css.TCssProperty, 'fontFamily'>
    & t.PVariable<variable.GlobalType.ZIndexType, css.TCssProperty, 'zIndex'>
    & t.PVariable<variable.GlobalType.BModuleType | variable.GlobalType.UnitType
    | variable.GlobalType.WidthType, css.TCssProperty, 'width'>
    & t.PVariable<variable.GlobalType.BModuleType | variable.GlobalType.UnitType, css.TCssProperty,
    'lineHeight' | 'height'
    | 'padding' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingBottom'
    | 'margin' | 'marginLeft' | 'marginRight' | 'marginTop' | 'marginBottom'>
    ;
export type VariableProp = ColorVariableProps & GlobalVariableProps;
export type AbbrProps = t.AbbrProp<'bgColor', VariableProp, 'backgroundColor'>
    & t.AbbrProp<'marginV', VariableProp, 'marginLeft'>
    & t.AbbrProp<'marginH', VariableProp, 'marginLeft'>
    & t.AbbrProp<'paddingV', VariableProp, 'paddingLeft'>
    & t.AbbrProp<'paddingH', VariableProp, 'paddingLeft'>
    ;

import { ObjectOmit, ObjectDiff } from 'mocoolka-fp/lib/TypeLevel';
export type TransformSetting = {
    mode: 'horizontal' | 'vertical' | 'rotate',
    rotate: number,
};
export type DefaultTransformSetting = ObjectOmit<TransformSetting, 'mode'>;
export type BackgroundSetting = {
    url: string,
    size: string,
    positionX: string | number,
    positionY: string | number,
};
export type DefaultBackgroundSetting = ObjectOmit<BackgroundSetting, 'url'>;
export type TransitionSetting = {
    property: string,
    duration: keyof variable.GlobalType.GlobalVariableSetting['effects']['duration'],
    ease: keyof variable.GlobalType.GlobalVariableSetting['effects']['ease'],
    delay: keyof variable.GlobalType.GlobalVariableSetting['effects']['duration']
};
export type DefaultTransitionSetting = ObjectOmit<TransitionSetting, 'property'>;
export type GlobalProp = {
    color: 'accent' | 'alert' | 'alt' | 'disabled'
    | 'main' | 'primary' | 'secondary' | 'success' | 'warning' | 'hint' | 'inherit',
    bgColor: 'paper' | 'content' | 'divider' | 'accent' | 'alert' | 'alt' | 'disabled'
    | 'main' | 'selected' | 'focus' | 'success' | 'warning' | 'transparent' | 'inherit'
    border: 'none' | 'bordered' | 'top' | 'bottom' | 'left' | 'right' | 'topBar'
    | 'bottomBar' | 'leftBar' | 'rightBar',
    typography: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
    layout: 'center' | 'column' | 'row' | 'inlineColumn' | 'inlineRow' |'inlineCenter',
    position: 'fixedLeftTop' | 'fixedRightTop' | 'fixedTop',
    align: 'childCenterFlex' | 'childCenter' | 'imageCenter' | 'center',
    width: 'full' | 'content' | 'nav' | 'gutter' | 'third' | 'inherit',
    box: 'container' | 'panel' | 'cell',
    height: 'full' | 'inherit',
    scrollBar: 'horizontal' | 'vertical' | 'both' | 'none';
    bgSize: StandLevel | 'inherit',
    squareSize: StandLevel,
    visibility: 'hidden' | 'none' | 'elementInvisible' | 'inherit' | 'hiddenWidth' | 'hiddenHeight',
    flip: 'horizontal' | 'vertical',
    fontWeight: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black' | 'inherit',
    fontFamily: 'sansSerif' | 'serif' | 'monospace' | 'inherit',
    fontSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle' | 'p' | 'caption' | 'overline' | 'inherit'
    borderRadius: 'none' | 'small' | 'medium' | 'large' | 'largeX' | 'inherit',
    borderWidth: 'none' | 'small' | 'medium' | 'large' | 'largeX' | 'inherit',
    zIndex: 'moon' | 'tooltip' | 'alertDesktop' | 'popup' | 'modal' | 'overlay'
    | 'dropdown' | 'alertMobile' | 'nav' | 'bar' | 'base',
    semantic: 'em' | 'strong',
    columns3: 'two'|'three',

};
export type BreakPointsValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GlobalPropFunction = {
    backgroundImage: ObjectDiff<BackgroundSetting, DefaultBackgroundSetting>,
    transform: ObjectDiff<TransformSetting, DefaultTransformSetting>,
    transition: ObjectDiff<TransitionSetting, DefaultTransitionSetting>,
    boxShadow: keyof variable.GlobalType.GlobalVariableSetting['effects']['shadows'],
    rotate: number,
    rounded: boolean,
    noWrap: boolean,
    paragraph: boolean,
    gutterBottom: boolean,
    underlined: boolean,
    after: InputProp,
    lineHeight: number,
    textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'inherit',
    textAlign: 'left' | 'right' | 'center' | 'justify' | 'inherit',
    direction: 'ltr' | 'rtl' | 'inherit',
    textDecoration: 'none' | 'underline' | 'overline' | 'line-through' | 'inherit',
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit',
    flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit',
    justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'inherit',
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'inherit',
    order: number,
    media: {
        name: keyof variable.GlobalType.GlobalVariableSetting['breakpoints'],
        level: 'max' | 'min',
        value: InputProp,
    },
    sm: BreakPointsValue,
    md: BreakPointsValue,
    lg: BreakPointsValue,
    xl: BreakPointsValue,
    smSetting: InputProp,
    mdSetting: InputProp,
    lgSetting: InputProp,
    xlSetting: InputProp,
    smRSetting: InputProp,
    mdRSetting: InputProp,
    lgRSetting: InputProp,
    xlRSetting: InputProp,
};
export type StandLevel = 'none' | 'small' | 'medium' | 'large' | 'xlarge';
export type BaseCss = t.TRProp<css.TCssSelector, css.TCssProperty, VariableProp, AbbrProps, GlobalPropFunction>;
export type InputProp = t.TRProp<css.TCssSelector, css.TCssProperty, VariableProp, AbbrProps,
    GlobalPropFunction & GlobalProp>;
export { TCssProperty, TCssSelector } from './css';
