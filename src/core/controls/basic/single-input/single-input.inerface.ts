import { InputItem } from '../../form-item/input-item/input-item.class';
import { IDivComponent } from '../../../../web-abstract/web-component/div-component/div-component.interface';

export interface ISingleInputControl extends IDivComponent {
  tagName: 'div',
  className: 'SingleInputControl',
  childNodes: InputItem[],
}
