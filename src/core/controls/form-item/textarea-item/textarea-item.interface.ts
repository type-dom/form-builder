import { ILabel } from '../../../../web-element/web-html/label/label.interface';
import { ITextarea } from '../../../../web-element/web-html/textarea/textarea.interface';
import { ISpan } from '../../../../web-element/web-html/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ITextareaItem extends IFormItem {
  className: 'TextareaItem',
  childNodes: [ILabel, ITextarea, ISpan];
}
