import { IHtmlElement } from '../web-element/html-element/html-element.interface';
import { IWebElement } from '../web-element/web-element.interface';

export interface IWebComponent extends IHtmlElement {
  childNodes: Array<IWebElement>; // contents
}
