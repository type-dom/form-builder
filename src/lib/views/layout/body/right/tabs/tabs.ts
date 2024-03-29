import { fromEvent } from 'rxjs';
import { StyleDisplay, ListItem, TextNode, TypeUL } from '@type-dom/framework';
import { BodyRight } from '../right';

export class BodyRightTabs extends TypeUL {
  className: 'BodyRightTabs';
  fieldTab: ListItem;
  controlTab: ListItem;
  formTab: ListItem;

  constructor(public parent: BodyRight) {
    super();
    this.className = 'BodyRightTabs';
    this.addStyleObj({
      display: StyleDisplay.flex,
      listStyle: 'none',
      margin: '0',
      backgroundColor: '#f0f0f0',
      paddingLeft: '5px',
    });
    this.addAttrName('body-right-tabs');
    const liStyle = {
      borderTop: '1px solid #d2d2d2',
      borderLeft: '1px solid #d2d2d2',
      borderRight: '1px solid #d2d2d2',
      borderBottom: 'none',
      // backgroundColor: '#ffffff',
    };
    // 字段属性是动态显示的。只有选中表格的单元格才会触发。
    this.fieldTab = new ListItem({ parent: this });
    this.fieldTab.addStyleObj(Object.assign({}, liStyle, { display: 'none' }));
    this.fieldTab.childNodes = [new TextNode('字段属性')];

    this.controlTab = new ListItem({ parent: this });
    // li1.setAttribute('class', 'attribute__menu-active');
    this.controlTab.setStyleObj(
      Object.assign({}, liStyle, { display: 'none' })
    );
    this.controlTab.childNodes = [new TextNode('控件属性')];

    this.formTab = new ListItem({ parent: this });
    this.formTab.addStyleObj(
      Object.assign({}, liStyle, { backgroundColor: '#ffffff' })
    );
    this.formTab.childNodes = [new TextNode('表单属性')];
    this.childNodes = [this.fieldTab, this.controlTab, this.formTab];
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe((e) => {
        // console.log('e.target is ', e.target);
        for (const li of this.childNodes) {
          if (li.dom === e.target) {
            // 选中的tab
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
