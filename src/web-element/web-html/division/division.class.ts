import { WebHtml } from '../web-html.abstract';
import { IDivision } from './division.interface';

export class Division extends WebHtml implements IDivision {
  tagName: 'div';
  className: 'Division';
  dom: HTMLDivElement;
  constructor(public parent: WebHtml) {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'Division';
  }
}
