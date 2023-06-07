import { HtmlElement } from '../../../web-abstract/html-element/html-element.abstract';
import { WebTableRow } from '../row/row.class';
import { IWebTableFoot } from './foot.interface';

export class WebTableFoot extends HtmlElement implements IWebTableFoot {
  tagName: 'tfoot';
  className: 'WebTableFoot';
  dom: HTMLElement;
  childNodes: WebTableRow[];
  constructor(public parent: HtmlElement) {
    super();
    this.tagName = 'tfoot';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebTableFoot';
    this.childNodes = [];
  }
}
