import { fromEvent } from 'rxjs';
import { TextNode } from '../../../../text-node/text-node.class';
import { ITableField } from '../../../../../src/core/controls/complex/table/table.interface';
import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { TableHeader } from '../header/header.class';
import { Table } from '../table.class';
import { ITableHead } from './head.interface';

// 表格页眉
export class TableHead extends TypeHtml implements ITableHead {
  nodeName: 'thead';
  className: 'TableHead';
  dom: HTMLTableSectionElement;
  childNodes: TableHeader[];

  constructor(public parent: Table, th: ITableField[] = []) {
    super('thead');
    this.nodeName = 'thead';
    this.dom = document.createElement(this.nodeName);
    this.className = 'TableHead';
    this.childNodes = [];
    this.setHeadItems(th);
    this.initEvents();
  }

  setHeadItems(th: ITableField[]): void {
    this.clearChildDom();
    this.clearChildNodes();
    for (const field of th) {
      const tableHeader = new TableHeader(this);
      const text = new TextNode(tableHeader, field.label);
      tableHeader.setAttrName(field.name);
      tableHeader.childNodes.push(text);
      this.childNodes.push(tableHeader);
    }
  }

  createInstance(tHeadLiteral: ITableHead): void {
    if (tHeadLiteral.propObj) {
      this.setPropObj(tHeadLiteral.propObj);
    }
    tHeadLiteral.childNodes.forEach((child, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].createInstance(child);
      } else {
        const th = new TableHeader(this);
        th.createInstance(child);
        this.appendChild(th);
      }

    });
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe(() => {
        this.editor.setSelectedTableDataCell(null);
      })
    );
  }
}
