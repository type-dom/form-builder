import { HtmlElement } from '../../../type-element/html-element/html-element.abstract';
import { UlBase } from '../../../type-element/html-element/ul/ul.abstract';
import { IUnorderedList } from './unordered-list.interface';

export class UnorderedList extends UlBase implements IUnorderedList {
  className: 'UnorderedList';
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'UnorderedList';
    this.childNodes = [];
  }
}
