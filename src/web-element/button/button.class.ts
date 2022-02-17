import { ButtonComponent } from '../../web-component/button-component/button-component.abstract';
import { WebElement } from '../web-element.abstract';
import { IButton } from './button.interface';
import { WebTextNode } from '../../web-text-node/web-text-node.class';

export class Button extends ButtonComponent implements IButton {
  className: 'Button';
  childNodes: [WebTextNode];
  constructor(public parent: WebElement) {
    super();
    this.className = 'Button';
    this.childNodes = [this.textNode];
  }
}
