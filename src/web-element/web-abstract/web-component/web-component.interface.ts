import { IWebElement } from '../../web-element.interface';
import { IHtmlElement } from '../html-element/html-element.interface';

export interface IWebComponent extends IHtmlElement {
  tagName: 'div';
  childNodes: Array<IWebElement>;// contents
}
