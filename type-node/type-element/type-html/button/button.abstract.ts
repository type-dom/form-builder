import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { TypeHtml } from '../type-html.abstract';
import { buttonStyle } from './button.const';
import { ITypeButton } from './button.interface';
export abstract class TypeButton extends TypeHtml implements ITypeButton {
  abstract className: string;
  abstract parent: TypeHtml;
  tagName: 'button';
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
