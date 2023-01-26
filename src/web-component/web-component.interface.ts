import { IWebHtml } from '../web-element/web-html/web-html.interface';
import { IWebElement } from '../web-element/web-element.interface';

export interface IWebComponent extends IWebHtml {
  childNodes: Array<IWebElement>; // contents
}
