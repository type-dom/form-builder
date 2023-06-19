import { ITextNode } from '../../../text-node/text-node.interface';
import { ITypeButton } from '../../../type-element/type-html/button/button.interface';
export interface IButton extends ITypeButton {
  className: 'Button',
  childNodes: [ITextNode],
}
