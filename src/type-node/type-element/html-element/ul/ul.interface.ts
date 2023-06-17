import { IListItem } from '../../../web-element/html-element/unordered-list/list-item/list-item.interface';
import { IHtmlElement } from '../html-element.interface';

export interface IUlBase extends IHtmlElement {
  tagName: 'ul',
  childNodes: IListItem[]
}
