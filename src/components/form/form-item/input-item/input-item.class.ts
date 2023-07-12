import { Input, Label, Span } from 'type-dom.ts';
import { WebControl } from '../../../../core/controls/web-control.abstract';
import { itemContentStyle } from '../../../../core/controls/web-control.const';
import { FormItem } from '../form-item.abstract';
import { IInputItem } from './input-item.interface';
export class InputItem extends FormItem implements IInputItem {
  className: 'InputItem';
  childNodes: [Label, Input, Span];
  itemContent: Input;
  constructor(public parent: WebControl, labelText = '控件名称', placeholder = '请输入') {
    super(labelText);
    this.className = 'InputItem';
    this.itemContent = new Input(this);
    this.itemContent.propObj = {
      styleObj: Object.assign({}, itemContentStyle),
      attrObj: {
        type: 'text',
        placeholder,
      }
    };
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
  }
}
