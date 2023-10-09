import { Span } from 'type-dom.ts';
import { TypeForm } from '../../type-form';
import { TypeControl } from '../../core/control/type-control.abstract';
import { WebDocumentTabs } from '../../core/document/tabs/tabs.class';
import { LayoutWrapper } from '../../views/layout/layout';
import { TableDataCell } from '../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { WebPage } from '../../core/page/web-page.class';
import { ITable } from '../../components/form/form-item/table-item/table/table.interface';
import { Table } from '../../components/form/form-item/table-item/table/table.class';
import { TableControl } from '../../core/control/complex/table/table.class';
import { TableRow } from '../../components/form/form-item/table-item/table/row/row.class';
import { WebForm } from '../../components/form/form';
/**
 * design        设计模式
 * filling       填表模式
 * readonly      只读模式
 */
export abstract class ModeStateAbstract {
  abstract mode: 'design' | 'fill' | 'readonly';
  abstract width: string;
  abstract createLayout(editor: TypeForm): LayoutWrapper;
  setMode(mode: 'design' | 'fill' | 'readonly' = 'design') {
    this.mode = mode;
  }
  abstract setControlReadOnly(control: TypeControl): void;
  /**
   * 选中控件
   * @param control
   */
  abstract setSelectedControl(control: TypeControl | null): void;
  /**
   *  设置选中、取消选中的样式变化。与属性栏联动由子类（DesignState类）方法实现。
   * 选中单元格，则显示字段属性；否则，隐藏；
   * todo setSelectedControl setSelectedTableDataCell 联动问题
   * @param tableDataCell
   */
  abstract setSelectedTableDataCell(tableDataCell: TableDataCell | null): void;

  /**
   * hide deleteSvg
   * @param deleteSpan
   */
  abstract hideFormItemDeleteSpan(deleteSpan: Span): void;
  /**
   *
   */
  abstract tableCreateInstance(table: Table, tableLiteral: ITable): void;
  /**
   * 控件监听事件方法
   * 事件： 拖拽开始、拽动、结束
   *       鼠标按下
   * @param control
   */
  abstract onControlDragstart(control: TypeControl): void;
  abstract onControlDrop(control: TypeControl): void;
  abstract onControlDragend(control: TypeControl): void;
  onControlMousedown(control: TypeControl) {
    if (control.parent instanceof WebPage) {
      this.setSelectedControl(control);
    }
    if (control.parent instanceof TableDataCell) {
      this.setSelectedTableDataCell(control.parent);
    }
  }
  /**
   * tabs listeners
   */
  abstract onTabsDblClick(evt: Event, tabs: WebDocumentTabs): void;
  abstract onTabsInput(evt: Event, tabs: WebDocumentTabs): void;
  /**
   * TableControl
   */
  abstract tableControlConfigTable(tableControl: TableControl): void;
  /**
   * row
   */
  abstract rowCreateInstance(row: TableRow): void;

  /**
   * Form
   */
  abstract hideFormFooter(form: WebForm) : void;
}
