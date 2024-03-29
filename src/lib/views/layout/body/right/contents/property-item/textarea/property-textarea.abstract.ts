import { fromEvent } from 'rxjs';
import { Label, Textarea, StyleDisplay } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { PropertyItem } from '../property-item.abstract';

export abstract class PropertyTextarea extends PropertyItem {
  abstract reset(value?: string): void;

  childNodes: [Label, Textarea, TdButton];
  content: Textarea;

  protected constructor(labelText = '控件名称', placeholder = '请输入') {
    super(labelText);
    this.addStyleObj({
      display: 'block', // 不是 flex
      marginBottom: '20px',
    });
    this.content = new Textarea(this);
    this.content.propObj = {
      styleObj: {
        height: '100%',
        minHeight: '80px',
        lineHeight: '32px',
        paddingLeft: '43px',
        paddingRight: '43px',
        textAlign: 'left',
        backgroundColor: '#FFF',
        backgroundImage: 'none',
        borderRadius: '4px',
        border: '1px solid #DCDFE6',
        // -webkit-box-sizing: border-box;
        boxSizing: 'border-box',
        color: '#606266',
        display: StyleDisplay.inlineBlock,
        outline: '0',
        padding: '0 15px',
        // -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: 'border-color .2s cubic-bezier(.645,.045,.355,1)',
        width: 'calc(100% - 100px)',
      },
      attrObj: {
        placeholder: placeholder,
      },
    };
    this.button.textNode.setText('确定');
    this.button.addStyleObj({
      // height: '24px',
      float: 'right',
      display: 'block',
    });
    this.childNodes = [this.label, this.content, this.button];
  }

  resetInputPlaceholder(placeholder: string): void {
    this.content.setAttribute('placeholder', placeholder);
  }

  resetInputValue(value = ''): void {
    this.content.setAttribute('value', value);
    this.content.dom.value = String(value);
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.content.dom, 'input').subscribe(() => {
        // console.log('this.input input, event is ', evt);
        // console.log('this.input.dom.value is ', this.input.dom.value);
        this.reset(this.content.dom.value);
      })
    );
  }
}
