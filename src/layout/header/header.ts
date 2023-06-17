import { Display } from '../../type-node/web-style.enum';
import { HtmlElement } from '../../type-node/type-element/html-element/html-element.abstract';
import { LayoutWrapper } from '../layout.class';
import { Navbar } from './navbar/navbar';
// import { Logo } from './logo/logo';

export class HeaderWrapper extends HtmlElement {
  tagName: 'header';
  className: 'HeaderWrapper';
  childNodes: [Navbar]
  dom: HTMLElement;
  constructor(public parent: LayoutWrapper) {
    super();
    this.tagName = 'header';
    this.dom = document.createElement(this.tagName);
    this.className = 'HeaderWrapper';
    this.propObj = {
      styleObj: {
        height: '60px',
        display: Display.flex,
        justifyContent: 'flex-start',
        // paddingLeft: '10px',
      },
      attrObj: {
        name: 'layout-header'
      }
    };
    // const logo = new Logo(this);
    const navbar = new Navbar(this);
    this.childNodes = [navbar];
  }
}
