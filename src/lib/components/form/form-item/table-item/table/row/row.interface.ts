import { ITypeTableRow } from '@type-dom/framework';
import { ITableDataCell } from '../data-cell/data-cell.interface';

export interface ITableRow extends ITypeTableRow {
  className: 'TableRow';
  childNodes: ITableDataCell[];
}
