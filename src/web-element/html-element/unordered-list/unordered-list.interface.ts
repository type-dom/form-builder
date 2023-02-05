import { IListItem } from './list-item/list-item.interface';
import { IWebComponent } from '../../../web-component/web-component.interface';

export interface IUnorderedList extends IWebComponent {
  tagName: 'ul',
  className: 'UnorderedList',
  childNodes: IListItem[],
}
