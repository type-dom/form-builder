import { IWebHtml } from '../../web-html.interface';
import { IWebTableRow } from '../row/row.interface';

export interface IWebTableBody extends IWebHtml {
  tagName: 'tbody',
  className: 'WebTableBody',
  childNodes: IWebTableRow[],
}
