import { TypeTableBody } from 'type-dom.ts';
import { TableRow } from '../row/row.class';
import { Table } from '../table.class';
import { ITableBody } from './body.interface';

export class TableBody extends TypeTableBody implements ITableBody {
  className: 'TableBody';
  childNodes: TableRow[];
  constructor(public parent: Table) {
    super();
    this.className = 'TableBody';
    this.childNodes = [];
  }
}
