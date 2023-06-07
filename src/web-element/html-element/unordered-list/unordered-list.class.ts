import { HtmlElement } from '../../web-abstract/html-element/html-element.abstract';
import { UlBase } from '../../web-abstract/html-element/ul/ul.abstract';
import { IUnorderedList } from './unordered-list.interface';

export class UnorderedList extends UlBase implements IUnorderedList {
  className: 'UnorderedList';
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'UnorderedList';
    this.childNodes = [];
  }
}
