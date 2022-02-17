import { IWebElement } from '../web-element/web-element.interface';

export interface IWebComponent extends IWebElement {
  childNodes: Array<IWebElement>;// contents
}
