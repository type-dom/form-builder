import { IDivComponent } from '../../web-component/div-component/div-component.interface';
import { IRadioOption } from './radio-option/radio-option.interface';

export interface IRadioGroup extends IDivComponent {
  className: 'RadioGroup',
  childNodes: IRadioOption[],
}
