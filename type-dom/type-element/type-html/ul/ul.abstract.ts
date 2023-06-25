import { TypeHtml } from '../type-html.abstract';
import { ITypeUl } from './ul.interface';
import { TypeLi } from './li/li.class';
export abstract class TypeUl extends TypeHtml implements ITypeUl {
  nodeName: 'ul';
  dom: HTMLUListElement;
  childNodes: TypeLi[];
  protected constructor() {
    super('ul');
    this.nodeName = 'ul';
    this.dom = document.createElement(this.nodeName);
    this.childNodes = [];
  }
}
