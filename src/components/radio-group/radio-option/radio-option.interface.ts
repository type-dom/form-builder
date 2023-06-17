import { IInput } from '../../../type-node/web-element/html-element/input/input.interface';
import { IWebTextNode } from '../../../type-node/web-text-node/web-text-node.interface';
import { ISpanBase } from '../../../type-node/type-element/html-element/span/span.interface';

export interface IRadioOption extends ISpanBase {
  className: 'RadioOption',
  childNodes: [IInput, IWebTextNode],
}
