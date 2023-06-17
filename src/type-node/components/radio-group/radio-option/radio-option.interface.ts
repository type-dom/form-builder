import { IInput } from '../../../web-element/html-element/input/input.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ITypeSpan } from '../../../type-element/type-html/span/span.interface';

export interface IRadioOption extends ITypeSpan {
  className: 'RadioOption',
  childNodes: [IInput, IWebTextNode],
}
