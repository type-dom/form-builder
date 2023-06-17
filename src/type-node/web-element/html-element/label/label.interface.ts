import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IHtmlElement } from '../../../type-element/html-element/html-element.interface';

export interface ILabel extends IHtmlElement {
  tagName: 'label',
  className: 'Label',
  childNodes: IWebTextNode[],
}
