
/**
 * Border
 * @prop
 */
import { Props as _Props, Theme } from '../../modules';
import { Rule } from '../../base/rule';
import { Color } from '../../modules/color/rule';
type SProps = {

    /**
     * hover text color
     */
    mkHoverTextColor: Color,
    /**
     * hover text color
     */
    mkHoverColor: Color,

};
type EProps = {

};
export type Props = EProps & SProps;
export const rule: Rule<SProps, EProps, _Props, Theme> = {
    ruleEnum: {

    },
    rule: {
        mkHoverTextColor: (a: Color) => ({ selector: { '&:hover': { mkTextColor: a } } }),
        mkHoverColor: (a: Color) => ({ selector: { '&:hover': { mkColor: a } } }),
    },
};

export default rule;
