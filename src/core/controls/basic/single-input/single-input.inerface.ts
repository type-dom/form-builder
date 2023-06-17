import { IDivBase } from '../../../../type-node/type-element/type-html/div/div.interface';
import { InputItem } from '../../form-item/input-item/input-item.class';

export interface ISingleInputControl extends IDivBase {
  tagName: 'div',
  className: 'SingleInputControl',
  childNodes: InputItem[],
}
