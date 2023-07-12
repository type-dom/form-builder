import { ITypeTableHead } from 'type-dom.ts';
import { ITableHeaderCell } from '../header-cell/header-cell.interface';
export interface ITableHead extends ITypeTableHead {
  className: 'TableHead',
  childNodes: ITableHeaderCell[]
}
