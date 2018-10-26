import * as m from './type';
// import * as prettier from 'prettier';
import { readFileAsPlainStringSync } from 'mocoolka-fs';
import { formatJSX } from './format'
import { slugify } from 'mocoolka-fp/lib/string';

/* const prettierOptions: prettier.Options = {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
    printWidth: 120
  } */

// const formatJSX = (markdown: string): string => markdown;// prettier.format(markdown, prettierOptions);

export const write = (a: m.DocMd) => formatJSX(`
import * as React from 'react';
import {  Container ,Markdown } from '../../../../src';
import { Demo } from '../../components/Demo'
${importDemos(a)}
export default ()=> {
    return (

        <Container layout='column'>
            ${demos(a)}
        </Container>
    );
  }
`);
const getVaraibleName = (name: string) => slugify(name, '.');
const importDemos = (a: m.DocMd) => (
    a.items.filter(m.isDocDemo).map((b) => {
        return ` import ${getVaraibleName(b.demo.name)} from  '${b.demo.relativePath}'`
    }).join('\n')
);

const printDocDemo=(b: m.DocDemo,index:number)=>`
<Demo
key={${index}}
js={${getVaraibleName(b.demo.name)}}
raw={\`${readFileAsPlainStringSync(b.demo.realpath).run()}\`}
githubLocation={\`${SOURCE_CODE_ROOT_URL}/docs/src/${b.demo.path}\`}
/>
`
const printDocContent=(b: m.DocContent,index:number)=>`
<Markdown
key={${index}}
${b.type.map(v => `type={'${v}'}`).getOrElse('')}
${b.columns.map(v => `columns={'${v}'}`).getOrElse('')}
text={\`${b.md}\`}
/>
`
const SOURCE_CODE_ROOT_URL = 'mocoolka-ui-compontents'
const demos = (a: m.DocMd) => (
    a.items.map((b, index) => {
        switch (b.kind) {
            case 'DocDemo':
                return printDocDemo(b,index);
            default:{
                return printDocContent(b,index);
            }
                
        }
    }).join('\n')
);
/* const demos1 = (a: m.DocMd) => (
    a.items.filter(m.isDocDemo).map(b => (
        {
            name: b.name,
            js: `require('${b.path}').default`,
            raw: `readFileAsPlainStringSync('${b.path}').run()`,
        })
    ).map(c=>`{name:\`${c.name}\`,\njs:${c.js},\nraw:${c.raw}\n}`).join(',\n')
); */
