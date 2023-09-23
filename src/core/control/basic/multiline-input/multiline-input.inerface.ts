import { ITextareaItem } from '../../../../components/form/form-item/textarea-item/textarea-item.interface';
import { ITypeControl } from '../../type-control.interface';

export interface IMultilineInputControl extends ITypeControl {
  className: 'MultilineInputControl',
  childNodes: [ITextareaItem],
}
