import { IWebComponent } from '../../web-component/web-component.interface';
import { IWebOption } from '../option/option.interface';

export interface ISelect extends IWebComponent {
  className: 'Select',
  childNodes: IWebOption[];
}
