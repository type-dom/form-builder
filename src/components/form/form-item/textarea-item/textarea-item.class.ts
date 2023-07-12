import { Label, Span, Textarea } from 'type-dom.ts';
import { WebControl } from '../../../../core/controls/web-control.abstract';
import { itemContentStyle } from '../../../../core/controls/web-control.const';
import { FormItem } from '../form-item.abstract';
import { ITextareaItem } from './textarea-item.interface';
export class TextareaItem extends FormItem implements ITextareaItem {
  className: 'TextareaItem';
  childNodes: [Label, Textarea, Span];
  itemContent: Textarea;
  constructor(public parent: WebControl, labelText = '多行输入', placeholder = '请输入') {
    super(labelText);
    this.className = 'TextareaItem';
    this.itemContent = new Textarea(this);
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
