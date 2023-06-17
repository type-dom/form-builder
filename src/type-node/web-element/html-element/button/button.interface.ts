import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IButtonBase } from '../../../type-element/type-html/button/button.interface';
export interface IButton extends IButtonBase {
  className: 'Button',
  childNodes: [IWebTextNode],
}
