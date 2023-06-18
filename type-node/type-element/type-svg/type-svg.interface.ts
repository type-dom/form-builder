import { IWebTextNode } from '../../web-text-node/web-text-node.interface';
import { ITypeElement } from '../type-element.interface';
export interface ITypeSvg extends ITypeElement {
  childNodes: (ITypeSvg | IWebTextNode)[],
}
