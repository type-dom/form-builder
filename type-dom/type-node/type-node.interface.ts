import { ITypeProperty } from '../type-element/type-element.interface';

export interface INodeAttr {
  name: string,
  value: string | number | boolean;
}
export interface IComponent {
  name: string,
  pos: number,
}
export interface ITypeNode {
  nodeName: string;
  className?: string;
  propObj?: ITypeProperty;
  nodeValue?: string | number | boolean;
  parentNode?: ITypeNode | null;
  childNodes?: ITypeNode[];
  attributes?: INodeAttr[];
}
