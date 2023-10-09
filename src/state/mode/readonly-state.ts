import { Span } from 'type-dom.ts';
import { TypeForm } from '../../type-form';
import { LayoutWrapper } from '../../views/layout/layout';
import { TypeControl } from '../../core/control/type-control.abstract';
import { WebForm } from '../../components/form/form';
import { Table } from '../../components/form/form-item/table-item/table/table.class';
import { ITable } from '../../components/form/form-item/table-item/table/table.interface';
import { ITableHead } from '../../components/form/form-item/table-item/table/head/head.interface';
import { TableRow } from '../../components/form/form-item/table-item/table/row/row.class';
import { ITableRow } from '../../components/form/form-item/table-item/table/row/row.interface';
import { TableDataCell } from '../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { ModeStateAbstract } from './mode-state.abstract';
import { WebDocumentTabs } from '../../core/document/tabs/tabs.class';
import { TableControl } from '../../core/control/complex/table/table.class';
/**
 * 只读模式
 * 所有控件不可填写
 * 加载相应的表单数据
 */
export class ReadonlyState extends ModeStateAbstract {
  mode: 'readonly';
  width: string;
  constructor() {
    super();
    this.mode = 'readonly';
    this.width = '100%';
  }
  createLayout(editor: TypeForm): LayoutWrapper {
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
    control.setDisabled();
  }
  setSelectedControl(control: TypeControl | null): void {
    TypeForm.setSelectedControl(control);
  }
  setSelectedTableDataCell(tableDataCell: TableDataCell | null): void {
    TypeForm.setSelectedTableDataCell(tableDataCell);
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
  tableControlConfigTable(tableControl: TableControl) {}
  rowCreateInstance(row: TableRow) {}
  hideFormFooter(form: WebForm): void {
    form.footer.hide();
  }
}
