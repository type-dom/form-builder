import { WebElement } from '../web-element.abstract';
import { IDivision } from './division.interface';

export class Division extends WebElement implements IDivision {
  tagName: 'div';
  className: 'Division';
  dom: HTMLDivElement;
  constructor(public parent: WebElement) {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'Division';
  }
}
