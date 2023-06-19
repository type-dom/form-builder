/**
 * html虚拟标签。
 */
import { ITypeNode } from '../../type-node.interface';
import { ITypeElement } from '../type-element.interface';
export interface ITypeHtml extends ITypeElement {
  childNodes: Array<ITypeNode>;// contents
}
