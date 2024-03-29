import { fromEvent } from 'rxjs';
import { Input, Label } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { itemContentStyle } from '../../../../../../../core/control/type-control.const';
import { PropertyItem } from '../property-item.abstract';

const disableStyle = {
  backgroundColor: '#F5F7FA',
  borderColor: '#E4E7ED',
  color: '#C0C4CC',
  cursor: 'not-allowed',
};

export abstract class PropertyInput extends PropertyItem {
  abstract reset(value?: string): void;

  childNodes: [Label, Input, TdButton];
  content: Input;

  protected constructor(labelText = '控件名称', placeholder = '请输入') {
    super(labelText);
    this.content = new Input(this);
    this.content.propObj = {
      styleObj: Object.assign({}, itemContentStyle),
      attrObj: {
        type: 'text',
        placeholder: placeholder,
      },
    };
    this.button.setStyleObj({
      // position: 'absolute',
      // right: '10px',
      padding: '8px 3px 4px',
      fontSize: '16px',
      // border: 'none',
      display: 'none',
      border: '1px solid #DCDFE6',
      borderRadius: '0 4px 4px 0',
    });
    this.button.textNode.setText('');
    this.childNodes = [this.label, this.content, this.button];
  }

  resetInputPlaceholder(placeholder: string): void {
    this.content.setAttribute('placeholder', placeholder);
  }

  resetInputValue(value: string | number | boolean = ''): void {
    this.content.setAttribute('value', value);
    this.content.dom.value = String(value);
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.content.dom, 'input').subscribe((evt) => {
        console.log('this.input input, event is ', evt);
        console.log('this.input.dom.value is ', this.content.dom.value);
        this.reset(this.content.dom.value);
      })
    );
  }
}
