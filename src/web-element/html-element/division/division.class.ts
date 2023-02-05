import { HtmlElement } from '../html-element.abstract';
import { IDivision } from './division.interface';

export class Division extends HtmlElement implements IDivision {
  tagName: 'div';
  className: 'Division';
  dom: HTMLDivElement;
  constructor(public parent: HtmlElement) {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'Division';
  }
}
