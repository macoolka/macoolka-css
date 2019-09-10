/**
 * @file
 */
import { Rule as ParentRule, ruleModule as parentRuleModule } from '../../basic';
import { ExtendRule, extendRuleModule } from '../../CssRule'
import {getFold} from 'macoolka-object'

export interface FlexContainerProps {
    /**
     * Items should wrap or not.
     */
    mkFlexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit',
    /**
     *  The direction to stack the flex items.
     */
    mkFlexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit',
    /**
     * Align the flex items 
     */
    mkFlexAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'inherit',
    /**
     * Align the flex items vertically.
     */
    mkFlexAlignV?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'inherit',
    /**
     * Align the flex lines.
     */
    mkFlexAlignLines?: 'space-around' | 'space-between' | 'space-evenly' | 'stretch'
    | 'center' | 'end' | 'flex-end' | 'flex-start' | 'start' | 'inherit',

};

export interface FlexItemProps {
    /**
     * Align the flex item
     */
    mkFlexItemAlign?: 'center' | 'end' | 'flex-end' | 'flex-start' | 'self-end' |
    'self-start' | 'start' | 'auto' | 'baseline' | 'left' | 'normal' | 'right' | 'stretch' | 'inherit',
    /**
     * Align the flex item vertically.
     */
    mkFlexItemAlignV?: 'center' | 'end' | 'flex-end' | 'flex-start' |
    'self-end' | 'self-start' | 'start' | 'auto' | 'baseline' | 'normal' | 'stretch' | 'inherit',
    /**
     * The initial length of a item.
     */
    mkFlexItemWidth?: number | string,
    /**
     * The item will shrink relative to the flex items.
     */
    mkFlexItemShrink?: number,
    /**
     * The item will grow relative to the flex items.
     */
    mkFlexItemGrow?: number,
    /**
     * The order of the flex item.
     */
    mkFlexItemOrder?: number,
};
export interface EProps { };
export interface SProps extends FlexContainerProps, FlexItemProps {

}
/**
 * Flex properties
 * @CommonProperties
 */
export interface Props extends SProps, EProps {

}

export const flexContainerRule: ExtendRule<ParentRule, FlexContainerProps, {}> = {
    rule: {
        mkFlexWrap: ({ value }) => ({
            flexWrap: value,
        }),
        mkFlexDirection: ({ value }) => ({
            flexDirection: value,
        }),
        mkFlexAlign: ({ value }) => ({
            justifyContent: value,
        }),
        mkFlexAlignV: ({ value }) => ({
            alignItems: value,
        }),
        mkFlexAlignLines: ({ value }) => ({
            alignContent: value,
        }),
    },
};

export const flexItemRule: ExtendRule<ParentRule, FlexItemProps, {}> = {
    rule: {
        mkFlexItemAlign: ({ value }) => ({
            justifySelf: value,
        }),
        mkFlexItemAlignV: ({ value }) => ({
            alignSelf: value,
        }),
        mkFlexItemWidth: ({ value }) => ({
            flexBasis: value,
        }),
        mkFlexItemGrow: ({ value }) => ({
            flexGrow: value,
        }),
        mkFlexItemShrink: ({ value }) => ({
            flexShrink: value,
        }),
        mkFlexItemOrder: ({ value }) => ({
            order: value,
        }),
    },
};
export type Rule=ExtendRule<ParentRule, Props, {}>
const rule: Rule = getFold()([flexContainerRule, flexItemRule])

export const ruleModule = extendRuleModule(parentRuleModule)<Rule>({
    rule,
    theme:{},
})