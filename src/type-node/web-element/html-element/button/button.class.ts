import { ButtonBase } from '../../../type-element/type-html/button/button.abstract';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { IButton } from './button.interface';

export class Button extends ButtonBase implements IButton {
  className: 'Button';
  childNodes: [WebTextNode];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'Button';
    this.childNodes = [this.textNode];
  }
}
