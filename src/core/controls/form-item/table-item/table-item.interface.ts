import { ILabel } from '../../../../web-element/web-html/label/label.interface';
import { IWebTable } from '../../../../web-element/web-html/table/table.interface';
import { ISpan } from '../../../../web-element/web-html/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ITableItem extends IFormItem {
  className: 'TableItem',
  childNodes: [ILabel, IWebTable, ISpan]
}
