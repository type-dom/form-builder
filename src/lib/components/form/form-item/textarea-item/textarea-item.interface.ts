import { ILabel, ISpan, ITextarea } from '@type-dom/framework';
import { IFormItem } from '../form-item.interface';

export interface ITextareaItem extends IFormItem {
  className: 'TextareaItem';
  childNodes: [ILabel, ITextarea, ISpan];
}
