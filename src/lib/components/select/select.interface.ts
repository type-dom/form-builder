import { ITypeSelect } from '@type-dom/framework';
import { ISelectOption } from './option/option.interface';

export interface ISelect extends ITypeSelect {
  className: 'Select';
  childNodes: ISelectOption[];
}
