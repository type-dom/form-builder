import { IWebElement } from '../web-element.interface';
import { IWebTextNode } from '../../web-text-node/web-text-node.interface';

export interface ILabel extends IWebElement {
  tagName: 'label',
  className: 'Label',
  childNodes: IWebTextNode[],
}