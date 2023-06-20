import { ITypeProperty } from '../type-element/type-element.interface';

export interface INodeAttr {
  name: string,
  value: string;
}
export interface IPath {
  name: string,
  pos: number,
}
export interface ITypeNode {
  nodeName: string;
  className?: string;
  propObj?: ITypeProperty;
  nodeValue?: string;
  parentNode?: ITypeNode | null;
  childNodes?: ITypeNode[];
  attributes?: INodeAttr[];
}
