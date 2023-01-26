import { IInput } from '../../../web-element/web-html/input/input.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ISpanComponent } from '../../../web-component/span-component/span-component.interface';

export interface ICheckboxOption extends ISpanComponent {
  className: 'CheckboxOption',
  childNodes: [IInput, IWebTextNode],
}
