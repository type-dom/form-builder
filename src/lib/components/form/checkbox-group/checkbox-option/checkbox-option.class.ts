import { fromEvent } from 'rxjs';
import { Input, TextNode, TypeSpan } from '@type-dom/framework';
import { CheckboxGroup } from '../checkbox-group.class';
import { ICheckboxOption } from './checkbox-option.interface';

export class CheckboxOption extends TypeSpan implements ICheckboxOption {
  className: 'CheckboxOption';
  childNodes: [Input, TextNode];
  input: Input;
  text: TextNode;

  constructor(public parent: CheckboxGroup) {
    super();
    this.className = 'CheckboxOption';
    this.input = new Input({ parent: this });
    this.input.addAttrObj({
      type: 'checkbox',
      // name: optionConfig.name,
      // label: opt.label,
      // value: opt.value,
      // checked: opt.checked || false
    });
    this.text = new TextNode();
    this.childNodes = [this.input, this.text];
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.input.dom, 'click').subscribe(() => {
        console.log('this.input.dom click . ');
        console.log('this.input.dom.value is ', this.input.dom.value);
        const flag = this.parent.value.findIndex(
          (item) => item === this.input.dom.value
        );
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
