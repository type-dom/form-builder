import { IDivBase } from '../../web-element/web-abstract/html-element/div/div.interface';
import { ICheckboxOption } from './checkbox-option/checkbox-option.interface';

export interface ICheckboxGroup extends IDivBase {
  className: 'CheckboxGroup',
  childNodes: ICheckboxOption[],
}
