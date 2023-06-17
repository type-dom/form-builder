import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { IHeader } from './header.interface';
export class Header extends TypeHtml implements IHeader {
  tagName: 'header';
  dom: HTMLElement;
  className: 'Header';
  constructor(public parent: TypeHtml) {
    super();
    this.tagName = 'header';
    this.dom = document.createElement(this.tagName);
    this.className = 'Header';
  }
}
