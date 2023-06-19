import { ITypeHtml } from '../../../type-element/type-html/type-html.interface';
import { IWebOption } from './option/option.interface';

export interface ISelect extends ITypeHtml {
  className: 'Select',
  childNodes: IWebOption[];
}
