import { IWebControl } from '../../web-control.interface';
import { IFormItem } from '../../form-item/form-item.interface';

export interface IConnectionControl extends IWebControl {
  className : 'ConnectionControl',
  childNodes: [IFormItem],
}
