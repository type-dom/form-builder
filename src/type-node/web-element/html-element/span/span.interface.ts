import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IHtmlElement } from '../../../type-element/html-element/html-element.interface';

export interface ISpan extends IHtmlElement {
  tagName: 'span',
  className: 'Span',
  childNodes: (IWebTextNode | IHtmlElement)[],
}
