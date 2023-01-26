import { WebHtml } from '../web-html.abstract';
import { IUnorderedList } from './unordered-list.interface';
import { UlComponent } from '../../../web-component/ul-component/ul-component.abstract';

export class UnorderedList extends UlComponent implements IUnorderedList {
  className: 'UnorderedList';
  constructor(public parent: WebHtml) {
    super();
    this.className = 'UnorderedList';
    this.childNodes = [];
  }
}
