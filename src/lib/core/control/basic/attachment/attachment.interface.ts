import { ITypeDiv } from '@type-dom/framework';
import { IInputItem } from '../../../../components/form/form-item/input-item/input-item.interface';

export interface IAttachmentControl extends ITypeDiv {
  className: 'AttachmentControl';
  childNodes: IInputItem[];
}
