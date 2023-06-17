import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ITypeButton } from '../../../type-element/type-html/button/button.interface';
export interface IButton extends ITypeButton {
  className: 'Button',
  childNodes: [IWebTextNode],
}
