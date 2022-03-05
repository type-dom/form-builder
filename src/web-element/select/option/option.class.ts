import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { WebElement } from '../../web-element.abstract';
import { Select } from '../select.class';
import { IWebOption } from './option.interface';

export class WebOption extends WebElement implements IWebOption {
  tagName: 'option';
  className: 'WebOption';
  dom: HTMLOptionElement;
  childNodes: (WebElement | WebTextNode)[];
  text: WebTextNode;
  constructor(public parent: Select) {
    super();
    this.tagName = 'option';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebOption';
    this.propObj.attrObj = {
      name: 'option'
    };
    this.text = new WebTextNode(this, '一个选项');
    this.childNodes = [this.text];
  }
  // render(): void {
  //   console.error('option render . ');
  //   super.render();
  // }
}
