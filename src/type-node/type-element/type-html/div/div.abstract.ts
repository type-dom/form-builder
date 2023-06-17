import { TypeHtml } from '../type-html.abstract';
import { IDivBase } from './div.interface';
export abstract class DivBase extends TypeHtml implements IDivBase {
  tagName: 'div';
  dom: HTMLDivElement;
  protected constructor() {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
  }
}
