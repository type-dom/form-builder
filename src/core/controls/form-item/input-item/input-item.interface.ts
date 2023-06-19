import { IFormItem } from '../form-item.interface';
import { ILabel } from '../../../../../type-node/element/html-element/label/label.interface';
import { IInput } from '../../../../../type-node/element/html-element/input/input.interface';
import { ISpan } from '../../../../../type-node/element/html-element/span/span.interface';

export interface IInputItem extends IFormItem {
  className: 'InputItem',
  childNodes: [ILabel, IInput, ISpan],
}
