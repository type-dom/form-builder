import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';
import { IWebTableDataCell } from '../data-cell/data-cell.interface';

export interface IWebTableRow extends ITypeHtml {
  tagName: 'tr',
  className: 'WebTableRow',
  childNodes: IWebTableDataCell[],
}
