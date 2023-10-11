import { Span } from 'type-dom.ts';
import { TypeFormDesigner } from '../../type-form-designer';
import { LayoutWrapper } from '../../views/layout/layout';
import { TypeControl } from '../../core/control/type-control.abstract';
import { WebForm } from '../../components/form/form';
import { Table } from '../../components/form/form-item/table-item/table/table.class';
import { ITable } from '../../components/form/form-item/table-item/table/table.interface';
import { ITableHead } from '../../components/form/form-item/table-item/table/head/head.interface';
import { ITableRow } from '../../components/form/form-item/table-item/table/row/row.interface';
import { TableRow } from '../../components/form/form-item/table-item/table/row/row.class';
import { TableDataCell } from '../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { ModeStateAbstract } from './mode-state.abstract';
import { WebDocumentTabs } from '../../core/document/tabs/tabs.class';
import { TableControl } from '../../core/control/complex/table/table.class';
/**
 * 填表模式
 * 所有控件可填写
 * 不显示设计相关属性面板
 */
export class FillState extends ModeStateAbstract {
  mode: 'fill';
  width: string;
  constructor() {
    super();
    this.mode = 'fill';
    this.width = '100%';
  }
  createLayout(editor: TypeFormDesigner): LayoutWrapper {
    const layout = new LayoutWrapper(editor);
    layout.form = new WebForm(layout);
    // 头部显示表单名称
    // this.form.setTitle('');
    layout.form.header.hide(); // 隐藏头部
    layout.webDocument.propObj.styleObj.height = '100%';
    layout.form.body.addChild(layout.webDocument);
    layout.addChild(layout.form);
    return layout;
  }
  setControlReadOnly(control: TypeControl): void {
    return;
  }
  setSelectedControl(control: TypeControl | null): void {
    TypeFormDesigner.setSelectedControl(control);
  }
  setSelectedTableDataCell(tableDataCell: TableDataCell | null): void {
    TypeFormDesigner.setSelectedTableDataCell(tableDataCell);
  }
  hideFormItemDeleteSpan(deleteSpan: Span) {
    deleteSpan.hide();
  }
  tableCreateInstance(table: Table, tableLiteral: ITable) {
    for (let index = 0; index < tableLiteral.childNodes.length; index++) {
      const trLiteral = tableLiteral.childNodes[index];
      if (index === 0) {
        table.tableHead.createInstance(trLiteral as ITableHead);
      } else {
        if ((table.childNodes[index]) instanceof TableRow) {
          (table.childNodes[index] as TableRow).createInstance(trLiteral as ITableRow);
        } else {
          const trObj = new TableRow(table, {});
          trObj.createInstance(trLiteral as ITableRow);
          table.addChild(trObj);
        }
      }
    }
  }
  designInterrupt() {}
  onControlDragstart(control: TypeControl) {}
  onControlDrop(control:TypeControl): void {}
  onControlDragend(control: TypeControl) {}
  onTabsDblClick(evt: Event, tabs: WebDocumentTabs) {
    for (const li of tabs.childNodes) {
      li.setAttrObj({
        contenteditable: false,
      });
    }
  }
  onTabsInput(evt: Event, tabs: WebDocumentTabs) {}
  tableControlConfigTable(tableControl: TableControl) {
    // 填表模式下，将表格控件删除按钮替换为添加按钮。
    tableControl.formItem.childNodes.splice(2, 1, tableControl.formItem.addSpan);
  }
  rowCreateInstance(row: TableRow) {
    row.appendChild(row.deleteSpan);
  }
  hideFormFooter(form: WebForm): void {}
}
