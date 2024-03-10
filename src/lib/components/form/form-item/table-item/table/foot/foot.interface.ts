import { ITypeTableFoot } from '@type-dom/framework';
import { ITableRow } from '../row/row.interface';

export interface ITableFoot extends ITypeTableFoot {
  className: 'TableFoot';
  childNodes: ITableRow[];
}
