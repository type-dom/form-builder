/**
 * html虚拟标签。
 */
import { IWebTextNode } from '../../web-text-node/web-text-node.interface';
import { IWebElement } from '../web-element.interface';

export interface IHtmlElement extends IWebElement {
  // tagName: string;
  // className: string;
  childNodes: Array<IHtmlElement | IWebTextNode>;// contents
}
