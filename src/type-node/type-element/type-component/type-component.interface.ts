import { ITypeElement } from '../type-element.interface';
import { ITypeHtml } from '../type-html/type-html.interface';
export interface ITypeComponent extends ITypeHtml {
  tagName: 'div';
  childNodes: Array<ITypeElement>;// contents
}
