import { Span, TextNode } from '@type-dom/framework';
import { FormBuilder } from '../../form-builder';
import { LayoutWrapper } from '../../views/layout/layout';
import { TypeControl } from '../../core/control/type-control.abstract';
import { WebPage } from '../../core/page/web-page.class';
import { Table } from '../../components/form/form-item/table-item/table/table.class';
import { ITable } from '../../components/form/form-item/table-item/table/table.interface';
import { ITableHead } from '../../components/form/form-item/table-item/table/head/head.interface';
import { ITableRow } from '../../components/form/form-item/table-item/table/row/row.interface';
import { TableDataCell } from '../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { ModeStateAbstract } from './mode-state.abstract';
import { WebDocumentTabs } from '../../core/document/tabs/tabs.class';
import { TableRow } from '../../components/form/form-item/table-item/table/row/row.class';
import { WebForm } from '../../components/form/form';

/**
 * 设计模式
 * 显示设计面板：左侧控制栏和右侧属性栏
 */
export class DesignState extends ModeStateAbstract {
  mode: 'design';
  width: string;

  constructor(public parent: FormBuilder) {
    super();
    this.mode = 'design';
    this.width = this.parent.clientWidth - 595 + 'px';
  }

  createLayout(editor: FormBuilder): LayoutWrapper {
    //   todo 显示面板
    const layout = new LayoutWrapper(editor);
    // layout.header = new HeaderWrapper(layout);
    // layout.body = new BodyWrapper(layout); // WebBody ---> MainContent中会调用 webDocument,所以必须先创建webDocument
    layout.childNodes.push(layout.header, layout.body);
    return layout;
  }

  resetFieldProperty() {
    this.parent.fieldProperty.reset();
  }

  setControlReadOnly(control: TypeControl): void {
    control.propObj.attrObj.readonly = true;
    return;
  }

  setSelectedControl(control: TypeControl | null) {
    console.log('design-state setSelectedControl . ');
    this.parent.setSelectedControl(control);
    // FormDesigner.controlProperty.reset();
    console.warn('warning next ........');
    this.parent.controlSubject.next(control);
  }

  setSelectedTableDataCell(tableDataCell: TableDataCell | null) {
    this.parent.setSelectedTableDataCell(tableDataCell);
    // 重置属性栏？？？
    this.parent.fieldProperty.reset();
    this.parent.fieldSubject.next(tableDataCell);
  }

  hideFormItemDeleteSpan(deleteSpan: Span): void {}

  tableCreateInstance(table: Table, tableLiteral: ITable) {
    for (let index = 0; index < tableLiteral.childNodes.length; index++) {
      const trLiteral = tableLiteral.childNodes[index];
      if (index === 0) {
        table.tableHead.createInstance(trLiteral as ITableHead);
      } else {
        // 设计模式下，应该只有一行
        if (index === 1) {
          table.childNodes[index].createInstance(trLiteral as ITableRow);
          break; // 断出
        }
      }
    }
  }

  designInterrupt(): void {
    return;
  }

  onControlDragstart(control: TypeControl): void {
    if (control.parent instanceof WebPage) {
      control.parent.dragStartIndex = control.index;
      // console.log('this.parent.dragStartIndex is ', this.parent.dragStartIndex);
    }
  }

  onControlDrop(control: TypeControl): void {
    if (control.parent instanceof WebPage) {
      control.parent.dragDropIndex = control.index;
      // console.log('this.parent.dragDropIndex is ', this.parent.dragDropIndex);
    }
  }

  onControlDragend(control: TypeControl) {
    if (control.parent instanceof WebPage) {
      if (control.parent.dragDropIndex !== undefined) {
        // 节点重新排序
        if (control.parent.dragStartIndex > control.parent.dragDropIndex) {
          // 如果当前元素在拖动目标位置的下方，先将当前元素从数组拿出，数组长度-1，我们直接给数组拖动目标位置的地方新增一个和当前元素值一样的元素，
          // 我们再把数组之前的那个拖动的元素删除掉，所以要len+1
          control.parent.childNodes.splice(
            control.parent.dragDropIndex,
            0,
            control
          );
          control.parent.childNodes.splice(
            control.parent.dragStartIndex + 1,
            1
          );
        } else {
          // 如果当前元素在拖动目标位置的上方，先将当前元素从数组拿出，数组长度-1，我们直接给数组拖动目标位置+1的地方新增一个和当前元素值一样的元素，
          // 这时，数组len不变，我们再把数组之前的那个拖动的元素删除掉，下标还是index
          control.parent.childNodes.splice(
            control.parent.dragDropIndex + 1,
            0,
            control
          );
          control.parent.childNodes.splice(control.parent.dragStartIndex, 1);
        }
      }
      // console.log('this.parent is ', this.parent);
      control.parent.render();
    }
  }

  onTabsDblClick(evt: Event, tabs: WebDocumentTabs) {
    for (const li of tabs.childNodes) {
      if (li.dom === evt.target) {
        // 选中的tab
        li.setAttrObj({
          contenteditable: true,
        });
      } else {
        li.setAttrObj({
          contenteditable: false,
        });
      }
    }
  }

  onTabsInput(evt: Event, tabs: WebDocumentTabs) {
    for (const li of tabs.childNodes) {
      if (li.dom === evt.target) {
        // 选中的tab
        // console.log('li.dom.innerText is ', li.dom.innerText);
        (li.childNodes[0] as TextNode).setText(li.dom.innerText);
      }
    }
  }

  tableControlConfigTable() {}

  rowCreateInstance(row: TableRow) {}

  hideFormFooter(form: WebForm): void {}
}
