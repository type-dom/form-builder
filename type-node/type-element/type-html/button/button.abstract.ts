import { TextNode } from '../../../text-node/text-node.class';
import { TypeHtml } from '../type-html.abstract';
import { buttonStyle } from './button.const';
import { ITypeButton } from './button.interface';
export abstract class TypeButton extends TypeHtml implements ITypeButton {
  abstract className: string;
  abstract parent: TypeHtml;
  nodeName: 'button';
  dom: HTMLButtonElement;
  textNode: TextNode;
  protected constructor() {
    super('button');
    this.nodeName = 'button';
    this.dom = document.createElement(this.nodeName);
    this.propObj = {
      styleObj: Object.assign({}, buttonStyle),
      attrObj: {
        type: 'button'
      }
    };
    this.textNode = new TextNode(this, '按钮');
  }
  setTitle(title: string): void {
    this.textNode.setText(title);
  }
}
