import { IWebTableDataCell } from '../data-cell/data-cell.interface';
import { IWebComponent } from '../../../web-component/web-component.interface';

export interface IWebTableRow extends IWebComponent {
  tagName: 'tr',
  className: 'WebTableRow',
  childNodes: IWebTableDataCell[],
}
