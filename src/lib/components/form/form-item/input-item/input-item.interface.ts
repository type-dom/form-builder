import { IInput, ILabel, ISpan } from '@type-dom/framework';
import { IFormItem } from '../form-item.interface';

export interface IInputItem extends IFormItem {
  className: 'InputItem';
  childNodes: [ILabel, IInput, ISpan];
}
