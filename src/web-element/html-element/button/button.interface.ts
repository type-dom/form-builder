import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IButtonBase } from '../../web-abstract/html-element/button/button.interface';

export interface IButton extends IButtonBase {
  className: 'Button',
  childNodes: [IWebTextNode],
}
