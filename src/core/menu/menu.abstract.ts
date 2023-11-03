import { fromEvent } from 'rxjs';
import { Span, TextNode, TypeDiv, TypeSvgSvg } from 'type-dom.ts';
import { TypeFormDesigner } from '../../type-form-designer';
import { TableDataCell } from '../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { TypeControl } from '../control/type-control.abstract';
import { TableControl } from '../control/complex/table/table.class';
import { labelStyle } from '../control/type-control.const';
import { WebPage } from '../page/web-page.class';
import { menuStyle } from './menu.const';
import { ITypeMenu } from './menu.interface';
export abstract class TypeMenu extends TypeDiv implements ITypeMenu {
  abstract childNodes: [TypeSvgSvg, Span];
  abstract svg: TypeSvgSvg;
  abstract createControl(parent: WebPage | TableDataCell): TypeControl;
  readonly titleSpan: Span;
  textNode: TextNode;
  protected constructor() {
    super();
    this.addStyleObj(Object.assign({}, menuStyle));
    this.titleSpan = new Span(this);
    this.textNode = new TextNode();
    this.titleSpan.childNodes = [this.textNode];
  }
  initEvents(): void {
    this.events.push(
      // 鼠标进
      fromEvent(this.dom, 'mouseover').subscribe(() => {
        this.setStyleObj({
          backgroundColor: '#eac100',
          background: '#eac100',
          transition: 'all 0.3s',
        });
      }),
      // 鼠标出
      fromEvent(this.dom, 'mouseout').subscribe(() => {
        if (TypeFormDesigner.selectedMenu !== this) {
          this.setStyleObj({
            backgroundColor: '#eee',
            background: '-webkit-linear-gradient(top, #eee, #d9d9d9)',
          });
        } else {
          this.setStyleObj({
            backgroundColor: '#fae100',
            background: '#fae100'
          });
        }
      }),
      // 点击后直接创建控件，并加载到页面中
      fromEvent(this.dom, 'click').subscribe(() => {
        TypeFormDesigner.setSelectedMenu(this);
        console.log('AppRoot.selectedMenu is ', TypeFormDesigner.selectedMenu);
        // console.log('control is ', control);
        // console.log('AppRoot.selectedTableDataCell is ', AppRoot.selectedTableDataCell);
        // console.log('this.ControlClass.name is ', this.ControlClass.name);
        // console.log('TableControl.name is ', TableControl.name);
        // 判断是否选中表格的单元格
        if (TypeFormDesigner.selectedTableDataCell) { // 修改表格单元格的控件。
          if (this.className !== 'TableMenu') {
            const control = this.createControl(TypeFormDesigner.selectedTableDataCell);
            TypeFormDesigner.selectedTableDataCell.setControl(control);
            // todo 修改单元格中的控件时， 要触发 字段属性 reset
            TypeFormDesigner.fieldProperty.reset();
            TypeFormDesigner.selectedTableDataCell.render();
          } else {
            // 弹框提示
            console.error('单元格中不能添加表格。');
            TypeFormDesigner.messageBox.toast('错误提示', '单元格中不能添加表格');
          }
        } else { // 添加到页面中
          // 创建控件
          const control = this.createControl(TypeFormDesigner.currentPage); // todo currentPage
          // 表格控件不受表单列数设置影响。
          if (control instanceof TableControl) {
            control.setStyleObj({
              width: '100%',
            });
          } else {
            // 新增控件时要根据新的label宽度，设置 itemContent
            control.formItem.itemContent.setStyleObj({
              width: 'calc(100% - ' + labelStyle.width + ')',
            });
          }
          // console.log('add control AppRoot.currentPage is ', AppRoot.currentPage);
          TypeFormDesigner.currentPage.appendChild(control);
          TypeFormDesigner.mode.setSelectedControl(control);
        }
      }),
    );
  }
  // render(): TypeMenu {
  //   this.setStyleObj(this.styleObj);
  //   this.setAttrObj(this.attrObj);
  //   return this;
  // }
}
