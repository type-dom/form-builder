import { fromEvent } from 'rxjs';
import { Input, Label, Span } from 'type-dom.ts';
import { TypeControl } from '../../../../core/control/type-control.abstract';
import { itemContentStyle } from '../../../../core/control/type-control.const';
import { FormItem } from '../form-item.abstract';
import { IButtonItem } from './button-item.interface';

export class ButtonItem extends FormItem implements IButtonItem {
  className: 'ButtonItem';
  childNodes: [Label, Input, Span];
  itemContent: Input;
  constructor(public parent: TypeControl, labelText = '控件名称') {
    super(labelText);
    this.className = 'ButtonItem';
    this.addAttrName('button-item');
    this.itemContent = new Input(this);
    this.itemContent.propObj = {
      styleObj: Object.assign({}, itemContentStyle),
      attrObj: {
        name: 'button-item-content',
        type: 'button',
        value: '选择',
      }
    };
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
    // this.childNodes.push(this.itemContent);
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.itemContent.dom, 'click').subscribe(() => {
        console.log('button item itemContent click . ');
      })
    );
  }
  createInstance(itemLiteral: IButtonItem): void {
    super.createInstance(itemLiteral);
    // 文本 实例化
    this.itemContent.setAttrObj({
      value: itemLiteral.childNodes[1].propObj.attrObj.value || '选择',
    });
  }
}
