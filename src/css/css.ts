import {IProperty} from '../base/type';
import { camelCase } from 'mocoolka-fp/lib/string';
import { TCssProperty } from './PropType';
export declare type CssProperty = {
    cssName: string;
    description?: string;
    unitName?: string;
};
//tslint:disable
export const getCssProperty = (item: CssProperty): IProperty<TCssProperty> =>
    ({ propertyName: camelCase(item.cssName) , unitName: item.unitName, cssName: item.cssName}) as IProperty<TCssProperty>;

export const data: CssProperty[] = [
    {
        cssName: 'align-content',
        description: 'Specifies the alignment between the lines inside a flexible container when the items do not use all available space',
    },
    {
        cssName: 'align-items',
        description: 'Specifies the alignment for items inside a flexible container',
    },
    {
        cssName: 'all',
        description: 'Resets all properties (except unicode-bidi and direction)',
    },
    {
        cssName: 'align-self',
        description: 'Specifies the alignment for selected items inside a flexible container',
    },
    {
        cssName: 'animation',
        description: 'A shorthand property for all the animation properties',
    },
    {
        cssName: 'animation-delay',
        description: 'Specifies a delay for the start of an animation',
    },
    {
        cssName: 'animation-direction',
        description: 'Specifies whether an animation should be played forwards, backwards or in alternate cycles',
    },
    {
        cssName: 'animation-duration',
        description: 'Specifies how long an animation should take to complete one cycle',
    },
    {
        cssName: 'animation-fill-mode',
        description: 'Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)',
    },
    {
        cssName: 'animation-iteration-count',
        description: 'Specifies the number of times an animation should be played',
    },
    {
        cssName: 'animation-name',
        description: 'Specifies a name for the @keyframes animation',
    },
    {
        cssName: 'animation-play-state',
        description: 'Specifies whether the animation is running or paused',
    },
    {
        cssName: 'animation-timing-function',
        description: 'Specifies the speed curve of an animation',
    },
    {
        cssName: 'backface-visibility',
        description: 'Defines whether or not the back face of an element should be visible when facing the user',
    },
    {
        cssName: 'background',
        description: 'A shorthand property for setting all the background properties in one declaration',
    },
    {
        cssName: 'background-attachment',
        description: 'Sets whether a background image scrolls with the rest of the page, or is fixed',
    },
    {
        cssName: 'background-blend-mode',
        description: 'Specifies the blending mode of each background layer (color/image)',
    },
    {
        cssName: 'background-clip',
        description: 'Defines how far the background (color or image) should extend within an element',
    },
    {
        cssName: 'background-color',
        description: 'Specifies the background color of an element',
    },
    {
        cssName: 'background-origin',
        description: 'Specifies the origin position of a background image',
    },
    {
        cssName: 'background-position',
        description: 'Specifies the position of a background image',
    },
    {
        cssName: 'background-repeat',
        description: 'Sets if/how a background image will be repeated',
    },
    {
        cssName: 'background-image',
        description: 'Specifies one or more background images for an element',
    },
    {
        cssName: 'background-size',
        unitName: 'px',
        description: 'Specifies the size of the background images',
    },
    {
        cssName: 'border',
        description: 'A shorthand property for border-width, border-style and border-color',
    },
    {
        cssName: 'border-bottom',
        description: 'A shorthand property for setting all the bottom border properties in one declaration',
    },
    {
        cssName: 'border-bottom-color',
        description: 'Sets the color of the bottom border',
    },
    {
        cssName: 'border-bottom-left-radius',
        description: 'Defines the radius of the border of the bottom-left corner',
    },
    {
        cssName: 'border-bottom-right-radius',
        description: 'Defines the radius of the border of the bottom-right corner',
    },
    {
        cssName: 'border-bottom-style',
        description: 'Sets the style of the bottom border',
    },
    {
        cssName: 'border-bottom-width',
        unitName: 'px',
        description: 'Sets the width of the bottom border',
    },
    {
        cssName: 'border-color',
        description: 'Sets the color of the four borders',
    },
    {
        cssName: 'border-collapse',
        description: 'Sets whether table borders should collapse into a single border or be separated',
    },
    {
        cssName: 'border-image',
        description: 'A shorthand property for setting all the border-image-* properties',
    },
    {
        cssName: 'border-image-outset',
        description: 'Specifies the amount by which the border image area extends beyond the border box',
    },
    {
        cssName: 'border-image-repeat',
        description: 'Specifies whether the border image should be repeated, rounded or stretched',
    },
    {
        cssName: 'border-image-slice',
        description: 'Specifies how to slice the border image',
    },
    {
        cssName: 'border-image-source',
        description: 'Specifies the path to the image to be used as a border',
    },
    {
        cssName: 'border-image-width',
        description: 'Specifies the width of the border image',
    },
    {
        cssName: 'border-left',
        description: 'A shorthand property for setting all the left border properties in one declaration',
    },
    {
        cssName: 'border-left-style',
        description: 'Sets the style of the left border',
    },
    {
        cssName: 'border-left-color',
        description: 'Sets the color of the left border',
    },
    {
        cssName: 'border-left-width',
        unitName: 'px',
        description: 'Sets the width of the left border',
    },
    {
        cssName: 'border-radius',
        unitName: 'px',
        description: 'A shorthand property for setting all the four border-*-radius properties',
    },
    {
        cssName: 'border-right',
        description: 'A shorthand property for setting all the right border properties in one declaration',
    },
    {
        cssName: 'border-right-color',
        description: 'Sets the color of the right border',
    },
    {
        cssName: 'border-right-style',
        description: 'Sets the style of the right border',
    },
    {
        cssName: 'border-right-width',
        unitName: 'px',
        description: 'Sets the width of the right border',
    },
    {
        cssName: 'border-spacing',
        description: 'Sets the distance between the borders of adjacent cells',
    },
    {
        cssName: 'border-style',
        description: 'Sets the style of the four borders',
    },
    {
        cssName: 'border-top',
        description: 'A shorthand property for setting all the top border properties in one declaration',
    },
    {
        cssName: 'border-top-color',
        description: 'Sets the color of the top border',
    },
    {
        cssName: 'border-top-left-radius',
        description: 'Defines the radius of the border of the top-left corner',
    },
    {
        cssName: 'border-top-right-radius',
        description: 'Defines the radius of the border of the top-right corner',
    },
    {
        cssName: 'border-top-style',
        description: 'Sets the style of the top border',
    },
    {
        cssName: 'border-top-width',
        unitName: 'px',
        description: 'Sets the width of the top border',
    },
    {
        cssName: 'border-width',
        unitName: 'px',
        description: 'Sets the width of the four borders',
    },
    {
        cssName: 'box-decoration-break',
        description: 'Sets the behavior of the background and border of an element at page-break, or, for in-line elements, at line-break.',
    },
    {
        cssName: 'box-shadow',
        description: 'Attaches one or more shadows to an element',
    },
    {
        cssName: 'box-sizing',
        description: 'Defines how the width and height of an element are calculated: should they include padding and borders, or not',
    },
    {
        cssName: 'bottom',
        unitName: 'px',
        description: 'Sets the elements position, from the bottom of its parent element',
    },
    {
        cssName: 'caption-side',
        description: 'Specifies the placement of a table caption',
    },
    {
        cssName: 'caret-color',
        description: 'Specifies the color of the cursor (caret) in inputs, textareas, or any element that is editable',
    },
    {
        cssName: 'clear',
        description: 'Specifies on which sides of an element floating elements are not allowed to float',
    },
    {
        cssName: 'clip',
        description: 'Clips an absolutely positioned element',
    },
    {
        cssName: 'color',
        description: 'Sets the color of text',
    },
    {
        cssName: 'column-count',
        description: 'Specifies the number of columns an element should be divided into',
    },
    {
        cssName: 'column-fill',
        description: 'Specifies how to fill columns, balanced or not',
    },
    {
        cssName: 'column-gap',
        description: 'Specifies the gap between the columns',
    },
    {
        cssName: 'column-rule',
        description: 'A shorthand property for setting all the column-rule-* properties',
    },
    {
        cssName: 'column-rule-color',
        description: 'Specifies the color of the rule between columns',
    },
    {
        cssName: 'column-rule-style',
        description: 'Specifies the style of the rule between columns',
    },
    {
        cssName: 'column-rule-width',
        description: 'Specifies the width of the rule between columns',
    },
    {
        cssName: 'column-span',
        description: 'Specifies how many columns an element should span across',
    },
    {
        cssName: 'column-width',
        description: 'Specifies the column width',
    },
    {
        cssName: 'columns',
        description: 'A shorthand property for setting column-width and column-count',
    },
    {
        cssName: 'content',
        description: 'Used with the :before and :after pseudo-elements, to insert generated content',
    },
    {
        cssName: 'counter-increment',
        description: 'Increases or decreases the value of one or more CSS counters',
    },
    {
        cssName: 'counter-reset',
        description: 'Creates or resets one or more CSS counters',
    },
    {
        cssName: 'cursor',
        description: 'Specifies the mouse cursor to be displayed when pointing over an element',
    },
    {
        cssName: 'direction',
        description: 'Specifies the text direction/writing direction',
    },
    {
        cssName: 'display',
        description: 'Specifies how a certain HTML element should be displayed',
    },
    {
        cssName: 'empty-cells',
        description: 'Specifies whether or not to display borders and background on empty cells in a table',
    },
    {
        cssName: 'fill',
        description: 'svg property',
    },
    {
        cssName: 'filter',
        description: 'Defines effects (e.g. blurring or color shifting) on an element before the element is displayed',
    },
    {
        cssName: 'flex',
        description: 'A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties',
    },
    {
        cssName: 'flex-basis',
        description: 'Specifies the initial length of a flexible item',
    },
    {
        cssName: 'flex-direction',
        description: 'Specifies the direction of the flexible items',
    },
    {
        cssName: 'flex-flow',
        description: 'A shorthand property for the flex-direction and the flex-wrap properties',
    },
    {
        cssName: 'flex-grow',
        description: 'Specifies how much the item will grow relative to the rest',
    },
    {
        cssName: 'flex-shrink',
        description: 'Specifies how the item will shrink relative to the rest',
    },
    {
        cssName: 'flex-wrap',
        description: 'Specifies whether the flexible items should wrap or not',
    },
    {
        cssName: 'float',
        description: 'Specifies whether or not a box should float',
    },
    {
        cssName: 'font',
        description: 'Sets all the font properties in one declaration',
    },
    {
        cssName: '@font-face',
        description: 'A rule that allows websites to download and use fonts other than the "web-safe" fonts',
    },
    {
        cssName: 'font-Family',
        description: 'Specifies the font family for text',
    },
    {
        cssName: 'font-feature-settings',
        description: 'Allows control over advanced typographic features in OpenType fonts',
    },
    {
        cssName: '@font-feature-values',
        description: 'Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType',
    },
    {
        cssName: 'font-kerning ',
        description: 'Controls the usage of the kerning information (how letters are spaced)',
    },
    {
        cssName: 'font-language-override',
        description: 'Controls the usage of language-specific glyphs in a typeface',
    },
    {
        cssName: 'font-size',
        unitName: 'px',
        description: 'Specifies the font size of text',
    },
    {
        cssName: 'font-stretch',
        description: 'Selects a normal, condensed, or expanded face from a font family',
    },
    {
        cssName: 'font-size-adjust',
        description: 'Preserves the readability of text when font fallback occurs',
    },
    {
        cssName: 'font-style',
        description: 'Specifies the font style for text',
    },
    {
        cssName: 'font-synthesis',
        description: 'Controls which missing typefaces (bold or italic) may be synthesized by the browser',
    },
    {
        cssName: 'font-variant',
        description: 'Specifies whether or not a text should be displayed in a small-caps font',
    },
    {
        cssName: 'font-variant-alternates',
        description: 'Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values',
    },
    {
        cssName: 'font-variant-caps',
        description: 'Controls the usage of alternate glyphs for capital letters',
    },
    {
        cssName: 'font-variant-east-asian',
        description: 'Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)',
    },
    {
        cssName: 'font-variant-ligatures',
        description: 'Controls which ligatures and contextual forms are used in textual content of the elements it applies to',
    },
    {
        cssName: 'font-variant-numeric',
        description: 'Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers',
    },
    {
        cssName: 'font-variant-position',
        description: 'Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font',
    },
    {
        cssName: 'font-weight',
        description: 'Specifies the weight of a font',
    },
    {
        cssName: 'grid',
        description: 'A shorthand property',
    },
    {
        cssName: 'grid-area',
        description: 'Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties',
    },
    {
        cssName: 'grid-auto-columns',
        description: 'Specifies a default column size',
    },
    {
        cssName: 'grid-auto-flow',
        description: 'Specifies how auto-placed items are inserted in the grid',
    },
    {
        cssName: 'grid-auto-rows',
        description: 'Specifies a default row size',
    },
    {
        cssName: 'grid-column',
        description: 'A shorthand property for the grid-column-start and the grid-column-end properties',
    },
    {
        cssName: 'grid-column-end',
        description: 'Specifies where to end the grid item',
    },
    {
        cssName: 'grid-column-gap',
        description: 'Specifies the size of the gap between columns',
    },
    {
        cssName: 'grid-column-start',
        description: 'Specifies where to start the grid item',
    },
    {
        cssName: 'grid-gap',
        description: 'A shorthand property for the grid-row-gap and grid-column-gap properties',
    },
    {
        cssName: 'grid-row',
        description: 'A shorthand property for the grid-row-start and the grid-row-end properties',
    },
    {
        cssName: 'grid-row-end',
        description: 'Specifies where to end the grid item',
    },
    {
        cssName: 'grid-row-gap',
        description: 'Specifies the size of the gap between rows',
    },
    {
        cssName: 'grid-row-start',
        description: 'Specifies where to start the grid item',
    },
    {
        cssName: 'grid-template',
        description: 'A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties',
    },
    {
        cssName: 'grid-template-areas',
        description: 'Specifies how to display columns and rows, using named grid items',
    },
    {
        cssName: 'grid-template-columns',
        description: 'Specifies the size of the columns, and how many columns in a grid layout',
    },
    {
        cssName: 'grid-template-rows',
        description: 'Specifies the size of the rows in a grid layout',
    },
    {
        cssName: 'hanging-punctuation',
        description: 'Specifies whether a punctuation character may be placed outside the line box',
    },
    {
        cssName: 'hyphens',
        description: 'Sets how to split words to improve the layout of paragraphs',
    },
    {
        cssName: 'height',
        unitName: 'px',
        description: 'Sets the height of an element',
    },
    {
        cssName: 'image-orientation',
        description: 'Specifies a rotation in the right or clockwise direction that a user agent applies to an image',
    },
    {
        cssName: 'image-rendering',
        description: 'Gives a hint to the browser about what aspects of an image are most important to preserve when the image is scaled',
    },
    {
        cssName: 'image-resolution',
        description: 'Specifies the intrinsic resolution of all raster images used in/on the element',
    },
    {
        cssName: '@import',
        description: 'Allows you to import a style sheet into another style sheet',
    },
    {
        cssName: 'justify-content',
        description: 'Specifies the alignment between the items inside a flexible container when the items do not use all available space',
    },
    {
        cssName: '@keyframes',
        description: 'Specifies the animation code',
    },
    {
        cssName: 'left',
        unitName: 'px',
        description: 'Specifies the left position of a positioned element',
    },
    {
        cssName: 'letter-spacing',
        description: 'Increases or decreases the space between characters in a text',
        unitName: 'px',
    },
    {
        cssName: 'line-break',
        description: 'Specifies how/if to break lines',
    },
    {
        cssName: 'line-height',
        description: 'Sets the line height',
        unitName: 'px',
    },
    {
        cssName: 'list-style',
        description: 'Sets all the properties for a list in one declaration',
    },
    {
        cssName: 'list-style-image',
        description: 'Specifies an image as the list-item marker',
    },
    {
        cssName: 'list-style-position',
        description: 'Specifies the position of the list-item markers (bullet points)',
    },
    {
        cssName: 'list-style-type',
        description: 'Specifies the type of list-item marker',
    },
    {
        cssName: 'margin',
        unitName: 'px',
        description: 'Sets all the margin properties in one declaration',
    },
    {
        cssName: 'margin-top',
        unitName: 'px',
        description: 'Sets the top margin of an element',
    },
    {
        cssName: 'margin-bottom',
        unitName: 'px',
        description: 'Sets the bottom margin of an element',
    },
    {
        cssName: 'margin-left',
        unitName: 'px',
        description: 'Sets the left margin of an element',
    },
    {
        cssName: 'margin-right',
        unitName: 'px',
        description: 'Sets the right margin of an element',
    },
    {
        cssName: 'max-height',
        unitName: 'px',
        description: 'Sets the maximum height of an element',
    },
    {
        cssName: 'max-width',
        unitName: 'px',
        description: 'Sets the maximum width of an element',
    },
    {
        cssName: '@media',
        description: 'Sets the style rules for different media types/devices/sizes',
    },
    {
        cssName: 'min-height',
        unitName: 'px',
        description: 'Sets the minimum height of an element',
    },
    {
        cssName: 'min-width',
        unitName: 'px',
        description: 'Sets the minimum width of an element',
    },
    {
        cssName: 'object-fit',
        description: 'Specifies how the contents of a replaced element should be fitted to the box established by its used height and width',
    },
    {
        cssName: 'object-position',
        description: 'Specifies the alignment of the replaced element inside its box',
    },
    {
        cssName: 'opacity',
        description: 'Sets the opacity level for an element',
    },
    {
        cssName: 'order',
        description: 'Sets the order of the flexible item, relative to the rest',
    },
    {
        cssName: 'outline',
        description: 'Sets all the outline properties in one declaration',
    },
    {
        cssName: 'outline-color',
        description: 'Sets the color of an outline',
    },
    {
        cssName: 'outline-offset',
        description: 'Offsets an outline, and draws it beyond the border edge',
    },
    {
        cssName: 'outline-style',
        description: 'Sets the style of an outline',
    },
    {
        cssName: 'outline-width',
        description: 'Sets the width of an outline',
    },
    {
        cssName: 'overflow',
        description: 'Specifies what happens if content overflows an element\'s box',
    },
    {
        cssName: 'overflow-wrap',
        description: 'Specifies whether or not the browser may break lines within words in order to prevent overflow (when a string is too long to fit its containing box)',
    },
    {
        cssName: 'overflow-x',
        description: 'Specifies whether or not to clip the left/right edges of the content, if it overflows the element\'s content area',
    },
    {
        cssName: 'overflow-y',
        description: 'Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element\'s content area',
    },
    {
        cssName: 'padding',
        description: 'Sets all the padding properties in one declaration',
        unitName: 'px',
    },
    {
        cssName: 'padding-top',
        description: 'Sets the top padding of an element',
        unitName: 'px',
    },
    {
        cssName: 'padding-bottom',
        description: 'Sets the bottom padding of an element',
        unitName: 'px',
    },
    {
        cssName: 'padding-left',
        description: 'Sets the left padding of an element',
        unitName: 'px',
    },
    {
        cssName: 'padding-right',
        description: 'Sets the right padding of an element',
        unitName: 'px',
    },
    {
        cssName: 'page-break-after',
        description: 'Sets the page-breake behavior after an element',
    },
    {
        cssName: 'page-break-before',
        description: 'Sets the page-breake behavior before an element',
    },
    {
        cssName: 'page-break-inside',
        description: 'Sets the page-breake behavior inside an element',
    },
    {
        cssName: 'perspective',
        description: 'Gives a 3D-positioned element some perspective',
    },
    {
        cssName: 'perspective-origin',
        description: 'Defines at which position the user is looking at the 3D-positioned element',
    },
    {
        cssName: 'pointer-events',
        description: 'Defines whether or not an element reacts to pointer events',
    },
    {
        cssName: 'position',
        description: 'Specifies the type of positioning method used for an element (static, relative, absolute or fixed)',
    },
    {
        cssName: 'quotes',
        description: 'Sets the type of quotation marks for embedded quotations',
    },
    {
        cssName: 'resize',
        description: 'Defines if (and how) an element is resizable by the user',
    },
    {
        cssName: 'right',
        unitName: 'px',
        description: 'Specifies the right position of a positioned element',
    },
    {
        cssName: 'tab-size',
        description: 'Specifies the width of a tab character',
    },
    {
        cssName: 'table-layout',
        description: 'Defines the algorithm used to lay out table cells, rows, and columns',
    },
    {
        cssName: 'text-align',
        description: 'Specifies the horizontal alignment of text',
    },
    {
        cssName: 'text-align-last',
        description: 'Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"',
    },
    {
        cssName: 'text-combine-upright',
        description: 'Specifies the combination of multiple characters into the space of a single character',
    },
    {
        cssName: 'text-indent',
        description: 'Specifies the indentation of the first line in a text-block',
    },
    {
        cssName: 'text-justify',
        description: 'Specifies the justification method used when text-align is "justify"',
    },
    {
        cssName: 'text-decoration',
        description: 'Provides information to the rendering engine about what to optimize for when rendering text.',
    },
    {
        cssName: 'text-decoration-color',
        description: 'Specifies the color of the text-decoration',
    },
    {
        cssName: 'text-decoration-line',
        description: 'Specifies the type of line in a text-decoration',
    },
    {
        cssName: 'text-decoration-style',
        description: 'Specifies the style of the line in a text decoration',
    },
    {
        cssName: 'text-orientation',
        description: 'Defines the orientation of the text in a line',
    },
    {
        cssName: 'text-overflow',
        description: 'Specifies what should happen when text overflows the containing element',
    },
    {
        cssName: 'text-shadow',
        description: 'Adds shadow to text',
    },
    {
        cssName: 'text-transform',
        description: 'Controls the capitalization of text',
    },
    {
        cssName: 'text-underline-position',
        description: 'Specifies the position of the underline which is set using the text-decoration property',
    },
    {
        cssName: 'top',
        unitName: 'px',
        description: 'Specifies the top position of a positioned element',
    },
    {
        cssName: 'transform',
        description: 'Applies a 2D or 3D transformation to an element',
    },
    {
        cssName: 'transform-origin',
        description: 'Allows you to change the position on transformed elements',
    },
    {
        cssName: 'transform-style',
        description: 'Specifies how nested elements are rendered in 3D space',
    },
    {
        cssName: 'transition',
        description: 'A shorthand property for setting the four transition properties',
    },
    {
        cssName: 'transition-delay',
        description: 'Specifies when the transition effect will start',
    },
    {
        cssName: 'transition-duration',
        description: 'Specifies how many seconds or milliseconds a transition effect takes to complete',
    },
    {
        cssName: 'transition-property',
        description: 'Specifies the name of the CSS property the transition effect is for',
    },
    {
        cssName: 'transition-timing-function',
        description: 'Specifies the speed curve of the transition effect',
    },
    {
        cssName: 'user-select',
        description: 'Specifies whether the text of an element can be selected',
    },
    {
        cssName: 'unicode-bidi',
        description: 'Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document',
    },
    {
        cssName: 'vertical-align',
        description: 'Sets the vertical alignment of an element',
    },
    {
        cssName: 'visibility',
        description: 'Specifies whether or not an element is visible',
    },
    {
        cssName: 'width',
        unitName: 'px',
        description: 'Sets the width of an element',
    },
    {
        cssName: 'will-change',
        description: 'Provides a way for authors to hint browsers about the kind of changes to be expected on an element',
    },
    {
        cssName: 'word-break',
        description: 'Specifies line breaking rules for non-CJK scripts',
    },
    {
        cssName: 'word-spacing',
        description: 'Increases or decreases the space between words in a text',
    },
    {
        cssName: 'word-wrap',
        description: 'Allows long, unbreakable words to be broken and wrap to the next line',
    },
    {
        cssName: 'white-space',
        description: 'Specifies how white-space inside an element is handled',
    },
    {
        cssName: 'zoom',
        description: 'sets the initial zoom factor of a document defined by the @viewport at-rule',
    },
    {
        cssName: 'z-index',
        description: 'Sets the stack order of a positioned element',
    },
];
