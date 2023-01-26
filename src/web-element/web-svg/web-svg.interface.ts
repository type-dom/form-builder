import { IWebTextNode } from '../../web-text-node/web-text-node.interface';
import { IWebElement } from '../web-element.interface';

export interface IWebSvg extends IWebElement {
  tagName: string,
  className: string,
  childNodes: (IWebSvg | IWebTextNode)[],
}
