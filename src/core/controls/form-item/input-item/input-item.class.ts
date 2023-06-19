import { Input } from '../../../../../type-node/element/html-element/input/input.class';
import { Span } from '../../../../../type-node/element/html-element/span/span.class';
import { Label } from '../../../../../type-node/element/html-element/label/label.class';
import { WebControl } from '../../web-control.abstract';
import { itemContentStyle } from '../../web-control.const';
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