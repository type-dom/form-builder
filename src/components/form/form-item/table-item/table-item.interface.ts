import { ILabel } from '../../../../../type-dom/element/html-element/label/label.interface';
import { ITable } from '../../../../../type-dom/element/html-element/table/table.interface';
import { ISpan } from '../../../../../type-dom/element/html-element/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ITableItem extends IFormItem {
  className: 'TableItem',
  childNodes: [ILabel, ITable, ISpan]
}
