import { Display } from '../../../../type-node/web-style.enum';
import { TypeHtml } from '../../../../type-node/type-element/type-html/type-html.abstract';
import { LayoutWrapper } from '../layout';
import { Navbar } from './navbar/navbar';
// import { Logo } from './logo/logo';

export class HeaderWrapper extends TypeHtml {
  nodeName: 'header';
  className: 'HeaderWrapper';
  childNodes: [Navbar]
  dom: HTMLElement;
  constructor(public parent: LayoutWrapper) {
    super('header');
    this.nodeName = 'header';
    this.dom = document.createElement(this.nodeName);
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
