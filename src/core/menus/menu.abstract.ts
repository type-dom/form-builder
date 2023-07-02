import { fromEvent } from 'rxjs';
import { TypeDiv } from '../../../type-dom/type-element/type-html/div/div.abstract';
import { TypeSvgSvg } from '../../../type-dom/type-element/type-svg/svg/svg.abstract';
import { Span } from '../../../type-dom/element/html-element/span/span.class';
import { TextNode } from '../../../type-dom/text-node/text-node.class';
import { ControlClass } from '../controls/web-control.interface';
import { TableControl } from '../controls/complex/table/table.class';
import { labelStyle } from '../controls/web-control.const';
import { menuStyle } from './menu.const';
import { IControlMenu } from './menu.interface';
import { AppRoot } from '../../app-root';

export abstract class ControlMenu extends TypeDiv implements IControlMenu {
  abstract ControlClass: ControlClass;
  abstract childNodes: [TypeSvgSvg, Span];
  abstract svg: TypeSvgSvg;
  readonly titleSpan: Span;
  textNode: TextNode;
  protected constructor() {
    super();
    this.addStyleObj(Object.assign({}, menuStyle));
    this.titleSpan = new Span(this);
    this.textNode = new TextNode(this.titleSpan);
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
        if (this.appRoot.selectedMenu !== this) {
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
        this.appRoot.setSelectedMenu(this);
        console.log('this.appRoot.selectedMenu is ', this.appRoot.selectedMenu);
        // console.log('control is ', control);
        // console.log('AppRoot.selectedTableDataCell is ', AppRoot.selectedTableDataCell);
        // console.log('this.ControlClass.name is ', this.ControlClass.name);
        // console.log('TableControl.name is ', TableControl.name);
        // 判断是否选中表格的单元格
        if (AppRoot.selectedTableDataCell && this.ControlClass !== TableControl) { // 修改表格单元格的控件。
          AppRoot.selectedTableDataCell.setControl(this.ControlClass as Exclude<ControlClass, typeof TableControl>);
          // todo 修改单元格中的控件时， 要触发 字段属性 reset
          this.appRoot.fieldProperty.reset();
          AppRoot.selectedTableDataCell.render();
        } else { // 添加到页面中
          // 创建控件
          const control = new this.ControlClass(this.appRoot.currentPage); // todo currentPage

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
          // console.log('add control this.appRoot.currentPage is ', this.appRoot.currentPage);
          this.appRoot.currentPage.appendChild(control);
          this.appRoot.setSelectedControl(control);
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
