import { IWebTextNode } from '../../web-text-node/web-text-node.interface';
import { IWebElement } from '../web-element.interface';

export interface ILabel extends IWebElement {
  tagName: 'label',
  className: 'Label',
  childNodes: IWebTextNode[],
}
