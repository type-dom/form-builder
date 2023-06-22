import { ITypeNode } from '../type-node/type-node.interface';
import { ITypeProperty } from '../type-element/type-element.interface';
export interface IXElement extends ITypeNode {
  className: 'XElement',
  propObj: ITypeProperty;
}
