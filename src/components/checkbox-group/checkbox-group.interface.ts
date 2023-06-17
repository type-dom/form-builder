import { IDivBase } from '../../type-node/type-element/type-html/div/div.interface';
import { ICheckboxOption } from './checkbox-option/checkbox-option.interface';

export interface ICheckboxGroup extends IDivBase {
  className: 'CheckboxGroup',
  childNodes: ICheckboxOption[],
}
