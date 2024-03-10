import { ITypeTable } from '@type-dom/framework';
import { ITableHead } from './head/head.interface';
import { ITableRow } from './row/row.interface';

export interface ITable extends ITypeTable {
  className: 'Table';
  childNodes: (ITableRow | ITableHead)[];
}
