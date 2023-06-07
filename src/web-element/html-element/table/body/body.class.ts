import { HtmlElement } from '../../../web-abstract/html-element/html-element.abstract';
import { WebTable } from '../table.class';
import { WebTableRow } from '../row/row.class';
import { IWebTableBody } from './body.interface';

export class WebTableBody extends HtmlElement implements IWebTableBody {
  tagName: 'tbody';
  className: 'WebTableBody';
  dom: HTMLTableSectionElement;
  childNodes: WebTableRow[];
  constructor(public parent: WebTable) {
    super();
    this.tagName = 'tbody';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebTableBody';
    this.childNodes = [];
  }
}
