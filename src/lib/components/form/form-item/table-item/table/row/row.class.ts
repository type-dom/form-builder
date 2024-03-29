import { fromEvent } from 'rxjs';
import { TypeTableRow, Span, StylePosition } from '@type-dom/framework';
import { TdDeleteSvg } from '@type-dom/svgs';
import { FormBuilder } from '../../../../../../form-builder';
import { TableDataCell } from '../data-cell/data-cell.class';
import { ITableDataCell } from '../data-cell/data-cell.interface';
import { Table } from '../table.class';
import { ITableRow } from './row.interface';

export class TableRow extends TypeTableRow implements ITableRow {
  className: 'TableRow';
  childNodes: TableDataCell[];
  deleteSpan: Span;

  constructor(
    public parent: Table,
    trData: Record<string, string | number | boolean>
  ) {
    super();
    // console.log('trData is ', trData);
    this.className = 'TableRow';
    this.childNodes = [];
    for (const key in trData) {
      const tdObj = new TableDataCell(this, trData[key]);
      this.addChild(tdObj);
    }
    // 要创建每一行的删除。
    // todo 添加操作列。应有个表格的全局的判断，是否有操作列，和选择列。
    //    不应该像现在这样直接加了有给删除键
    this.deleteSpan = new Span({ parent: this });
    this.deleteSpan.setStyleObj({
      width: '30px',
      height: '30px',
      position: StylePosition.absolute,
      // float: 'right',
      padding: 'auto',
      right: '10px',
      paddingTop: '10px',
      // top: '10px',
      // backgroundColor: '#f00',
    });
    const deleteSvg = new TdDeleteSvg(this.deleteSpan);
    this.deleteSpan.addChild(deleteSvg);
    // console.log('table row delete span is ', this.deleteSpan);
    // this.addChild(this.deleteSpan);
  }

  get formBuilder(): FormBuilder {
    return this.parent.formBuilder;
  }

  get rowId(): string | undefined {
    return this.attrObj['row-id']
      ? (this.attrObj['row-id'] as string)
      : undefined;
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.deleteSpan.dom, 'click').subscribe(() => {
        console.log('delete row click . ');
        console.log(
          'this.parent.childNodes.length is ',
          this.parent.childNodes.length
        );
        if (this.parent.childNodes.length === 2) {
          // 第一行是表头
          console.error('这已经是唯一的行了');
          throw Error('这已经是唯一的行了');
        }
        //  todo 删除这一行。
        this.dom.remove(); // 清除真实dom
        this.parent.childNodes.splice(this.index, 1); // 在父节点清除该对象。
      })
    );
  }

  createInstance(trLiteral: ITableRow): void {
    // TODO 字面量和对象的子节点之间的关系处理待优化
    trLiteral.childNodes.forEach((child: ITableDataCell | Span, index) => {
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
        const tdObj = new TableDataCell(this, '');
        tdObj.createInstance(td);
        this.appendChild(tdObj);
      }
    });
    this.formBuilder.mode.rowCreateInstance(this);
  }
}
