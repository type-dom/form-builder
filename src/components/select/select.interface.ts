import { ITypeSelect } from 'type-dom.ts';
import { ISelectOption } from './option/option.interface';
export interface ISelect extends ITypeSelect {
  className: 'Select',
  childNodes: ISelectOption[];
}
