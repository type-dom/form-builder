import { SelectItem } from '../../../../components/form/form-item/select-item/select-item.class';
import { ITypeControl } from '../../type-control.interface';

export interface ISelectControl extends ITypeControl {
  className: 'SelectControl',
  childNodes: [SelectItem],
}
