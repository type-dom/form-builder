import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';

export interface IWebTableHeader extends ITypeHtml {
  tagName: 'th',
  className: 'WebTableHeader',
  childNodes: IWebTextNode[]
}
