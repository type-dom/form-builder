import { IInputItem } from '../../../../components/form/form-item/input-item/input-item.interface';
import { ITypeControl } from '../../type-control.interface';

export interface INumericalControl extends ITypeControl {
  className: 'NumericalControl',
  childNodes: [IInputItem],
}
