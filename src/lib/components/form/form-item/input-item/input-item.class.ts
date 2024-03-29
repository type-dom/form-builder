import { Input, Label, Span } from '@type-dom/framework';
import { TypeControl } from '../../../../core/control/type-control.abstract';
import { itemContentStyle } from '../../../../core/control/type-control.const';
import { FormItem } from '../form-item.abstract';
import { IInputItem } from './input-item.interface';

export class InputItem extends FormItem implements IInputItem {
  className: 'InputItem';
  childNodes: [Label, Input, Span];
  itemContent: Input;

  constructor(
    parent: TypeControl,
    labelText = '控件名称',
    placeholder = '请输入'
  ) {
    super(parent, labelText);
    this.className = 'InputItem';
    this.itemContent = new Input({ parent: this });
    this.itemContent.propObj = {
      styleObj: Object.assign({}, itemContentStyle),
      attrObj: {
        type: 'text',
        placeholder,
      },
    };
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
  }
}
