import { TextNode } from '../../../../text-node/text-node.class';
import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { Select } from '../select.class';
import { IWebOption } from './option.interface';
export class WebOption extends TypeHtml implements IWebOption {
  nodeName: 'option';
  className: 'WebOption';
  dom: HTMLOptionElement;
  childNodes: (TypeHtml | TextNode)[];
  text: TextNode;
  constructor(public parent: Select) {
    super('option');
    this.nodeName = 'option';
    this.dom = document.createElement(this.nodeName);
    this.className = 'WebOption';
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
