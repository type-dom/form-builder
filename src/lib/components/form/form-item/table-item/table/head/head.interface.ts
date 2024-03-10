import { ITypeTableHead } from '@type-dom/framework';
import { ITableHeaderCell } from '../header-cell/header-cell.interface';

export interface ITableHead extends ITypeTableHead {
  className: 'TableHead';
  childNodes: ITableHeaderCell[];
}
