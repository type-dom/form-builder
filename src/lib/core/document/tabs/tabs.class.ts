import { fromEvent } from 'rxjs';
import {
  TypeUL,
  IStyle,
  StyleDisplay,
  ListItem,
  TextNode,
  ITextNode,
} from '@type-dom/framework';
import { WebDocument } from '../web-document.class';
import { IWebDocumentTabs } from './tabs.interface';

export class WebDocumentTabs extends TypeUL {
  className: 'WebDocumentTabs';
  liStyle: Partial<IStyle>;

  constructor(public parent: WebDocument) {
    super();
    this.className = 'WebDocumentTabs';
    console.log('this.formBuilder.mode.width is ', this.formBuilder.mode.width);
    const width = this.formBuilder.mode.width;
    this.propObj = {
      styleObj: {
        display: StyleDisplay.none, // 默认隐藏
        listStyle: 'none',
        backgroundColor: '#f0f0f0',
        padding: '0 5px',
        marginTop: '-35px',
        width: width,
      },
      attrObj: {
        name: 'document-tabs',
      },
    };
    this.liStyle = {
      // display: 'inline',
      borderTop: '1px solid #d2d2d2',
      borderLeft: '1px solid #d2d2d2',
      borderRight: '1px solid #d2d2d2',
      borderBottom: 'none',
      // backgroundColor: '#ffffff',
      //
      // height: '38px',
      width: '150px',
      overflowWrap: 'break-word',
      overflow: 'hidden',
      // backgroundColor: '#f6f5ec', // rgb(243, 249, 255)
      // borderRadius: borderRadius,
      // border: '1px solid rgb(220, 223, 230)',
      fontSize: '14px',
      textAlign: 'center',
      paddingTop: '10px',
      // zIndex: 900,
      // position: 'absolute',
      // left: leftMargin,
    };
    this.setTabs(1); // 默认生成一个
  }

  get formBuilder() {
    return this.parent.formBuilder;
  }

  setTabs(num: number): void {
    // this.clearChildNodes();
    // this.clearChildDom();
    // 删除多余的子节点和其dom。
    if (num < this.length) {
      this.childNodes.forEach((liObj, index) => {
        if (index > num - 1) {
          liObj.dom.remove();
        }
      });
      this.childNodes.length = num;
    }
    // 设置对应的页面内容。
    this.parent.contents.setPages(num);
    if (num > 1) {
      // 多页面
      console.log('this.parent.contents.setPages . ');
      this.setStyleObj({
        display: StyleDisplay.flex, // 只有一个页面时tabs组件是隐藏的
        flexDirection: 'row',
        // display: 'block',
      }); // 多页面时显示
      for (let i = 0; i < num; i++) {
        if (!this.childNodes[i]) {
          // 如果不存在，创建子节点
          const liObj = new ListItem({ parent: this });
          const text = new TextNode('tab标签');
          if (i === 0) {
            text.setText('首页');
          } else {
            text.setText('第' + (i + 1) + '页');
          }
          liObj.addStyleObj(Object.assign({}, this.liStyle));
          liObj.appendChild(text);
          this.appendChild(liObj);
        }
        if (i === num - 1) {
          // 默认显示最后一页
          this.childNodes[i].setStyleObj({ backgroundColor: '#ffffff' });
          this.parent.contents.childNodes[i].show();
          this.parent.contents.currentPage = this.parent.contents.childNodes[i];
        } else {
          this.childNodes[i].setStyleObj({ backgroundColor: '#f0f0f0' });
          this.parent.contents.childNodes[i].hide();
        }
      }
    } else {
      // 单页面
      //  todo
      if (!this.childNodes[0]) {
        console.log('tabs没有子节点。');
        const liObj = new ListItem({ parent: this });
        liObj.addStyleObj(Object.assign({}, this.liStyle));
        const text = new TextNode('首页');
        liObj.addChild(text);
        this.appendChild(liObj);
      } else {
        // 原来有多页时
        this.childNodes[0].addStyleObj({
          backgroundColor: '#ffffff',
        }); // 首页选中， 整体隐藏。
        this.parent.contents.childNodes[0].show();
        this.parent.contents.currentPage = this.parent.contents.childNodes[0];
      }
      // 只有一个页面时 tabs 隐藏
      this.hide();
    }
  }

  createInstance(literal: IWebDocumentTabs): void {
    console.log('web document tabs createInstance . ');
    //  todo
    this.resetPropObj(literal.propObj);
    const width = this.formBuilder.mode.width;
    this.setStyleObj({
      // display: 'block',
      padding: '0 5px',
      marginTop: '-35px',
      width: width,
    });
    this.childNodes.forEach((liObj, index) => {
      // 子对象长度超出字面量的子集的长度，要去除子对象和子对象的dom。
      if (index > literal.childNodes.length - 1) {
        this.childNodes[index].dom.remove();
      }
    });
    const diff = this.length - literal.childNodes.length;
    if (diff > 0) {
      this.childNodes.splice(-diff, diff);
    }

    literal.childNodes.forEach((liJson, index) => {
      // 判断对应的子对象是否存在，
      if (this.childNodes[index]) {
        if (index < literal.childNodes.length) {
          (this.childNodes[index].childNodes[0] as TextNode).setText(
            (liJson.childNodes[0] as ITextNode).nodeValue
          );
        }
      } else {
        // 如果不存在，
        // 要创建子节点
        const liObj = new ListItem({ parent: this });
        liObj.addStyleObj(Object.assign({}, this.liStyle));
        const text = (liJson.childNodes[0] as ITextNode).nodeValue;
        const textNode = new TextNode(text);
        liObj.addChild(textNode);
        this.appendChild(liObj);
      }
    });
    // todo 加载后默认tab
    this.childNodes[this.length - 1].setStyleObj({
      backgroundColor: '#ffffff',
    });
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe((e) => {
        console.log('web document tabs click . ');
        console.log('e.target is ', e.target);
        for (const li of this.childNodes) {
          li.setAttrObj({
            constenteditable: false,
          });
          if (li.dom === e.target) {
            // 选中的tab
            li.setStyle('backgroundColor', '#ffffff');
            this.parent.contents.childNodes.forEach((page, index) => {
              console.log('index is ', index);
              if (index === li.index) {
                page.show();
                this.parent.contents.currentPage = page;
                console.log(
                  'this.formBuilder.currentPage is ',
                  this.formBuilder.currentPage
                );
              } else {
                page.hide();
              }
            });
          } else {
            li.setStyle('backgroundColor', '');
          }
        }
      }),
      // 双击时，tab部分可编辑
      fromEvent(this.dom, 'dblclick').subscribe((e) => {
        console.log('web document tabs double click . ');
        this.formBuilder.mode.onTabsDblClick(e, this);
      }),
      fromEvent(this.dom, 'input').subscribe((e) => {
        this.formBuilder.mode.onTabsInput(e, this);
      }),
      fromEvent(this.dom, 'blur').subscribe(() => {
        this.setAttrObj({
          contenteditable: false,
        });
      })
    );
  }
}
