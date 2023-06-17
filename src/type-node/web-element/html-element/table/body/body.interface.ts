import { IHtmlElement } from '../../../../type-element/html-element/html-element.interface';
import { IWebTableRow } from '../row/row.interface';

export interface IWebTableBody extends IHtmlElement {
  tagName: 'tbody',
  className: 'WebTableBody',
  childNodes: IWebTableRow[],
}
