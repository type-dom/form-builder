import { ITypeHtml } from '../../../type-element/type-html/type-html.interface';
import { ITableHead } from './head/head.interface';
import { ITableRow } from './row/row.interface';

export interface ITable extends ITypeHtml {
  nodeName: 'table',
  className: 'Table',
  childNodes: (ITableRow | ITableHead)[],
}
