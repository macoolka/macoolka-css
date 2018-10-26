import program from 'commander';
import pj from '../../package.json';
import ts from '../ts'
import * as path from 'path';
program
.version(pj.version)
.usage('[options] <rootPath> ', )
.option('-i, --input <s>', 'input <path>`', process.cwd())
.option('-o, --output <s>', 'output <path>`', process.cwd())
.parse(process.argv);


/* const options = {
dev: Boolean(program.dev),
outputPath: String(program.output),
yarn: Boolean(program.yarn)
} */
const rootPath = program.args.length === 0 ? path.resolve(process.cwd(), 'src') : path.resolve(process.cwd(), program.args[0]);
const inputPath = path.resolve(rootPath,program.input ? program.input:'input');
const outputPath =  path.resolve(rootPath,program.output ? program.output :  'output');
ts(inputPath, outputPath).run();

