import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { IHtmlElement } from '../../../../type-element/html-element/html-element.interface';

export interface IWebTableHeader extends IHtmlElement {
  tagName: 'th',
  className: 'WebTableHeader',
  childNodes: IWebTextNode[]
}
