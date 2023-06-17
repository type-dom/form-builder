/**
 * html虚拟标签。
 */
import { IWebTextNode } from '../../web-text-node/web-text-node.interface';
import { ITypeElement } from '../type-element.interface';

export interface IHtmlElement extends ITypeElement {
  // tagName: string;
  // className: string;
  childNodes: Array<IHtmlElement | IWebTextNode>;// contents
}
