import { ListItem } from '../../web-element/unordered-list/list-item/list-item.class';
import { WebComponent } from '../web-component.abstract';
import { IUlComponent } from './ul-component.interface';

export abstract class UlComponent extends WebComponent implements IUlComponent {
  tagName: 'ul';
  dom: HTMLUListElement;
  childNodes: ListItem[];
  protected constructor() {
    super();
    this.tagName = 'ul';
    this.dom = document.createElement(this.tagName);
    this.childNodes = [];
  }
}
