import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IWebHtml } from '../web-html.interface';

export interface ISpan extends IWebHtml {
  tagName: 'span',
  className: 'Span',
  childNodes: (IWebTextNode | IWebHtml)[],
}
