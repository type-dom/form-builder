import { ITypeDiv } from 'type-dom.ts';
import { InputItem } from '../../../../components/form/form-item/input-item/input-item.class';
export interface ISingleInputControl extends ITypeDiv {
  nodeName: 'div',
  className: 'SingleInputControl',
  childNodes: InputItem[],
}
