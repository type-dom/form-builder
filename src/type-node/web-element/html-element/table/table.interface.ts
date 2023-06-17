import { ITypeHtml } from '../../../type-element/type-html/type-html.interface';
import { IWebTableHead } from './head/head.interface';
import { IWebTableRow } from './row/row.interface';

export interface IWebTable extends ITypeHtml {
  tagName: 'table',
  className: 'WebTable',
  childNodes: (IWebTableRow | IWebTableHead)[],
}
