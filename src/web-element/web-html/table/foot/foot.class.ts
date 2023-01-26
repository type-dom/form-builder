import { WebHtml } from '../../web-html.abstract';
import { WebTableRow } from '../row/row.class';
import { IWebTableFoot } from './foot.interface';

export class WebTableFoot extends WebHtml implements IWebTableFoot {
  tagName: 'tfoot';
  className: 'WebTableFoot';
  dom: HTMLElement;
  childNodes: WebTableRow[];
  constructor(public parent: WebHtml) {
    super();
    this.tagName = 'tfoot';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebTableFoot';
    this.childNodes = [];
  }
}
