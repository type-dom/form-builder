import { fromEvent } from 'rxjs';
import { Label, Select } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { itemContentStyle } from '../../../../../../../core/control/type-control.const';
import { PropertyItem } from '../property-item.abstract';

export abstract class PropertySelect extends PropertyItem {
  abstract reset(value?: string): void;

  childNodes: [Label, Select, TdButton];
  select: Select;

  protected constructor(labelText = '控件名称') {
    super(labelText);
    this.select = new Select(this);
    this.select.propObj = {
      styleObj: Object.assign({}, itemContentStyle),
      attrObj: {
        name: 'property-select',
        // type: 'text',
        // placeholder: placeholder,
      },
    };

    this.childNodes = [this.label, this.select, this.button];
  }

  initEvents(): void {
    this.events.push(
      // 如果只有一个选项时，监听change，input有问题。
      fromEvent(this.select.dom, 'click').subscribe((evt) => {
        console.log('this.select.dom click, event is ', evt);
        console.log('this.select.dom.value is ', this.select.dom.value);
        // console.log(this.reset);
        this.reset(this.select.dom.value);
      }),
      fromEvent(this.select.dom, 'change').subscribe((evt) => {
        console.log('this.select.dom change, event is ', evt);
        console.log('this.select.dom.value is ', this.select.dom.value);
        // console.log(this.reset);
        this.reset(this.select.dom.value);
      })
    );
  }
}
