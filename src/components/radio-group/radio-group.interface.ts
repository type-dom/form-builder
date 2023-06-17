import { IDivBase } from '../../type-node/type-element/type-html/div/div.interface';
import { IRadioOption } from './radio-option/radio-option.interface';

export interface IRadioGroup extends IDivBase {
  className: 'RadioGroup',
  childNodes: IRadioOption[],
}
