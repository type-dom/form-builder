import { IFormItem } from '../form-item.interface';
import { ILabel } from '../../../../web-element/web-html/label/label.interface';
import { IInput } from '../../../../web-element/web-html/input/input.interface';
import { ISpan } from '../../../../web-element/web-html/span/span.interface';

export interface IInputItem extends IFormItem {
  className: 'InputItem',
  childNodes: [ILabel, IInput, ISpan],
}
