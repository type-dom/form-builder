import { WebTextNode } from '../../web-text-node/web-text-node.class';
import { WebElement } from '../../web-element/web-element.abstract';
import { buttonStyle } from './button-component.const';
import { IButtonComponent } from './button-component.interface';

export abstract class ButtonComponent extends WebElement implements IButtonComponent {
  tagName: 'button';
  abstract className: string;
  abstract parent: WebElement;
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
