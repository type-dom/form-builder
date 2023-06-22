import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';
import { ITableDataCell } from '../data-cell/data-cell.interface';

export interface ITableRow extends ITypeHtml {
  nodeName: 'tr',
  className: 'TableRow',
  childNodes: ITableDataCell[],
}
