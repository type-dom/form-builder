import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { TypeUl } from '../../../type-element/type-html/ul/ul.abstract';
import { IUnorderedList } from './unordered-list.interface';

export class UnorderedList extends TypeUl implements IUnorderedList {
  className: 'UnorderedList';
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'UnorderedList';
    this.childNodes = [];
  }
}
