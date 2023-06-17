import { ILabel } from '../../../../type-node/web-element/html-element/label/label.interface';
import { ISpan } from '../../../../type-node/web-element/html-element/span/span.interface';
import { IRadioGroup } from '../../../../components/radio-group/radio-group.interface';
import { IFormItem } from '../form-item.interface';

export interface IRadioItem extends IFormItem {
  className: 'RadioItem',
  childNodes: [ILabel, IRadioGroup, ISpan]
}
