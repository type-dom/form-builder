import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { Table } from '../table.class';
import { TableRow } from '../row/row.class';
import { ITableBody } from './body.interface';

export class TableBody extends TypeHtml implements ITableBody {
  nodeName: 'tbody';
  className: 'TableBody';
  dom: HTMLTableSectionElement;
  childNodes: TableRow[];
  constructor(public parent: Table) {
    super('tbody');
    this.nodeName = 'tbody';
    this.dom = document.createElement(this.nodeName);
    this.className = 'TableBody';
    this.childNodes = [];
  }
}
