import { IDivComponent } from '../../web-abstract/web-component/div-component/div-component.interface';
import { IRadioOption } from './radio-option/radio-option.interface';

export interface IRadioGroup extends IDivComponent {
  className: 'RadioGroup',
  childNodes: IRadioOption[],
}
