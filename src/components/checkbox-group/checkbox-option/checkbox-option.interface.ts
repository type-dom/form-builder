import { IInput } from '../../../web-element/html-element/input/input.interface';
import { ISpanBase } from '../../../web-element/web-abstract/html-element/span/span.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';

export interface ICheckboxOption extends ISpanBase {
  className: 'CheckboxOption',
  childNodes: [IInput, IWebTextNode],
}
