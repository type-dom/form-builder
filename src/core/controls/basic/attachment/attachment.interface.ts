import { IDivComponent } from '../../../../web-abstract/web-component/div-component/div-component.interface';
import { IInputItem } from '../../form-item/input-item/input-item.interface';

export interface IAttachmentControl extends IDivComponent {
  className: 'AttachmentControl',
  childNodes: IInputItem[],
}
