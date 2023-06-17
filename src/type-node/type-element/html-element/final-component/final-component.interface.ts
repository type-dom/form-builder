import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ITypeElement } from '../../type-element.interface';
export interface IFinalComponent extends ITypeElement {
  childNodes: IWebTextNode[]
}
