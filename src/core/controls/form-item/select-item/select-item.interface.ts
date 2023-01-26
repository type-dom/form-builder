import { ILabel } from '../../../../web-element/web-html/label/label.interface';
import { ISelect } from '../../../../web-element/web-html/select/select.interface';
import { ISpan } from '../../../../web-element/web-html/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ISelectItem extends IFormItem {
  className: 'SelectItem',
  childNodes: [ILabel, ISelect, ISpan]
}
