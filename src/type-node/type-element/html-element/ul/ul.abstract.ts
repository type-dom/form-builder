import { ListItem } from '../../../web-element/html-element/unordered-list/list-item/list-item.class';
import { HtmlElement } from '../html-element.abstract';
import { IUlBase } from './ul.interface';

export abstract class UlBase extends HtmlElement implements IUlBase {
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
