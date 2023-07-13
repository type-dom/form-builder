import { TextNode, TypeNode, TypeOption } from 'type-dom.ts';
import { Select } from '../select.class';
import { ISelectOption } from './option.interface';
export class SelectOption extends TypeOption implements ISelectOption {
  nodeName: 'option';
  className: 'SelectOption';
  dom: HTMLOptionElement;
  childNodes: TypeNode[];
  text: TextNode;
  constructor(public parent: Select) {
    super();
    this.nodeName = 'option';
    this.dom = document.createElement(this.nodeName);
    this.className = 'SelectOption';
    this.propObj.attrObj = {
      name: 'option'
    };
    this.text = new TextNode(this, '一个选项');
    this.childNodes = [this.text];
  }
  // render(): void {
  //   console.error('option render . ');
  //   super.render();
  // }
}
