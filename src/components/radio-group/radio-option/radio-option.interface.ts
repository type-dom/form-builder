import { IInput } from '../../../web-element/web-html/input/input.interface';
import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ISpanComponent } from '../../../web-component/span-component/span-component.interface';

export interface IRadioOption extends ISpanComponent {
  className: 'RadioOption',
  childNodes: [IInput, IWebTextNode],
}
