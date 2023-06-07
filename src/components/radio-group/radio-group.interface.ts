import { IDivBase } from '../../web-element/web-abstract/html-element/div/div.interface';
import { IRadioOption } from './radio-option/radio-option.interface';

export interface IRadioGroup extends IDivBase {
  className: 'RadioGroup',
  childNodes: IRadioOption[],
}
