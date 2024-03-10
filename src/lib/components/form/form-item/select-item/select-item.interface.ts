import { ILabel, ISpan } from '@type-dom/framework';
import { ISelect } from '../../../select/select.interface';
import { IFormItem } from '../form-item.interface';

export interface ISelectItem extends IFormItem {
  className: 'SelectItem';
  childNodes: [ILabel, ISelect, ISpan];
}
