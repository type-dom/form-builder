import { ILabel } from '../../../../../type-node/web-element/html-element/label/label.interface';
import { ISelect } from '../../../../../type-node/web-element/html-element/select/select.interface';
import { ISpan } from '../../../../../type-node/web-element/html-element/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ISelectItem extends IFormItem {
  className: 'SelectItem',
  childNodes: [ILabel, ISelect, ISpan]
}
