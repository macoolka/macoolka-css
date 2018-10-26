/**
 * convert number type to px or precent
 * @getter
 */
import { OutRule ,OutTheme} from '../../basic';
import {Level,LevelNode} from '../types';
import { Lens } from 'mocoolka-fp/lib/Monocle';
import { constant } from 'mocoolka-fp/lib/function';
type ContentWith=LevelNode&{
    nav: number;
}
type Width = {
    content:ContentWith,
};

type Box = {
    width: Width,
    space:LevelNode,
    gutter: LevelNode,
    container:LevelNode,
    element:LevelNode,
};
export type Theme = {
    box: Box

};
const box = Lens.fromProp<Theme, 'box'>('box');
const width = Lens.fromProp<Box, 'width'>('width');
const gutter = box.compose(Lens.fromProp<Box, 'gutter'>('gutter'));
const space = box.compose(Lens.fromProp<Box, 'space'>('space'));
const content = box.compose(width).compose(Lens.fromProp<Width, 'content'>('content'));
const element = box.compose(Lens.fromProp<Box, 'element'>('element'));
const container = box.compose(Lens.fromProp<Box, 'container'>('container'));
export const theme: Theme = {
    box: {
        width: {
            content: {
                large: 1160,
                medium:750,
                small:350,
                nav: 256,
                none:0,
            },
        },

        container:{
            large: 480,
            medium:360,
            small:210,
            none:0,
        },
        element:{
            large: 64,
            medium:48,
            small:32,
            none:0,
        },
        gutter: {
            small: 20,
            medium: 40,
            large: 60,
            none:0,
        },
        space: {
            small: 8,
            medium: 16,
            large: 24,
            none:0,
        },

    },

};

export interface SProps  {
    /**
     * The property is used to setting the margin properties in one declaration
     */
    mkMargin?: Level,
    /**
     * The property is used to setting the top margin of an element.
     */
    mkMarginTop?: Level,
    /**
     * The property is used to setting the bottom margin of an element.
     */
    mkMarginBottom?: Level,
    /**
     * The property is used to setting the left margin of an element.
     */
    mkMarginLeft?: Level,
    /**
     * The property is used to setting the right margin of an element.
     */
    mkMarginRight?: Level,
    /**
     * The property is used to setting the x margin of an element.
     */
    mkMarginH?: Level,
    /**
     * The property is used to setting the y margin of an element.
     */
    mkMarginV?: Level,
       /**
     * The property is used to setting the margin properties in one declaration
     */
    mkMarginGutter?: Level,
    /**
     * The property is used to setting the top margin of an element.
     */
    mkMarginGutterTop?: Level,
    /**
     * The property is used to setting the bottom margin of an element.
     */
    mkMarginGutterBottom?: Level,
    /**
     * The property is used to setting the left margin of an element.
     */
    mkMarginGutterLeft?: Level,
    /**
     * The property is used to setting the right margin of an element.
     */
    mkMarginGutterRight?: Level,
    /**
     * The property is used to setting the x margin of an element.
     */
    mkMarginGutterH?: Level,
    /**
     * The property is used to setting the y margin of an element.
     */
    mkMarginGutterV?: Level,
    /**
     * The property is used to setting the padding of an element.
     */
    mkPaddingGutter?: Level,
    /**
     * The property is used to setting the top padding of an element.
     */
    mkPaddingGutterTop?: Level,
    /**
     * The property is used to setting the bottom padding of an element.
     */
    mkPaddingGutterBottom?: Level,
    /**
     * The property is used to setting the left padding of an element.
     */
    mkPaddingGutterLeft?: Level,
    /**
     * The property is used to setting the right padding of an element.
     */
    mkPaddingGutterRight?: Level,
    /**
     * The property is used to setting the x padding of an element.
     */
    mkPaddingGutterH?: Level,
    /**
     * The property is used to setting the y padding of an element.
     */
    mkPaddingGutterV?: Level,
    /**
     * The property is used to setting the padding of an element.
     */
    mkPadding?: Level,
    /**
     * The property is used to setting the top padding of an element.
     */
    mkPaddingTop?: Level,
    /**
     * The property is used to setting the bottom padding of an element.
     */
    mkPaddingBottom?: Level,
    /**
     * The property is used to setting the left padding of an element.
     */
    mkPaddingLeft?: Level,
    /**
     * The property is used to setting the right padding of an element.
     */
    mkPaddingRight?: Level,
    /**
     * The property is used to setting the x padding of an element.
     */
    mkPaddingH?: Level,
    /**
     * The property is used to setting the y padding of an element.
     */
    mkPaddingV?: Level,
    mkSquare?: 'full' | 'fullScreen' | number,
    marginH?: number | string,
    marginV?: number | string,
    paddingH?: number | string,
    paddingV?: number | string,
    mkContentWidth?:Level|'nav';
    mkContainerWidth?:Level;
    mkElementWidth?:Level;
    mkElementHeight?:Level;
    mkContainerHeight?:Level;

};
export interface EProps {
    mkWidth?: 'full' | 'fullScreen' |'none' |'inherit',
    mkMinWidth?: 'full' | 'fullScreen'  |'none' |'inherit',
    mkMaxWidth?: 'full' | 'fullScreen'  |'none' |'inherit',
    mkHeight?: 'full' | 'fullScreen'|'none' |'inherit',
    mkMinHeight?: 'full' | 'fullScreen'|'none' |'inherit',
    mkMaxHeight?: 'full' | 'fullScreen'|'none' |'inherit',
};
export type Props = EProps & SProps;
export const mapProps = <T>(name: keyof T) => <P>({ value }: { value: P }) => ({ name: value });
export const rule: OutRule<SProps, EProps, OutTheme<Theme>> = {
    rule: {
        marginH: ({value}) => ({
            marginLeft: value,
            marginRight: value,
        }),
        marginV: ({value}) => ({
            marginTop: value,
            marginBottom: value,
        }),
        paddingH: ({value}) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingV: ({value}) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        /**
         * The property is used to setting the margin properties in one declaration
         */
        mkMargin: ({ value, theme : t }) => ({
            margin: space.get(t)[value],
        }),
        /**
         * The property is used to setting the top margin of an element.
         */
        mkMarginTop: ({ value, theme : t }) => ({
            marginTop: space.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom margin of an element.
         */
        mkMarginBottom: ({ value, theme : t }) => ({
            marginBottom: space.get(t)[value],
        }),
        /**
         * The property is used to setting the left margin of an element.
         */
        mkMarginLeft: ({ value , theme : t }) => ({
            marginLeft: space.get(t)[value],
        }),
        /**
         * The property is used to setting the right margin of an element.
         */
        mkMarginRight: ({ value , theme : t }) => ({
            marginRight: space.get(t)[value],
        }),
        /**
         * The property is used to setting the x margin of an element.
         */
        mkMarginH: ({ value, theme : t  }) => ({
            marginLeft: space.get(t)[value],
            marginRight: space.get(t)[value],
        }),
        /**
         * The property is used to setting the y margin of an element.
         */
        mkMarginV: ({ value, theme : t  }) => ({
            marginTop: space.get(t)[value],
            marginBottom: space.get(t)[value],
        }),
        /**
         * The property is used to setting the margin properties in one declaration
         */
        mkMarginGutter: ({ value, theme : t }) => ({
            margin: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the top margin of an element.
         */
        mkMarginGutterTop: ({ value, theme : t }) => ({
            marginTop: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom margin of an element.
         */
        mkMarginGutterBottom: ({ value, theme : t }) => ({
            marginBottom: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the left margin of an element.
         */
        mkMarginGutterLeft: ({ value , theme : t }) => ({
            marginLeft: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the right margin of an element.
         */
        mkMarginGutterRight: ({ value , theme : t }) => ({
            marginRight: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the x margin of an element.
         */
        mkMarginGutterH: ({ value, theme : t  }) => ({
            marginLeft: gutter.get(t)[value],
            marginRight: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the y margin of an element.
         */
        mkMarginGutterV: ({ value, theme : t  }) => ({
            marginTop: gutter.get(t)[value],
            marginBottom: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the padding of an element.
         */
        mkPadding: ({ value, theme : t  }) => ({
            padding: space.get(t)[value],
        }),
        /**
         * The property is used to setting the top padding of an element.
         */
        mkPaddingTop: ({ value , theme : t }) => ({
            paddingTop: space.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom padding of an element.
         */
        mkPaddingBottom: ({ value, theme : t  }) => ({
            paddingBottom:space.get(t)[value],
        }),
        /**
         * The property is used to setting the left padding of an element.
         */
        mkPaddingLeft: ({ value, theme : t  }) => ({
            paddingLeft:space.get(t)[value],
        }),
        /**
         * The property is used to setting the right padding of an element.
         */
        mkPaddingRight: ({ value , theme : t }) => ({
            paddingRight: space.get(t)[value],
        }),
        /**
         * The property is used to setting the x padding of an element.
         */
        mkPaddingH: ({ value, theme : t  }) => ({
            paddingLeft: space.get(t)[value],
            paddingRight: space.get(t)[value],
        }),
        /**
         * The property is used to setting the y padding of an element.
         */
        mkPaddingV: ({ value , theme : t }) => ({
            paddingTop: space.get(t)[value],
            paddingBottom:space.get(t)[value],
        }),
         /**
         * The property is used to setting the padding of an element.
         */
        mkPaddingGutter: ({ value, theme : t  }) => ({
            padding: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the top padding of an element.
         */
        mkPaddingGutterTop: ({ value , theme : t }) => ({
            paddingTop: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the bottom padding of an element.
         */
        mkPaddingGutterBottom: ({ value, theme : t  }) => ({
            paddingBottom:gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the left padding of an element.
         */
        mkPaddingGutterLeft: ({ value, theme : t  }) => ({
            paddingLeft:gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the right padding of an element.
         */
        mkPaddingGutterRight: ({ value , theme : t }) => ({
            paddingRight: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the x padding of an element.
         */
        mkPaddingGutterH: ({ value, theme : t  }) => ({
            paddingLeft: gutter.get(t)[value],
            paddingRight: gutter.get(t)[value],
        }),
        /**
         * The property is used to setting the y padding of an element.
         */
        mkPaddingGutterV: ({ value , theme : t }) => ({
            paddingTop: gutter.get(t)[value],
            paddingBottom:gutter.get(t)[value],
        }),
        mkSquare: ({ value }) =>
            value === 'full' ?
                { width: 1, height: 1 } :value === 'full' ?{ width: '100vw', height: '100vh' }:
                { width: value, height: value }
        ,
        mkContentWidth:({ value , theme : t }) => ({
            width: content.get(t)[value],
        }),
        mkContainerWidth:({ value , theme : t }) => ({
            width: container.get(t)[value],
        }),
        mkElementWidth:({ value , theme : t }) => ({
            width: element.get(t)[value],
        }),
        mkElementHeight:({ value , theme : t }) => ({
            height: element.get(t)[value],
        }),
        mkContainerHeight:({ value , theme : t }) => ({
            height: container.get(t)[value],
        }),
    },
    ruleEnum: {
        mkWidth: {
            fullScreen:constant( {
                width: '100vw',
            }),
            full:constant ({
                width: 1,
            }),
            none:constant ({
                width: 0,
            }),
            inherit:constant({
                width: 'inherit',
            }),

        },
        mkMinWidth: {
            fullScreen: constant ({
                minWidth: '100vw',
            }),
            full: constant({
                minWidth: 1,
            }),
            none: constant({
                minWidth: 0,
            }),
            inherit: constant({
                minWidth: 'inherit',
            }),
        },
        mkMaxWidth: {
            fullScreen: constant({
                maxWidth: '100vw',
            }),
            full: constant ({
                maxWidth: '100%',
            }),
            none: constant({
                maxWidth: 0,
            }),
            inherit: constant({
                maxWidth: 'inherit',
            }),
        },
        mkHeight: {
            fullScreen:constant({
                height: '100vh',
            }),
            full:constant ({
                height: '100%',
            }),
            none:constant({
                height: 0,
            }),
            inherit:constant({
                height: 'inherit',
            }),

        },
        mkMaxHeight: {
            fullScreen: constant({
                maxHeight: '100vh',
            }),
            full: constant({
                maxHeight: '100%',
            }),
            none:constant ({
                maxHeight: 0,
            }),
            inherit:constant({
                maxHeight: 'inherit',
            }),

        },
        mkMinHeight: {
            fullScreen: constant({
                minHeight: '100vh',
            }),
            full: constant({
                minHeight: '100%',
            }),
            none: constant({
                minHeight: 0,
            }),
            inherit:constant({
                minHeight: 'inherit',
            }),

        },

    },

};
