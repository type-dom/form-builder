import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { IDivision } from './division.interface';

export class Division extends TypeHtml implements IDivision {
  tagName: 'div';
  className: 'Division';
  dom: HTMLDivElement;
  constructor(public parent: TypeHtml) {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'Division';
  }
}
