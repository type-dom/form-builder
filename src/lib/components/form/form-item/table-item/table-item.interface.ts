import { ILabel, ISpan } from '@type-dom/framework';
import { IFormItem } from '../form-item.interface';
import { ITable } from './table/table.interface';

export interface ITableItem extends IFormItem {
  className: 'TableItem';
  childNodes: [ILabel, ITable, ISpan];
}
