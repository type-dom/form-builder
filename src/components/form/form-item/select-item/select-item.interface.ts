import { ILabel, ISelect, ISpan } from 'type-dom.ts';
import { IFormItem } from '../form-item.interface';
export interface ISelectItem extends IFormItem {
  className: 'SelectItem',
  childNodes: [ILabel, ISelect, ISpan]
}
