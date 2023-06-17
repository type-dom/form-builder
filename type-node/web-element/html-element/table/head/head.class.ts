import { fromEvent } from 'rxjs';
import { WebTextNode } from '../../../../web-text-node/web-text-node.class';
import { ITableField } from '../../../../../src/core/controls/complex/table/table.interface';
import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { WebTableHeader } from '../header/header.class';
import { WebTable } from '../table.class';
import { IWebTableHead } from './head.interface';

// 表格页眉
export class WebTableHead extends TypeHtml implements IWebTableHead {
  tagName: 'thead';
  className: 'WebTableHead';
  dom: HTMLTableSectionElement;
  childNodes: WebTableHeader[];

  constructor(public parent: WebTable, th: ITableField[] = []) {
    super();
    this.tagName = 'thead';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebTableHead';
    this.childNodes = [];
    this.setHeadItems(th);
    this.initEvents();
  }

  setHeadItems(th: ITableField[]): void {
    this.clearChildDom();
    this.clearChildNodes();
    for (const field of th) {
      const tableHeader = new WebTableHeader(this);
      const text = new WebTextNode(tableHeader, field.label);
      tableHeader.setAttrName(field.name);
      tableHeader.childNodes.push(text);
      this.childNodes.push(tableHeader);
    }
  }

  createInstance(tHeadLiteral: IWebTableHead): void {
    if (tHeadLiteral.propObj) {
      this.setPropObj(tHeadLiteral.propObj);
    }
    tHeadLiteral.childNodes.forEach((child, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].createInstance(child);
      } else {
        const th = new WebTableHeader(this);
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
