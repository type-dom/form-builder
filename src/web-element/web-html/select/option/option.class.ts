import { WebTextNode } from '../../../../web-text-node/web-text-node.class';
import { WebHtml } from '../../web-html.abstract';
import { Select } from '../select.class';
import { IWebOption } from './option.interface';

export class WebOption extends WebHtml implements IWebOption {
  tagName: 'option';
  className: 'WebOption';
  dom: HTMLOptionElement;
  childNodes: (WebHtml | WebTextNode)[];
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
