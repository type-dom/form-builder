import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';
import { ITableRow } from '../row/row.interface';

export interface ITableBody extends ITypeHtml {
  nodeName: 'tbody',
  className: 'TableBody',
  childNodes: ITableRow[],
}
