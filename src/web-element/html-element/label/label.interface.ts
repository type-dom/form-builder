import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IHtmlElement } from '../html-element.interface';

export interface ILabel extends IHtmlElement {
  tagName: 'label',
  className: 'Label',
  childNodes: IWebTextNode[],
}
