import { ILabel, ISpan, ITextarea } from 'type-dom.ts';
import { IFormItem } from '../form-item.interface';
export interface ITextareaItem extends IFormItem {
  className: 'TextareaItem',
  childNodes: [ILabel, ITextarea, ISpan];
}
