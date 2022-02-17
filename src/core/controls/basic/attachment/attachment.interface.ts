import { IInputItem } from '../../form-item/input-item/input-item.interface';
import { IDivComponent } from '../../../../web-component/div-component/div-component.interface';

export interface IAttachmentControl extends IDivComponent {
  className: 'AttachmentControl',
  childNodes: IInputItem[],
}
