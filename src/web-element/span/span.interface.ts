import { IWebElement } from '../web-element.interface';
import { IWebTextNode } from '../../web-text-node/web-text-node.interface';

export interface ISpan extends IWebElement {
  tagName: 'span',
  className: 'Span',
  childNodes: (IWebTextNode | IWebElement)[],
}