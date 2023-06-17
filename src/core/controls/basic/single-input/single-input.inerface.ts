import { InputItem } from '../../form-item/input-item/input-item.class';
import { IDivBase } from '../../../../type-node/type-element/html-element/div/div.interface';

export interface ISingleInputControl extends IDivBase {
  tagName: 'div',
  className: 'SingleInputControl',
  childNodes: InputItem[],
}
