import { ITypeElement } from '../type-element.interface';
import { IHtmlElement } from '../html-element/html-element.interface';
export interface IWebComponent extends IHtmlElement {
  tagName: 'div';
  childNodes: Array<ITypeElement>;// contents
}
