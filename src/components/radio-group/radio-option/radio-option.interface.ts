import { IInput } from '../../../web-element/html-element/input/input.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ISpanBase } from '../../../web-element/web-abstract/html-element/span/span.interface';

export interface IRadioOption extends ISpanBase {
  className: 'RadioOption',
  childNodes: [IInput, IWebTextNode],
}
