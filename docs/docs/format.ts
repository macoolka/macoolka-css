import * as prettier from 'prettier';

export const formatJSX = (content: string): string => prettier.format(content, {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
    printWidth: 120
});
export const formatJson = (content: string): string => prettier.format(content, {
    parser: 'json',
    semi: false,
    singleQuote: true,
    printWidth: 120
});
