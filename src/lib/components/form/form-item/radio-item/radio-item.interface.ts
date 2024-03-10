import { ILabel, ISpan } from '@type-dom/framework';
import { IRadioGroup } from '../../radio-group/radio-group.interface';
import { IFormItem } from '../form-item.interface';

export interface IRadioItem extends IFormItem {
  className: 'RadioItem';
  childNodes: [ILabel, IRadioGroup, ISpan];
}
