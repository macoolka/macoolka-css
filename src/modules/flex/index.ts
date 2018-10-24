/**
 * convert number type to px or precent
 * @getter
 */
import { OutRule, UnitProps ,OutTheme} from '../../basic';
import {foldRule} from '../../css';
export type FlexContainerProps = {
    /**
     * The property specifies  the flex items should wrap or not.
     */
    mkFlexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit',
    /**
     *  The property specifies the column direction the container wants to stack the flex items.
     */
    mkFlexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit',
    /**
     * The property is used to align the flex items
     */
    mkFlexAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'inherit',
    /**
     * The property is used to align the flex items vertically.
     */
    mkFlexAlignV?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'inherit',
    /**
     * The property is used to align the flex lines.
     */
    mkFlexAlignLines?: 'space-around' | 'space-between' | 'space-evenly' | 'stretch'
    | 'center' | 'end' | 'flex-end' | 'flex-start' | 'start' | 'inherit',

};

export type FlexItemProps = {
    /**
     * The property specifies the alignment for the selected item inside the flexible container.
     * The property overrides the default alignment set by the container's align property.
     */
    mkFlexItemAlign?: 'center' | 'end' | 'flex-end' | 'flex-start' | 'self-end' |
    'self-start' | 'start' | 'auto' | 'baseline' | 'left' | 'normal' | 'right' | 'stretch' | 'inherit',
    /**
     * The property specifies the alignment vertically for the selected item inside the flexible container.
     * The property overrides the default alignment set by the container's alignV property.
     */
    mkFlexItemAlignV?: 'center' | 'end' | 'flex-end' | 'flex-start' |
     'self-end' | 'self-start' | 'start' | 'auto' | 'baseline' | 'normal' | 'stretch' | 'inherit',
    /**
     * The property specifies the initial length of a flex item.
     */
    mkFlexItemWidth?: number | string,
    /**
     * The property specifies how much a flex item will shrink relative to the rest of the flex items.
     */
    mkFlexItemShrink?: number,
    /**
     * The property specifies how much a flex item will grow relative to the rest of the flex items.
     */
    mkFlexItemGrow?: number,
    /**
     * The order property specifies the order of the flex items.
     */
    mkFlexItemOrder?: number,
};
export type EProps= {};
export type SProps= FlexContainerProps & FlexItemProps;
export type Props = SProps& EProps;

export const flexContainerRule: OutRule<FlexContainerProps, {}> = {
    rule: {
        mkFlexWrap: ({value}) => ({
            flexWrap: value,
        }),
        mkFlexDirection: ({value})  => ({
            flexDirection: value,
        }),
        mkFlexAlign: ({value})  => ({
            justifyContent: value,
        }),
        mkFlexAlignV: ({value})  => ({
            alignItems: value,
        }),
        mkFlexAlignLines: ({value})  => ({
            alignContent: value,
        }),
    },
};

export const flexItemRule: OutRule<FlexItemProps, {}> = {
    rule: {
        mkFlexItemAlign: ({value})  => ({
            justifySelf: value,
        }),
        mkFlexItemAlignV: ({value})  => ({
            alignSelf: value,
        }),
        mkFlexItemWidth: ({value})  => ({
            flexBasis: value,
        }),
        mkFlexItemGrow: ({value})  => ({
            flexGrow: value,
        }),
        mkFlexItemShrink: ({value})  => ({
            flexShrink: value,
        }),
        mkFlexItemOrder: ({value})  => ({
            order: value,
        }),
    },
};
export const rule = foldRule<Props, {}, UnitProps,OutTheme<{}>>()([flexContainerRule, flexItemRule]) ;
