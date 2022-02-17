import { IFormItem } from '../form-item.interface';
import { ILabel } from '../../../../web-element/label/label.interface';
import { IInput } from '../../../../web-element/input/input.interface';
import { ISpan } from '../../../../web-element/span/span.interface';

export interface IInputItem extends IFormItem {
  className: 'InputItem',
  childNodes: [ILabel, IInput, ISpan],
}
