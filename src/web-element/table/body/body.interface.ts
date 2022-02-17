import { IWebElement } from '../../web-element.interface';
import { IWebTableRow } from '../row/row.interface';

export interface IWebTableBody extends IWebElement {
  tagName: 'tbody',
  className: 'WebTableBody',
  childNodes: IWebTableRow[],
}