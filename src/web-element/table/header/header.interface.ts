import { IWebElement } from '../../web-element.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';

export interface IWebTableHeader extends IWebElement {
  tagName: 'th',
  className: 'WebTableHeader',
  childNodes: IWebTextNode[]
}