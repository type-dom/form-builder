import { InputItem } from '../../form-item/input-item/input-item.class';
import { IDivBase } from '../../../../web-element/web-abstract/html-element/div/div.interface';

export interface ISingleInputControl extends IDivBase {
  tagName: 'div',
  className: 'SingleInputControl',
  childNodes: InputItem[],
}
