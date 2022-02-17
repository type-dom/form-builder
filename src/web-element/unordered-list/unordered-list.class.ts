import { WebElement } from '../web-element.abstract';
import { IUnorderedList } from './unordered-list.interface';
import { UlComponent } from '../../web-component/ul-component/ul-component.abstract';

export class UnorderedList extends UlComponent implements IUnorderedList {
  className: 'UnorderedList';
  constructor(public parent: WebElement) {
    super();
    this.className = 'UnorderedList';
    this.childNodes = [];
  }
}
