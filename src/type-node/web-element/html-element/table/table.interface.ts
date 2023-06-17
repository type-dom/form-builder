import { IWebTableHead } from './head/head.interface';
import { IWebTableRow } from './row/row.interface';
import { IHtmlElement } from '../../../type-element/html-element/html-element.interface';

export interface IWebTable extends IHtmlElement {
  tagName: 'table',
  className: 'WebTable',
  childNodes: (IWebTableRow | IWebTableHead)[],
}
