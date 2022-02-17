import { ILabel } from '../../../../web-element/label/label.interface';
import { ISelect } from '../../../../web-element/select/select.interface';
import { ISpan } from '../../../../web-element/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ISelectItem extends IFormItem {
  className: 'SelectItem',
  childNodes: [ILabel, ISelect, ISpan]
}
