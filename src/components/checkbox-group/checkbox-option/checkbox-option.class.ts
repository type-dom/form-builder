import { fromEvent } from 'rxjs';
import { SpanBase } from '../../../type-node/type-element/html-element/span/span.abstract';
import { Input } from '../../../type-node/web-element/html-element/input/input.class';
import { WebTextNode } from '../../../type-node/web-text-node/web-text-node.class';
import { CheckboxGroup } from '../checkbox-group.class';
import { ICheckboxOption } from './checkbox-option.interface';

export class CheckboxOption extends SpanBase implements ICheckboxOption {
  className: 'CheckboxOption';
  childNodes: [Input, WebTextNode];
  input: Input;
  text: WebTextNode;
  constructor(public parent: CheckboxGroup) {
    super();
    this.className = 'CheckboxOption';
    this.input = new Input(this);
    this.input.addAttrObj({
      type: 'checkbox',
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
        const flag = this.parent.value.findIndex(item => item === this.input.dom.value);
        if (this.input.dom.checked) {
          if (flag === -1) {
            this.parent.value.push(this.input.dom.value);
            this.input.setAttrObj({
              checked: true,
            });
          }
        } else {
          this.input.removeAttribute('checked');
          if (flag !== -1) {
            this.parent.value.splice(flag, 1);
          }
        }
      })
    );
  }
}
