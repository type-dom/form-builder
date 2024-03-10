import { Label, Span, Textarea } from '@type-dom/framework';
import { TypeControl } from '../../../../core/control/type-control.abstract';
import { itemContentStyle } from '../../../../core/control/type-control.const';
import { FormItem } from '../form-item.abstract';
import { ITextareaItem } from './textarea-item.interface';

export class TextareaItem extends FormItem implements ITextareaItem {
  className: 'TextareaItem';
  childNodes: [Label, Textarea, Span];
  itemContent: Textarea;

  constructor(
    parent: TypeControl,
    labelText = '多行输入',
    placeholder = '请输入'
  ) {
    super(parent, labelText);
    this.className = 'TextareaItem';
    this.itemContent = new Textarea({ parent: this });
    this.itemContent.propObj = {
      attrObj: {
        type: 'text',
        placeholder: placeholder,
      },
      styleObj: Object.assign({}, itemContentStyle, { height: '80px' }),
    };
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
  }

  // createInstance(itemLiteral: ITextareaItem): void {
  //   super.createInstance(itemLiteral);
  // //   todo
  // }
}
