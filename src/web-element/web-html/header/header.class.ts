import { WebHtml } from '../web-html.abstract';
import { IHeader } from './header.interface';

export class Header extends WebHtml implements IHeader {
  tagName: 'header';
  dom: HTMLElement;
  className: 'Header';
  constructor(public parent: WebHtml) {
    super();
    this.tagName = 'header';
    this.dom = document.createElement(this.tagName);
    this.className = 'Header';
  }
}
