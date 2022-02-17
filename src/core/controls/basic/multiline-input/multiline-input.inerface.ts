import { ITextareaItem } from '../../form-item/textarea-item/textarea-item.interface';
import { IWebControl } from '../../web-control.interface';

export interface IMultilineInputControl extends IWebControl {
  className: 'MultilineInputControl',
  childNodes: [ITextareaItem],
}
