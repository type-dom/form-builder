import { IHtmlElement } from '../../../type-element/html-element/html-element.interface';
import { IListItem } from './list-item/list-item.interface';

export interface IUnorderedList extends IHtmlElement {
  tagName: 'ul',
  className: 'UnorderedList',
  childNodes: IListItem[],
}
