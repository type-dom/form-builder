import { ITypeDiv } from 'type-dom.ts';
import { IInputItem } from '../../../../components/form/form-item/input-item/input-item.interface';
export interface IAttachmentControl extends ITypeDiv {
  className: 'AttachmentControl',
  childNodes: IInputItem[],
}
