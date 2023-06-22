import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { TableRow } from '../row/row.class';
import { ITableFoot } from './foot.interface';

export class TableFoot extends TypeHtml implements ITableFoot {
  nodeName: 'tfoot';
  className: 'TableFoot';
  dom: HTMLElement;
  childNodes: TableRow[];
  constructor(public parent: TypeHtml) {
    super('tfoot');
    this.nodeName = 'tfoot';
    this.dom = document.createElement(this.nodeName);
    this.className = 'TableFoot';
    this.childNodes = [];
  }
}
