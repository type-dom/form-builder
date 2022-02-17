import { WebElement } from '../../web-element.abstract';
import { WebTableRow } from '../row/row.class';
import { IWebTableFoot } from './foot.interface';

export class WebTableFoot extends WebElement implements IWebTableFoot {
  tagName: 'tfoot';
  className: 'WebTableFoot';
  dom: HTMLElement;
  childNodes: WebTableRow[];
  constructor(public parent: WebElement) {
    super();
    this.tagName = 'tfoot';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebTableFoot';
    this.childNodes = [];
  }
}
