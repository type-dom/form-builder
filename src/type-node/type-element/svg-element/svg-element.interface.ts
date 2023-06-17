import { IWebTextNode } from '../../web-text-node/web-text-node.interface';
import { ITypeElement } from '../type-element.interface';
export interface ISvgElement extends ITypeElement {
  tagName: string,
  className: string,
  childNodes: (ISvgElement | IWebTextNode)[],
}
