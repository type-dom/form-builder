import { IWebElement } from '../web-element/web-element.interface';
import { IWebTextNode } from '../web-text-node/web-text-node.interface';

export interface ISvgElement extends IWebElement {
  tagName: string,
  className: string,
  childNodes: (ISvgElement | IWebTextNode)[],
}
