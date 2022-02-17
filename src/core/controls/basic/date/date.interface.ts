import { IInputItem } from '../../form-item/input-item/input-item.interface';
import { IWebControl } from '../../web-control.interface';

export interface IDateControl extends IWebControl {
  className: 'DateControl',
  childNodes: [IInputItem],
}
