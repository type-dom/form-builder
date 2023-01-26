import { IWebComponent } from '../web-component.interface';
import { IListItem } from '../../web-element/web-html/unordered-list/list-item/list-item.interface';

export interface IUlComponent extends IWebComponent {
  tagName: 'ul',
  childNodes: IListItem[]
}
