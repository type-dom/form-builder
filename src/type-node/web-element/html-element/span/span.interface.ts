import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ITypeHtml } from '../../../type-element/type-html/type-html.interface';
export interface ISpan extends ITypeHtml {
  tagName: 'span',
  className: 'Span',
  childNodes: (IWebTextNode | ITypeHtml)[],
}
