import { HtmlElement } from '../html-element.abstract';
import { IUnorderedList } from './unordered-list.interface';
import { UlComponent } from '../../../web-abstract/web-component/ul-component/ul-component.abstract';

export class UnorderedList extends UlComponent implements IUnorderedList {
  className: 'UnorderedList';
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'UnorderedList';
    this.childNodes = [];
  }
}
