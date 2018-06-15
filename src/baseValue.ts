import * as variable from './variable';
import m from './base';
import * as t from './base/type';
import * as css from './css';
export { t };

import {
    AbbrProps, VariableProp, Mixed,
} from './type';

const abbrs = m.ofAbbr<css.TCssProperty, AbbrProps>({
    bgColor: ['backgroundColor'],
    marginV: ['marginTop', 'marginBottom'],
    marginH: ['marginLeft', 'marginRight'],
    paddingV: ['paddingTop', 'paddingBottom'],
    paddingH: ['paddingLeft', 'paddingRight'],
});

const M = m.of<VariableProp, AbbrProps, {}, {}, {}, Mixed>()({
    variable: variable.variable,
    abbrs,
    css: css.value,
});
export default M;
