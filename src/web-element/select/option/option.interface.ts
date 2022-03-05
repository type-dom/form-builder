import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IWebElement } from '../../web-element.interface';

export interface IWebOption extends IWebElement {
  tagName: 'option',
  className: 'WebOption',
  childNodes: (IWebElement | IWebTextNode)[],
}
