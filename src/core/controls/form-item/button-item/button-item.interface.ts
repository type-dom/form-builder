import { ILabel } from '../../../../web-element/label/label.interface';
import { ISpan } from '../../../../web-element/span/span.interface';
import { IInput } from '../../../../web-element/input/input.interface';
import { IFormItem } from '../form-item.interface';

export interface IButtonItem extends IFormItem {
  className: 'ButtonItem',
  childNodes: [ILabel, IInput, ISpan]
}
