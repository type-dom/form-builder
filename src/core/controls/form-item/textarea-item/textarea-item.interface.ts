import { ILabel } from '../../../../web-element/html-element/label/label.interface';
import { ITextarea } from '../../../../web-element/html-element/textarea/textarea.interface';
import { ISpan } from '../../../../web-element/html-element/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ITextareaItem extends IFormItem {
  className: 'TextareaItem',
  childNodes: [ILabel, ITextarea, ISpan];
}
