import { IButtonComponent } from '../../web-component/button-component/button-component.interface';
import { IWebTextNode } from '../../web-text-node/web-text-node.interface';

export interface IButton extends IButtonComponent {
  className: 'Button',
  childNodes: [IWebTextNode],
}
