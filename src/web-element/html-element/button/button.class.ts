import { ButtonBase } from '../../web-abstract/html-element/button/button.abstract';
import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { HtmlElement } from '../../web-abstract/html-element/html-element.abstract';
import { IButton } from './button.interface';

export class Button extends ButtonBase implements IButton {
  className: 'Button';
  childNodes: [WebTextNode];
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'Button';
    this.childNodes = [this.textNode];
  }
}
