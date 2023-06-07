import { IHtmlElement } from '../../../web-abstract/html-element/html-element.interface';
import { IWebTableDataCell } from '../data-cell/data-cell.interface';

export interface IWebTableRow extends IHtmlElement {
  tagName: 'tr',
  className: 'WebTableRow',
  childNodes: IWebTableDataCell[],
}
