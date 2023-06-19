import { ILabel } from '../../../../../type-node/element/html-element/label/label.interface';
import { ISpan } from '../../../../../type-node/element/html-element/span/span.interface';
import { IRadioGroup } from '../../../../../type-node/components/radio-group/radio-group.interface';
import { IFormItem } from '../form-item.interface';

export interface IRadioItem extends IFormItem {
  className: 'RadioItem',
  childNodes: [ILabel, IRadioGroup, ISpan]
}