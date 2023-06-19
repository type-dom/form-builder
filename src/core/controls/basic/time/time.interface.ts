import { IInputItem } from '../../form-item/input-item/input-item.interface';
import { IWebControl } from '../../web-control.interface';

export interface ITimeControl extends IWebControl {
  className: 'TimeControl',
  childNodes: [IInputItem],
}