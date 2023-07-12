import { IInput, ILabel, ISpan } from 'type-dom.ts';
import { IFormItem } from '../form-item.interface';
export interface IInputItem extends IFormItem {
  className: 'InputItem',
  childNodes: [ILabel, IInput, ISpan],
}
