import { fromEvent } from 'rxjs';
import { TypeTableHead, TextNode } from '@type-dom/framework';
import { ITableField } from '../../../../../../core/control/complex/table/table.interface';
import { FormBuilder } from '../../../../../../form-builder';
import { TableHeaderCell } from '../header-cell/header-cell.class';
import { Table } from '../table.class';
import { ITableHead } from './head.interface';

// 表格页眉
export class TableHead extends TypeTableHead implements ITableHead {
  className: 'TableHead';
  childNodes: TableHeaderCell[];

  constructor(public parent: Table, th: ITableField[] = []) {
    super();
    this.nodeName = 'thead';
    this.dom = document.createElement(this.nodeName);
    this.className = 'TableHead';
    this.childNodes = [];
    this.setHeadItems(th);
  }

  get formBuilder() {
    return this.parent.formBuilder;
  }

  setHeadItems(th: ITableField[]): void {
    this.clearChildren();
    for (const field of th) {
      const tableHeader = new TableHeaderCell(this);
      const text = new TextNode(field.label);
      tableHeader.setAttrName(field.name);
      tableHeader.childNodes.push(text);
      this.childNodes.push(tableHeader);
    }
  }

  createInstance(tHeadLiteral: ITableHead): void {
    if (tHeadLiteral.propObj) {
      this.resetPropObj(tHeadLiteral.propObj);
    }
    tHeadLiteral.childNodes.forEach((child, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].createInstance(child);
      } else {
        const th = new TableHeaderCell(this);
        th.createInstance(child);
        this.appendChild(th);
      }
    });
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe(() => {
        this.formBuilder.mode.setSelectedTableDataCell(null);
      })
    );
  }
}
