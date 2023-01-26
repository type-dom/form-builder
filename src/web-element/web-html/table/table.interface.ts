import { IWebTableHead } from './head/head.interface';
import { IWebTableRow } from './row/row.interface';
import { IWebComponent } from '../../../web-component/web-component.interface';

export interface IWebTable extends IWebComponent {
  tagName: 'table',
  className: 'WebTable',
  childNodes: (IWebTableRow | IWebTableHead)[],
}
