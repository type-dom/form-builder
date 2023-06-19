import { TypeButton } from '../../../type-element/type-html/button/button.abstract';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { TextNode } from '../../../text-node/text-node.class';
import { IButton } from './button.interface';

export class Button extends TypeButton implements IButton {
  className: 'Button';
  childNodes: [TextNode];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'Button';
    this.childNodes = [this.textNode];
  }
}
