import {Option} from 'mocoolka-fp/lib/Option'
export const isDocDemo = (e: Export): e is DocDemo => e.kind === 'DocDemo';
export interface FileName { name: string, path: string, realpath: string, fileName: string,relativePath:string };

export interface DocumentSetting{
  

}
export interface DocDemo{
  kind: 'DocDemo';
  demo:FileName,
}
export interface DocMd extends FileName {
  kind: 'DocMd';
  title: string;
  items: Export[];
}
export const isDocContent = (e: Export): e is DocContent => e.kind === 'DocContent';
export interface DocContent {
  kind: 'DocContent';
  type:Option<string>,
  columns:Option<number>,
  md:string,
}
export type Export = DocDemo | DocContent;

export interface Env extends FileName {
  content: string
};


