import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { IHtmlElement } from '../../../web-abstract/html-element/html-element.interface';

export interface IWebOption extends IHtmlElement {
  tagName: 'option',
  className: 'WebOption',
  childNodes: (IHtmlElement | IWebTextNode)[],
}
