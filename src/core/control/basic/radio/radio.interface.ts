import { IRadioItem } from '../../../../components/form/form-item/radio-item/radio-item.interface';
import { ITypeControl } from '../../type-control.interface';

export interface IRadioControl extends ITypeControl {
  className: 'RadioControl',
  childNodes: [IRadioItem],
}
