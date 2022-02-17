import { ILabel } from '../../../../web-element/label/label.interface';
import { IWebTable } from '../../../../web-element/table/table.interface';
import { ISpan } from '../../../../web-element/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ITableItem extends IFormItem {
  className: 'TableItem',
  childNodes: [ILabel, IWebTable, ISpan]
}
