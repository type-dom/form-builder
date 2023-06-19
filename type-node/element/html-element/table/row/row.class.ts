import { fromEvent } from 'rxjs';
import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { DeleteSvg } from '../../../../components/svgs/delete/delete';
import { Span } from '../../span/span.class';
import { StylePosition } from '../../../../web-style.enum';
import { WebTableDataCell } from '../data-cell/data-cell.class';
import { IWebTableDataCell } from '../data-cell/data-cell.interface';
import { WebTable } from '../table.class';
import { IWebTableRow } from './row.interface';
export class WebTableRow extends TypeHtml implements IWebTableRow {
  nodeName: 'tr';
  className: 'WebTableRow';
  dom: HTMLTableRowElement;
  childNodes: WebTableDataCell[];
  deleteSpan: Span;
  constructor(public parent: WebTable, trData: Record<string, string | number | boolean>) {
    super('tr');
    // console.log('trData is ', trData);
    this.nodeName = 'tr';
    this.dom = document.createElement(this.nodeName);
    this.className = 'WebTableRow';
    this.childNodes = [];
    for (const key in trData) {
      const tdObj = new WebTableDataCell(this, trData[key]);
      this.addChild(tdObj);
    }
    // 要创建每一行的删除。
    // todo 添加操作列。应有个表格的全局的判断，是否有操作列，和选择列。
    //    不应该像现在这样直接加了有给删除键
    this.deleteSpan = new Span(this);
    this.deleteSpan.setStyleObj({
      width: '30px',
      height: '30px',
      position: StylePosition.absolute,
      // float: 'right',
      padding: 'auto',
      right: '10px',
      paddingTop: '10px'
      // top: '10px',
      // backgroundColor: '#f00',
    });
    const deleteSvg = new DeleteSvg(this.deleteSpan);
    this.deleteSpan.addChild(deleteSvg);
    // console.log('table row delete span is ', this.deleteSpan);
    // this.addChild(this.deleteSpan);
    this.initEvents();
  }
  get rowId(): string | undefined {
    return this.attrObj['row-id'] ? this.attrObj['row-id'] as string : undefined;
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.deleteSpan.dom, 'click').subscribe(() => {
        console.log('delete row click . ');
        console.log('this.parent.childNodes.length is ', this.parent.childNodes.length);
        if (this.parent.childNodes.length === 2) { // 第一行是表头
          console.error('这已经是唯一的行了');
          throw Error('这已经是唯一的行了');
        }
        //  todo 删除这一行。
        this.dom.remove(); // 清除真实dom
        this.parent.childNodes.splice(this.index, 1); // 在父节点清除该对象。
      })
    );
  }
  createInstance(trLiteral: IWebTableRow): void {
    // TODO 字面量和对象的子节点之间的关系处理待优化
    trLiteral.childNodes.forEach((child: IWebTableDataCell | Span, index) => {
      if (child.className === 'Span') {
        trLiteral.childNodes.splice(index, 1);
      }
    });

    super.createInstance(trLiteral);
    // console.log('trLiteral is ', trLiteral);
    // console.log('this.deleteSpan is ', this.deleteSpan);
    trLiteral.childNodes.forEach((td, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].createInstance(td);
      } else {
        const tdObj = new WebTableDataCell(this, '');
        tdObj.createInstance(td);
        this.appendChild(tdObj);
      }
    });
    if (this.editor.mode === 'fill') {
      // console.log('table row mod design ');
      // todo 只在dom上渲染，而不加到子节点上。
      this.appendChild(this.deleteSpan);
      // this.render();
      // this.deleteSpan.render();
      // console.log('table row this.dom is ', this.dom);

      // this.childNodes.splice(this.childNodes.length - 1, 1);
      // console.log('table row this.childNodes is ', this.childNodes);
      // this.removeChild(this.childNodes.length - 1);
      // this.appendChildDom(this.deleteSpan);
    }
  }
}