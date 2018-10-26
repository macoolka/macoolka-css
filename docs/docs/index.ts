import { IO } from 'mocoolka-fp/lib/IO';
import { log } from 'mocoolka-fp/lib/Console';
import * as t from './type';
import { parseDocMd, ParseError } from './parser';
import { fold, findFirst, } from 'mocoolka-fp/lib/Array';
import { readFiles, writeModule, readMds, readApp, writeFile } from '../fs';
import {parseTs} from 'mocoolka-ast/lib/ts/interface'
import { Semigroup } from 'mocoolka-fp/lib/Semigroup';
import chalk from 'chalk';
import * as _path from 'path';
import { readFileAsPlainStringSync, } from 'mocoolka-fs';
import { write } from './react';
import { formatJson } from './format';
const printError = (error: ParseError): string => {
  switch (error._tag) {
    case 'DemoMissingName':
      return chalk.red.bold(`Missing demo name "${error.name}" in module "${error.module}"`);
    case 'SpecInvalidConent':
      return chalk.red.bold(`Invalid content "${error.content}" in module "${error.module}",It must is object`);
    case 'CommonPropsInvalidPropType':
      return chalk.red.bold(`Invalid property type on name "${error.propertyName}" in module "${error.module}"`);
    case 'NotFound':
      return 'not found';
  }
};

export const fail = new IO(() => process.exit(1));


/* export const getModuleName = (root: string) => (path: string) => {
  const paths = _path.relative(root, path);
  return _path.parse(paths).dir.split(_path.sep).join('.') + '.' + _path.parse(paths).name
}; */
const getPathName = (path: string) => path.split('.').slice(0, path.split('.').length - 1).join(_path.sep);


export const processModules = (root: string) => (inputPath: string, outPath: string) => {
  const demos = readFiles(root, inputPath, outPath).run();
  const getDemo = (name: string): t.FileName | undefined | null => demos.find(a => a.name === name);
  const processModule = (a: t.FileName): IO<void> => {
    const e: t.Env = {
      ...a,
      content: readFileAsPlainStringSync(a.realpath).run(),
    };
    const processModule = (module: t.DocMd): IO<void> => {
      console.log(module)
      return writeModule(_path.resolve(_path.resolve(root, outPath, getPathName(module.name))), module.fileName + '.tsx')
        (write(module));
    };

    return parseDocMd(getDemo).run(e).fold(
      errors => {
        return log(errors.filter(a => a._tag !== 'NotFound').map(err => printError(err)).join('\n'));
      },
      v => processModule(v)
    );
  };

  return readMds(root, inputPath, outPath).map(a => { console.log(a); return a }).map(items => items.map(item => processModule(item).run()));
};
export interface MBaseModel {
  name: string;
  title?: string;
  header?: string;
  description?: string;
}
export interface MBaseModelItem<T extends MBaseModel> extends MBaseModel {
  items: T[];
}

export interface MNav extends MBaseModel {
  href?: string;
  items: MNav[];
}
/**
 * Gets {@link Semigroup} instance for dictionaries given {@link Semigroup} instance for their values
 * @function
 * @since 1.4.0
 * @example
 * const S = getDictionarySemigroup(semigroupSum)
 * const result = S.concat({ foo: 123 }, { foo: 456 }) // { foo: 123 + 456 }
 * @param S - {@link Semigroup} instance for dictionary values
 */
export const getMNavArraySemigroup = (): Semigroup<MNav[]> => {
  return {
    concat: (x, y) => {
      const result: MNav[] = [];
      for (const a of x) {
        result.push(findFirst(y, (b => b.name === a.name)).fold(a,
          v => ({ ...a, items: getMNavArraySemigroup().concat(a.items, v.items) })))
      }
      for (const a of y) {
        if (findFirst(x, (b => b.name === a.name)).isNone()) {
          result.push(a)
        }
      }
      return result;
    }
  }
}
/* const getMNavSemigroup = getRecordSemigroup<MNav>({
  name: getLastSemigroup<string>(),
  items: getArraySemigroup<MNav>()
}); */
export const processNavs = (root: string) => (inputPath: string, outPath: string) => {
  //const navRoot:MNav = {};
  const getNav = (rootHref: string) => (names: string[]): MNav => {
    const result = { name: 'root', href: '', items: [] };
    return fold(names, result, (h, tails) => {
      return ({ name: h, href: rootHref + '/' + h, items: tails.length > 0 ? [getNav(rootHref + '/' + h)(tails)] : [] })
    })
  }
  const processModule = (a: t.FileName): MNav[] => {
    const names = a.name.split('.').filter(name => name !== 'index');
    const nav = getNav('')(names);
    return [nav];
  };
  return readMds(root, inputPath, outPath).map(items => items.map(item => processModule(item)).reduce((a, b) => getMNavArraySemigroup().concat(a, b), []))
    .map(JSON.stringify).chain(
      writeFile(_path.resolve(root, outPath), 'navs.json')
    );
  /*   return readMds(root, inputPath, outPath).map(items => items.map(item => processModule(item)).reduce((a, b) => getMNavSemigroup.concat(a, b), { name: '', items: [] }))
      .map(JSON.stringify).chain(
        writeFile(_path.resolve(root, outPath), 'navs.json')
      ); */
};
export const processApp = (root: string) => (inputPath: string, outPath: string) => {
  return readApp(root, inputPath).map(formatJson).chain(writeFile(_path.resolve(root, outPath), 'app.json'))
};
const main = (root: string) => (inputPath: string, outPath: string) => log('- DOCUMENTATION -')
  .chain(_ => log('generating app'))
  .chain(_ => (processApp(root)(inputPath, outPath)))
  .chain(_ => log('generating nav'))
  .chain(_ => (processNavs(root)(inputPath, outPath)))
  .chain(_ => log('generating docs...'))
  .chain(_ => (processModules(root)(inputPath, outPath)))
  .chain(_ => log('generating index...'))
/*   .chain(_ => procssIndexModule)
  .chain(_ => log('generation ok')); */
export default main;

