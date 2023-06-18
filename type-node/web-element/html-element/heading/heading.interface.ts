import { ITypeElement } from '../../../type-element/type-element.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
export interface IHeading extends ITypeElement {
  nodeName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  className: 'Heading',
  childNodes: IWebTextNode[],
}
