import { IInputItem } from '../../form-item/input-item/input-item.interface';
import { IWebControl } from '../../web-control.interface';

export interface ITextControl extends IWebControl {
  className: 'TextControl',
  childNodes: [IInputItem],
}