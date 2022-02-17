import { IWebElement } from '../../web-element.interface';
import { IWebTableRow } from '../row/row.interface';

export interface IWebTableFoot extends IWebElement {
  tagName: 'tfoot',
  className: 'WebTableFoot',
  childNodes: IWebTableRow[],
}