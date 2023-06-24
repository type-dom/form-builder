import { ITableHeader } from '../header/header.interface';
import { ITypeTableHead } from '../../../../type-element/type-html/table/head/head.interface';
export interface ITableHead extends ITypeTableHead {
  className: 'TableHead',
  childNodes: ITableHeader[]
}
