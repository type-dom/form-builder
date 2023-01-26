import { ButtonComponent } from '../../../web-component/button-component/button-component.abstract';
import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { WebHtml } from '../web-html.abstract';
import { IButton } from './button.interface';

export class Button extends ButtonComponent implements IButton {
  className: 'Button';
  childNodes: [WebTextNode];
  constructor(public parent: WebHtml) {
    super();
    this.className = 'Button';
    this.childNodes = [this.textNode];
  }
}
