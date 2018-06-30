import { TCssProperty } from './PropType';
import { IProperty } from '../base/type';
/**
 * stand css property collection
 */
export const cssProperties: IProperty<TCssProperty>[] = [
    { propertyName: 'alignContent', cssName: 'align-content' },
    { propertyName: 'alignItems', cssName: 'align-items' },
    { propertyName: 'all', cssName: 'all' },
    { propertyName: 'alignSelf', cssName: 'align-self' },
    { propertyName: 'animation', cssName: 'animation' },
    { propertyName: 'animationDelay', cssName: 'animation-delay' },
    { propertyName: 'animationDirection', cssName: 'animation-direction' },
    { propertyName: 'animationDuration', cssName: 'animation-duration' },
    { propertyName: 'animationFillMode', cssName: 'animation-fill-mode' },
    { propertyName: 'animationIterationCount', cssName: 'animation-iteration-count' },
    { propertyName: 'animationName', cssName: 'animation-name' },
    { propertyName: 'animationPlayState', cssName: 'animation-play-state' },
    { propertyName: 'animationTimingFunction', cssName: 'animation-timing-function' },
    { propertyName: 'backfaceVisibility', cssName: 'backface-visibility' },
    { propertyName: 'background', cssName: 'background' },
    { propertyName: 'backgroundAttachment', cssName: 'background-attachment' },
    { propertyName: 'backgroundBlendMode', cssName: 'background-blend-mode' },
    { propertyName: 'backgroundClip', cssName: 'background-clip' },
    { propertyName: 'backgroundColor', cssName: 'background-color' },
    { propertyName: 'backgroundOrigin', cssName: 'background-origin' },
    { propertyName: 'backgroundPosition', cssName: 'background-position' },
    { propertyName: 'backgroundRepeat', cssName: 'background-repeat' },
    { propertyName: 'backgroundImage', cssName: 'background-image' },
    { propertyName: 'backgroundSize', unitName: 'px', cssName: 'background-size' },
    { propertyName: 'border', cssName: 'border' },
    { propertyName: 'borderBottom', cssName: 'border-bottom' },
    { propertyName: 'borderBottomColor', cssName: 'border-bottom-color' },
    { propertyName: 'borderBottomLeftRadius', cssName: 'border-bottom-left-radius' },
    { propertyName: 'borderBottomRightRadius', cssName: 'border-bottom-right-radius' },
    { propertyName: 'borderBottomStyle', cssName: 'border-bottom-style' },
    { propertyName: 'borderBottomWidth', unitName: 'px', cssName: 'border-bottom-width' },
    { propertyName: 'borderColor', cssName: 'border-color' },
    { propertyName: 'borderCollapse', cssName: 'border-collapse' },
    { propertyName: 'borderImage', cssName: 'border-image' },
    { propertyName: 'borderImageOutset', cssName: 'border-image-outset' },
    { propertyName: 'borderImageRepeat', cssName: 'border-image-repeat' },
    { propertyName: 'borderImageSlice', cssName: 'border-image-slice' },
    { propertyName: 'borderImageSource', cssName: 'border-image-source' },
    { propertyName: 'borderImageWidth', cssName: 'border-image-width' },
    { propertyName: 'borderLeft', cssName: 'border-left' },
    { propertyName: 'borderLeftStyle', cssName: 'border-left-style' },
    { propertyName: 'borderLeftColor', cssName: 'border-left-color' },
    { propertyName: 'borderLeftWidth', unitName: 'px', cssName: 'border-left-width' },
    { propertyName: 'borderRadius', unitName: 'px', cssName: 'border-radius' },
    { propertyName: 'borderRight', cssName: 'border-right' },
    { propertyName: 'borderRightColor', cssName: 'border-right-color' },
    { propertyName: 'borderRightStyle', cssName: 'border-right-style' },
    { propertyName: 'borderRightWidth', unitName: 'px', cssName: 'border-right-width' },
    { propertyName: 'borderSpacing', cssName: 'border-spacing' },
    { propertyName: 'borderStyle', cssName: 'border-style' },
    { propertyName: 'borderTop', cssName: 'border-top' },
    { propertyName: 'borderTopColor', cssName: 'border-top-color' },
    { propertyName: 'borderTopLeftRadius', cssName: 'border-top-left-radius' },
    { propertyName: 'borderTopRightRadius', cssName: 'border-top-right-radius' },
    { propertyName: 'borderTopStyle', cssName: 'border-top-style' },
    { propertyName: 'borderTopWidth', unitName: 'px', cssName: 'border-top-width' },
    { propertyName: 'borderWidth', unitName: 'px', cssName: 'border-width' },
    { propertyName: 'boxDecorationBreak', cssName: 'box-decoration-break' },
    { propertyName: 'boxShadow', cssName: 'box-shadow' },
    { propertyName: 'boxSizing', cssName: 'box-sizing' },
    { propertyName: 'bottom', unitName: 'px', cssName: 'bottom' },
    { propertyName: 'captionSide', cssName: 'caption-side' },
    { propertyName: 'caretColor', cssName: 'caret-color' },
    { propertyName: 'clear', cssName: 'clear' },
    { propertyName: 'clip', cssName: 'clip' },
    { propertyName: 'color', cssName: 'color' },
    { propertyName: 'columnCount', cssName: 'column-count' },
    { propertyName: 'columnFill', cssName: 'column-fill' },
    { propertyName: 'columnGap', cssName: 'column-gap' },
    { propertyName: 'columnRule', cssName: 'column-rule' },
    { propertyName: 'columnRuleColor', cssName: 'column-rule-color' },
    { propertyName: 'columnRuleStyle', cssName: 'column-rule-style' },
    { propertyName: 'columnRuleWidth', cssName: 'column-rule-width' },
    { propertyName: 'columnSpan', cssName: 'column-span' },
    { propertyName: 'columnWidth', cssName: 'column-width' },
    { propertyName: 'columns', cssName: 'columns' },
    { propertyName: 'content', cssName: 'content' },
    { propertyName: 'counterIncrement', cssName: 'counter-increment' },
    { propertyName: 'counterReset', cssName: 'counter-reset' },
    { propertyName: 'cursor', cssName: 'cursor' },
    { propertyName: 'direction', cssName: 'direction' },
    { propertyName: 'display', cssName: 'display' },
    { propertyName: 'emptyCells', cssName: 'empty-cells' },
    { propertyName: 'fill', cssName: 'fill' },
    { propertyName: 'filter', cssName: 'filter' },
    { propertyName: 'flex', cssName: 'flex' },
    { propertyName: 'flexBasis', cssName: 'flex-basis' },
    { propertyName: 'flexDirection', cssName: 'flex-direction' },
    { propertyName: 'flexFlow', cssName: 'flex-flow' },
    { propertyName: 'flexGrow', cssName: 'flex-grow' },
    { propertyName: 'flexShrink', cssName: 'flex-shrink' },
    { propertyName: 'flexWrap', cssName: 'flex-wrap' },
    { propertyName: 'float', cssName: 'float' },
    { propertyName: 'font', cssName: 'font' },
    { propertyName: 'fontFace', cssName: '@font-face' },
    { propertyName: 'fontFamily', cssName: 'font-Family' },
    { propertyName: 'fontFeatureSettings', cssName: 'font-feature-settings' },
    { propertyName: 'fontFeatureValues', cssName: '@font-feature-values' },
    { propertyName: 'fontKerning', cssName: 'font-kerning ' },
    { propertyName: 'fontLanguageOverride', cssName: 'font-language-override' },
    { propertyName: 'fontSize', unitName: 'px', cssName: 'font-size' },
    { propertyName: 'fontStretch', cssName: 'font-stretch' },
    { propertyName: 'fontSizeAdjust', cssName: 'font-size-adjust' },
    { propertyName: 'fontStyle', cssName: 'font-style' },
    { propertyName: 'fontSynthesis', cssName: 'font-synthesis' },
    { propertyName: 'fontVariant', cssName: 'font-variant' },
    { propertyName: 'fontVariantAlternates', cssName: 'font-variant-alternates' },
    { propertyName: 'fontVariantCaps', cssName: 'font-variant-caps' },
    { propertyName: 'fontVariantEastAsian', cssName: 'font-variant-east-asian' },
    { propertyName: 'fontVariantLigatures', cssName: 'font-variant-ligatures' },
    { propertyName: 'fontVariantNumeric', cssName: 'font-variant-numeric' },
    { propertyName: 'fontVariantPosition', cssName: 'font-variant-position' },
    { propertyName: 'fontWeight', cssName: 'font-weight' },
    { propertyName: 'grid', cssName: 'grid' },
    { propertyName: 'gridArea', cssName: 'grid-area' },
    { propertyName: 'gridAutoColumns', cssName: 'grid-auto-columns' },
    { propertyName: 'gridAutoFlow', cssName: 'grid-auto-flow' },
    { propertyName: 'gridAutoRows', cssName: 'grid-auto-rows' },
    { propertyName: 'gridColumn', cssName: 'grid-column' },
    { propertyName: 'gridColumnEnd', cssName: 'grid-column-end' },
    { propertyName: 'gridColumnGap', cssName: 'grid-column-gap' },
    { propertyName: 'gridColumnStart', cssName: 'grid-column-start' },
    { propertyName: 'gridGap', cssName: 'grid-gap' },
    { propertyName: 'gridRow', cssName: 'grid-row' },
    { propertyName: 'gridRowEnd', cssName: 'grid-row-end' },
    { propertyName: 'gridRowGap', cssName: 'grid-row-gap' },
    { propertyName: 'gridRowStart', cssName: 'grid-row-start' },
    { propertyName: 'gridTemplate', cssName: 'grid-template' },
    { propertyName: 'gridTemplateAreas', cssName: 'grid-template-areas' },
    { propertyName: 'gridTemplateColumns', cssName: 'grid-template-columns' },
    { propertyName: 'gridTemplateRows', cssName: 'grid-template-rows' },
    { propertyName: 'hangingPunctuation', cssName: 'hanging-punctuation' },
    { propertyName: 'hyphens', cssName: 'hyphens' },
    { propertyName: 'height', unitName: 'px', cssName: 'height' },
    { propertyName: 'imageOrientation', cssName: 'image-orientation' },
    { propertyName: 'imageRendering', cssName: 'image-rendering' },
    { propertyName: 'imageResolution', cssName: 'image-resolution' },
    { propertyName: 'import', cssName: '@import' },
    { propertyName: 'justifyContent', cssName: 'justify-content' },
    { propertyName: 'keyframes', cssName: '@keyframes' },
    { propertyName: 'left', unitName: 'px', cssName: 'left' },
    { propertyName: 'letterSpacing', unitName: 'px', cssName: 'letter-spacing' },
    { propertyName: 'lineBreak', cssName: 'line-break' },
    { propertyName: 'lineHeight', unitName: 'px', cssName: 'line-height' },
    { propertyName: 'listStyle', cssName: 'list-style' },
    { propertyName: 'listStyleImage', cssName: 'list-style-image' },
    { propertyName: 'listStylePosition', cssName: 'list-style-position' },
    { propertyName: 'listStyleType', cssName: 'list-style-type' },
    { propertyName: 'margin', unitName: 'px', cssName: 'margin' },
    { propertyName: 'marginTop', unitName: 'px', cssName: 'margin-top' },
    { propertyName: 'marginBottom', unitName: 'px', cssName: 'margin-bottom' },
    { propertyName: 'marginLeft', unitName: 'px', cssName: 'margin-left' },
    { propertyName: 'marginRight', unitName: 'px', cssName: 'margin-right' },
    { propertyName: 'maxHeight', unitName: 'px', cssName: 'max-height' },
    { propertyName: 'maxWidth', unitName: 'px', cssName: 'max-width' },
    { propertyName: 'media', cssName: '@media' },
    { propertyName: 'minHeight', unitName: 'px', cssName: 'min-height' },
    { propertyName: 'minWidth', unitName: 'px', cssName: 'min-width' },
    { propertyName: 'objectFit', cssName: 'object-fit' },
    { propertyName: 'objectPosition', cssName: 'object-position' },
    { propertyName: 'opacity', cssName: 'opacity' },
    { propertyName: 'order', cssName: 'order' },
    { propertyName: 'outline', cssName: 'outline' },
    { propertyName: 'outlineColor', cssName: 'outline-color' },
    { propertyName: 'outlineOffset', cssName: 'outline-offset' },
    { propertyName: 'outlineStyle', cssName: 'outline-style' },
    { propertyName: 'outlineWidth', cssName: 'outline-width' },
    { propertyName: 'overflow', cssName: 'overflow' },
    { propertyName: 'overflowWrap', cssName: 'overflow-wrap' },
    { propertyName: 'overflowX', cssName: 'overflow-x' },
    { propertyName: 'overflowY', cssName: 'overflow-y' },
    { propertyName: 'padding', unitName: 'px', cssName: 'padding' },
    { propertyName: 'paddingTop', unitName: 'px', cssName: 'padding-top' },
    { propertyName: 'paddingBottom', unitName: 'px', cssName: 'padding-bottom' },
    { propertyName: 'paddingLeft', unitName: 'px', cssName: 'padding-left' },
    { propertyName: 'paddingRight', unitName: 'px', cssName: 'padding-right' },
    { propertyName: 'pageBreakAfter', cssName: 'page-break-after' },
    { propertyName: 'pageBreakBefore', cssName: 'page-break-before' },
    { propertyName: 'pageBreakInside', cssName: 'page-break-inside' },
    { propertyName: 'perspective', cssName: 'perspective' },
    { propertyName: 'perspectiveOrigin', cssName: 'perspective-origin' },
    { propertyName: 'pointerEvents', cssName: 'pointer-events' },
    { propertyName: 'position', cssName: 'position' },
    { propertyName: 'quotes', cssName: 'quotes' },
    { propertyName: 'resize', cssName: 'resize' },
    { propertyName: 'right', unitName: 'px', cssName: 'right' },
    { propertyName: 'tabSize', cssName: 'tab-size' },
    { propertyName: 'tableLayout', cssName: 'table-layout' },
    { propertyName: 'textAlign', cssName: 'text-align' },
    { propertyName: 'textAlignLast', cssName: 'text-align-last' },
    { propertyName: 'textCombineUpright', cssName: 'text-combine-upright' },
    { propertyName: 'textIndent', cssName: 'text-indent' },
    { propertyName: 'textJustify', cssName: 'text-justify' },
    { propertyName: 'textDecoration', cssName: 'text-decoration' },
    { propertyName: 'textDecorationColor', cssName: 'text-decoration-color' },
    { propertyName: 'textDecorationLine', cssName: 'text-decoration-line' },
    { propertyName: 'textDecorationStyle', cssName: 'text-decoration-style' },
    { propertyName: 'textOrientation', cssName: 'text-orientation' },
    { propertyName: 'textOverflow', cssName: 'text-overflow' },
    { propertyName: 'textShadow', cssName: 'text-shadow' },
    { propertyName: 'textTransform', cssName: 'text-transform' },
    { propertyName: 'textUnderlinePosition', cssName: 'text-underline-position' },
    { propertyName: 'top', unitName: 'px', cssName: 'top' },
    { propertyName: 'transform', cssName: 'transform' },
    { propertyName: 'transformOrigin', cssName: 'transform-origin' },
    { propertyName: 'transformStyle', cssName: 'transform-style' },
    { propertyName: 'transition', cssName: 'transition' },
    { propertyName: 'transitionDelay', cssName: 'transition-delay' },
    { propertyName: 'transitionDuration', cssName: 'transition-duration' },
    { propertyName: 'transitionProperty', cssName: 'transition-property' },
    { propertyName: 'transitionTimingFunction', cssName: 'transition-timing-function' },
    { propertyName: 'userSelect', cssName: 'user-select' },
    { propertyName: 'unicodeBidi', cssName: 'unicode-bidi' },
    { propertyName: 'verticalAlign', cssName: 'vertical-align' },
    { propertyName: 'visibility', cssName: 'visibility' },
    { propertyName: 'width', unitName: 'px', cssName: 'width' },
    { propertyName: 'willChange', cssName: 'will-change' },
    { propertyName: 'wordBreak', cssName: 'word-break' },
    { propertyName: 'wordSpacing', cssName: 'word-spacing' },
    { propertyName: 'wordWrap', cssName: 'word-wrap' },
    { propertyName: 'whiteSpace', cssName: 'white-space' },
    { propertyName: 'zoom', cssName: 'zoom' },
    { propertyName: 'zIndex', cssName: 'z-index' }];
