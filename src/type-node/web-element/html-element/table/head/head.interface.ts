import { ITypeElement } from '../../../../type-element/type-element.interface';
import { IWebTableHeader } from '../header/header.interface';
export interface IWebTableHead extends ITypeElement {
  tagName: 'thead',
  className: 'WebTableHead',
  childNodes: IWebTableHeader[]
}
