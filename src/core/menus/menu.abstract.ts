import { fromEvent } from 'rxjs';
import { TypeDiv } from '../../../type-node/type-element/type-html/div/div.abstract';
import { TypeSvgSvg } from '../../../type-node/type-element/type-svg/svg/svg.abstract';
import { Span } from '../../../type-node/web-element/html-element/span/span.class';
import { WebTextNode } from '../../../type-node/web-text-node/web-text-node.class';
import { ControlClass } from '../controls/web-control.interface';
import { TableControl } from '../controls/complex/table/table.class';
import { labelStyle } from '../controls/web-control.const';
import { menuStyle } from './menu.const';
import { IControlMenu } from './menu.interface';

export abstract class ControlMenu extends TypeDiv implements IControlMenu {
  abstract ControlClass: ControlClass;
  abstract childNodes: [TypeSvgSvg, Span];
  abstract svg: TypeSvgSvg;
  readonly titleSpan: Span;
  textNode: WebTextNode;
  protected constructor() {
    super();
    this.addStyleObj(Object.assign({}, menuStyle));
    this.titleSpan = new Span(this);
    this.textNode = new WebTextNode(this.titleSpan);
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
        if (this.editor.selectedMenu !== this) {
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
        this.editor.setSelectedMenu(this);
        console.log('this.editor.selectedMenu is ', this.editor.selectedMenu);
        // console.log('control is ', control);
        // console.log('this.editor.selectedTableDataCell is ', this.editor.selectedTableDataCell);
        // console.log('this.ControlClass.name is ', this.ControlClass.name);
        // console.log('TableControl.name is ', TableControl.name);
        // 判断是否选中表格的单元格
        if (this.editor.selectedTableDataCell && this.ControlClass !== TableControl) { // 修改表格单元格的控件。
          this.editor.selectedTableDataCell.setControl(this.ControlClass as Exclude<ControlClass, typeof TableControl>);
          // todo 修改单元格中的控件时， 要触发 字段属性 reset
          this.editor.fieldProperty.reset();
          this.editor.selectedTableDataCell.render();
        } else { // 添加到页面中
          // 创建控件
          const control = new this.ControlClass(this.editor.currentPage); // todo currentPage

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
          // console.log('add control this.editor.currentPage is ', this.editor.currentPage);
          this.editor.currentPage.appendChild(control);
          this.editor.setSelectedControl(control);
        }
      }),
    );
  }
  // render(): ControlMenu {
  //   this.setStyleObj(this.styleObj);
  //   this.setAttrObj(this.attrObj);
  //   return this;
  // }
}
