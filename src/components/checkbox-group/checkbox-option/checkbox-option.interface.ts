import { IInput } from '../../../type-node/web-element/html-element/input/input.interface';
import { ISpanBase } from '../../../type-node/type-element/html-element/span/span.interface';
import { IWebTextNode } from '../../../type-node/web-text-node/web-text-node.interface';

export interface ICheckboxOption extends ISpanBase {
  className: 'CheckboxOption',
  childNodes: [IInput, IWebTextNode],
}
