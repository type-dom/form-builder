import { ITypeElement } from '../type-element.interface';
import { IHtmlElement } from '../html-element/html-element.interface';
export interface ITypeComponent extends IHtmlElement {
  tagName: 'div';
  childNodes: Array<ITypeElement>;// contents
}
