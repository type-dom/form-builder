import { ButtonComponent } from '../../../web-abstract/web-component/button-component/button-component.abstract';
import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { HtmlElement } from '../html-element.abstract';
import { IButton } from './button.interface';

export class Button extends ButtonComponent implements IButton {
  className: 'Button';
  childNodes: [WebTextNode];
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'Button';
    this.childNodes = [this.textNode];
  }
}
