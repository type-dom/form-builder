import { ICheckboxItem } from '../../../../components/form/form-item/checkbox-item/checkbox-item.interface';
import { ITypeControl } from '../../type-control.interface';

export interface ICheckboxControl extends ITypeControl {
  className: 'CheckboxControl';
  childNodes: [ICheckboxItem];
}
