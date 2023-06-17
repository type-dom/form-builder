import { IListItem } from '../../../web-element/html-element/unordered-list/list-item/list-item.interface';
import { ITypeHtml } from '../type-html.interface';

export interface IUlBase extends ITypeHtml {
  tagName: 'ul',
  childNodes: IListItem[]
}
