import { ITypeControl } from '../../type-control.interface';
import { IFormItem } from '../../../../components/form/form-item/form-item.interface';

export interface IConnectionControl extends ITypeControl {
  className : 'ConnectionControl',
  childNodes: [IFormItem],
}
