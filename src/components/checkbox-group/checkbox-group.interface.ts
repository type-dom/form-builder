import { IDivComponent } from '../../web-component/div-component/div-component.interface';
import { ICheckboxOption } from './checkbox-option/checkbox-option.interface';

export interface ICheckboxGroup extends IDivComponent {
  className: 'CheckboxGroup',
  childNodes: ICheckboxOption[],
}
