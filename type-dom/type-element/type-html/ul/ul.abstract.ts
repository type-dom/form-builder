import { ListItem } from '../../../element/html-element/unordered-list/list-item/list-item.class';
import { TypeHtml } from '../type-html.abstract';
import { ITypeUl } from './ul.interface';
export abstract class TypeUl extends TypeHtml implements ITypeUl {
  nodeName: 'ul';
  dom: HTMLUListElement;
  childNodes: ListItem[];
  protected constructor() {
    super('ul');
    this.nodeName = 'ul';
    this.dom = document.createElement(this.nodeName);
    this.childNodes = [];
  }
}
