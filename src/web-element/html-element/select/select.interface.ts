import { IHtmlElement } from '../../web-abstract/html-element/html-element.interface';
import { IWebOption } from './option/option.interface';

export interface ISelect extends IHtmlElement {
  className: 'Select',
  childNodes: IWebOption[];
}
