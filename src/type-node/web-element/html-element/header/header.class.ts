import { HtmlElement } from '../../../type-element/html-element/html-element.abstract';
import { IHeader } from './header.interface';
export class Header extends HtmlElement implements IHeader {
  tagName: 'header';
  dom: HTMLElement;
  className: 'Header';
  constructor(public parent: HtmlElement) {
    super();
    this.tagName = 'header';
    this.dom = document.createElement(this.tagName);
    this.className = 'Header';
  }
}
