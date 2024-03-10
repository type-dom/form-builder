import { ITypeTableBody } from '@type-dom/framework';
import { ITableRow } from '../row/row.interface';

export interface ITableBody extends ITypeTableBody {
  className: 'TableBody';
  childNodes: ITableRow[];
}
