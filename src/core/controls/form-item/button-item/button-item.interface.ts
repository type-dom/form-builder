import { ILabel } from '../../../../web-element/web-html/label/label.interface';
import { ISpan } from '../../../../web-element/web-html/span/span.interface';
import { IInput } from '../../../../web-element/web-html/input/input.interface';
import { IFormItem } from '../form-item.interface';

export interface IButtonItem extends IFormItem {
  className: 'ButtonItem',
  childNodes: [ILabel, IInput, ISpan]
}
