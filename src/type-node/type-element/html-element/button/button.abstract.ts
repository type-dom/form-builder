import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { HtmlElement } from '../html-element.abstract';
import { buttonStyle } from './button.const';
import { IButtonBase } from './button.interface';

export abstract class ButtonBase extends HtmlElement implements IButtonBase {
  tagName: 'button';
  abstract className: string;
  abstract parent: HtmlElement;
  dom: HTMLButtonElement;
  textNode: WebTextNode;
  protected constructor() {
    super();
    this.tagName = 'button';
    this.dom = document.createElement(this.tagName);
    this.propObj = {
      styleObj: Object.assign({}, buttonStyle),
      attrObj: {
        type: 'button'
      }
    };
    this.textNode = new WebTextNode(this, '按钮');
  }
  setTitle(title: string): void {
    this.textNode.setText(title);
  }
}
