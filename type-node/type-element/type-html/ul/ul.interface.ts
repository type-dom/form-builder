import { IListItem } from '../../../element/html-element/unordered-list/list-item/list-item.interface';
import { ITypeHtml } from '../type-html.interface';
export interface ITypeUl extends ITypeHtml {
  nodeName: 'ul',
  childNodes: IListItem[]
}
