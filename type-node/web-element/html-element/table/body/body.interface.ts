import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';
import { IWebTableRow } from '../row/row.interface';

export interface IWebTableBody extends ITypeHtml {
  tagName: 'tbody',
  className: 'WebTableBody',
  childNodes: IWebTableRow[],
}
