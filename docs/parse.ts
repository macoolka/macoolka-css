
import { flatten } from 'mocoolka-fp/lib/Array';
import { readFiles } from './fs';
import { parseTs } from 'mocoolka-ast/lib/ts/interface'

export const parseProperties = (root: string) => (inputPath: string, outPath: string) => {
   // const files: DInterface[] = flatten(readFiles('**/*.ts')(root, inputPath, outPath).map(a => a.map(b => parseTs([])(b.realpath))).run());
    return flatten(readFiles('**/*.ts')(root, inputPath, outPath).map(a => a.map(b => parseTs(['CommonProperties'])(b.realpath))).run());
};