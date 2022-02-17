import { IFormItem } from '../form-item.interface';
import { ILabel } from '../../../../web-element/label/label.interface';
import { ITextarea } from '../../../../web-element/textarea/textarea.interface';
import { ISpan } from '../../../../web-element/span/span.interface';

export interface ITextareaItem extends IFormItem {
  className: 'TextareaItem',
  childNodes: [ILabel, ITextarea, ISpan];
}
