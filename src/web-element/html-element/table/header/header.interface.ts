import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { IHtmlElement } from '../../../web-abstract/html-element/html-element.interface';

export interface IWebTableHeader extends IHtmlElement {
  tagName: 'th',
  className: 'WebTableHeader',
  childNodes: IWebTextNode[]
}
