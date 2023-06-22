import { ITypeElement } from '../../../../type-element/type-element.interface';
import { ITableHeader } from '../header/header.interface';
export interface ITableHead extends ITypeElement {
  nodeName: 'thead',
  className: 'TableHead',
  childNodes: ITableHeader[]
}
