import { WebElement } from '../web-element.abstract';
import { IHeader } from './header.interface';

export class Header extends WebElement implements IHeader {
  tagName: 'header';
  dom: HTMLElement;
  className: 'Header';
  constructor(public parent: WebElement) {
    super();
    this.tagName = 'header';
    this.dom = document.createElement(this.tagName);
    this.className = 'Header';
  }
}
