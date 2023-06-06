import { fromEvent } from 'rxjs';
import { SpanComponent } from '../../../web-abstract/web-component/span-component/span-component.abstract';
import { Input } from '../../../web-element/html-element/input/input.class';
import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { RadioGroup } from '../radio-group.class';
import { IRadioOption } from './radio-option.interface';

export class RadioOption extends SpanComponent implements IRadioOption {
  className: 'RadioOption';
  childNodes: [Input, WebTextNode];
  input: Input;
  text: WebTextNode;
  constructor(public parent: RadioGroup) {
    super();
    this.className = 'RadioOption';
    this.addStyleObj({
      padding: '0 5px',
    });
    this.input = new Input(this);
    this.input.addAttrObj({
      type: 'radio',
      // name: optionConfig.name,
      // label: opt.label,
      // value: opt.value,
      // checked: opt.checked || false
    });
    this.text = new WebTextNode(this, '');
    this.childNodes = [this.input, this.text];
    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.input.dom, 'click').subscribe(() => {
        console.log('this.input.dom click . ');
        console.log('this.input.dom.value is ', this.input.dom.value);
        this.parent.value = this.input.dom.value;
      })
    );
  }
}
