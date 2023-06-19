import { ITypeUl } from '../../../type-element/type-html/ul/ul.interface';
import { IListItem } from './list-item/list-item.interface';

export interface IUnorderedList extends ITypeUl {
  className: 'UnorderedList',
  childNodes: IListItem[],
}
