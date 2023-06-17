import { fromEvent } from 'rxjs';
import { Display } from '../../../../type-node/web-style.enum';
import { UlBase } from '../../../../type-node/type-element/type-html/ul/ul.abstract';
import { ListItem } from '../../../../type-node/web-element/html-element/unordered-list/list-item/list-item.class';
import { WebTextNode } from '../../../../type-node/web-text-node/web-text-node.class';
import { BodyRight } from '../right';

export class BodyRightTabs extends UlBase {
  className: 'BodyRightTabs';

  fieldTab: ListItem;
  controlTab: ListItem;
  formTab: ListItem;
  constructor(public parent: BodyRight) {
    super();
    this.className = 'BodyRightTabs';
    this.propObj = {
      styleObj: {
        display: Display.flex,
        listStyle: 'none',
        margin: '0',
        backgroundColor: '#f0f0f0',
        paddingLeft: '5px',
      },
      attrObj: {
        name: 'body-right-tabs'
      }
    };
    const liStyle = {
      borderTop: '1px solid #d2d2d2',
      borderLeft: '1px solid #d2d2d2',
      borderRight: '1px solid #d2d2d2',
      borderBottom: 'none',
      // backgroundColor: '#ffffff',
    };
    // 字段属性是动态显示的。只有选中表格的单元格才会触发。
    this.fieldTab = new ListItem(this);
    this.fieldTab.addStyleObj(Object.assign({}, liStyle, { display: 'none' }));
    this.fieldTab.childNodes = [new WebTextNode(this.fieldTab, '字段属性')];

    this.controlTab = new ListItem(this);
    // li1.setAttribute('class', 'attribute__menu-active');
    this.controlTab.setStyleObj(Object.assign({}, liStyle, { display: 'none' }));
    this.controlTab.childNodes = [new WebTextNode(this.controlTab, '控件属性')];

    this.formTab = new ListItem(this);
    this.formTab.addStyleObj(Object.assign({}, liStyle, { backgroundColor: '#ffffff' }));
    this.formTab.childNodes = [new WebTextNode(this.formTab, '表单属性')];
    this.childNodes = [this.fieldTab, this.controlTab, this.formTab];
    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe((e) => {
        // console.log('e.target is ', e.target);
        for (const li of this.childNodes) {
          if (li.dom === e.target) { // 选中的tab
            li.setStyle('backgroundColor', '#ffffff');
          } else {
            li.setStyle('backgroundColor', '');
          }
        }
        // todo 如何优化？？？
        //  设置一个selectedTab变量，类似selectedMenu
        if (e.target === this.controlTab.dom) {
          this.parent.contents.controlProperty.setStyle('display', 'block');
          this.parent.contents.formProperty.setStyle('display', 'none');
          this.parent.contents.fieldProperty.setStyle('display', 'none');
        } else if (e.target === this.formTab.dom) {
          this.parent.contents.fieldProperty.setStyle('display', 'none');
          this.parent.contents.controlProperty.setStyle('display', 'none');
          this.parent.contents.formProperty.setStyle('display', 'block');
          this.parent.contents.formProperty.reset();
        } else if (e.target === this.fieldTab.dom) {
          this.parent.contents.fieldProperty.setStyle('display', 'block');
          this.parent.contents.controlProperty.setStyle('display', 'none');
          this.parent.contents.formProperty.setStyle('display', 'none');
        } else {
          this.parent.contents.fieldProperty.setStyle('display', 'none');
          this.parent.contents.controlProperty.setStyle('display', 'none');
          this.parent.contents.formProperty.setStyle('display', 'none');
        }
      })
    );
  }
}
