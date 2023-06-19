import { IInput } from '../../../web-element/html-element/input/input.interface';
import { ITypeSpan } from '../../../type-element/type-html/span/span.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';

export interface ICheckboxOption extends ITypeSpan {
  className: 'CheckboxOption',
  childNodes: [IInput, IWebTextNode],
}
