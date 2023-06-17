import { ITypeHtml } from '../../../type-element/type-html/type-html.interface';
import { IListItem } from './list-item/list-item.interface';

export interface IUnorderedList extends ITypeHtml {
  tagName: 'ul',
  className: 'UnorderedList',
  childNodes: IListItem[],
}
