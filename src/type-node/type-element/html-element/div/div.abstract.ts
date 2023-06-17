import { HtmlElement } from '../html-element.abstract';
import { IDivBase } from './div.interface';
export abstract class DivBase extends HtmlElement implements IDivBase {
  tagName: 'div';
  dom: HTMLDivElement;
  protected constructor() {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
  }
}
