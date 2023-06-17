import { IDivBase } from '../../../../type-node/type-element/type-html/div/div.interface';
import { IInputItem } from '../../form-item/input-item/input-item.interface';

export interface IAttachmentControl extends IDivBase {
  className: 'AttachmentControl',
  childNodes: IInputItem[],
}
