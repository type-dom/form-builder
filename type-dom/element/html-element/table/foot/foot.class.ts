import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { WebTableRow } from '../row/row.class';
import { IWebTableFoot } from './foot.interface';

export class WebTableFoot extends TypeHtml implements IWebTableFoot {
  nodeName: 'tfoot';
  className: 'WebTableFoot';
  dom: HTMLElement;
  childNodes: WebTableRow[];
  constructor(public parent: TypeHtml) {
    super('tfoot');
    this.nodeName = 'tfoot';
    this.dom = document.createElement(this.nodeName);
    this.className = 'WebTableFoot';
    this.childNodes = [];
  }
}
