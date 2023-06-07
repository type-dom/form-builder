import { HtmlElement } from '../../web-element/web-abstract/html-element/html-element.abstract';
import { Display } from '../../web-element/web-style.enum';
import { LayoutWrapper } from '../layout.class';
import { BodyLeft } from './left/left';
import { BodyRight } from './right/right';
import { BodyMainContent } from './main-content/main-content';

export class BodyWrapper extends HtmlElement {
  tagName: 'section';
  dom: HTMLElement;
  className: 'BodyWrapper';
  childNodes: [BodyLeft, BodyMainContent, BodyRight];
  left: BodyLeft;
  content: BodyMainContent;
  right: BodyRight;
  constructor(public parent: LayoutWrapper) {
    super();
    this.tagName = 'section';
    this.dom = document.createElement(this.tagName);
    this.className = 'BodyWrapper';
    console.log('this.editor.el.clientHeight is ', this.editor.el.clientHeight);
    this.propObj = {
      styleObj: {
        display: Display.flex,
        height: 'calc(' + this.editor.el.clientHeight + 'px - 60px)',
        justifyContent: 'space-between'
      },
      attrObj: {
        name: 'body-wrapper'
      }
    };
    // 可以传参给子节点。
    this.left = new BodyLeft(this);
    this.content = new BodyMainContent(this);
    this.right = new BodyRight(this);
    this.childNodes = [this.left, this.content, this.right];
  }
}
