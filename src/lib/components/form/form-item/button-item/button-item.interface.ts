import { IInput, ILabel, ISpan } from '@type-dom/framework';
import { IFormItem } from '../form-item.interface';

export interface IButtonItem extends IFormItem {
  className: 'ButtonItem';
  childNodes: [ILabel, IInput, ISpan];
}
