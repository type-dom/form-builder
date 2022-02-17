import { Display } from '../../web-element/web-style.enum';
import { WebComponent } from '../../web-component/web-component.abstract';
import { WebLayout } from '../layout.class';
import { Navbar } from './navbar/navbar';
import { Logo } from './logo/logo';

export class WebHeader extends WebComponent {
  tagName: 'header';
  className: 'WebHeader';
  childNodes: [Logo, Navbar]
  dom: HTMLElement;
  constructor(public parent: WebLayout) {
    super();
    this.tagName = 'header';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebHeader';
    this.propObj = {
      styleObj: {
        height: '60px',
        display: Display.flex,
        justifyContent: 'flex-start',
        paddingLeft: '10px',
      },
      attrObj: {
        name: 'layout-header'
      }
    };
    const logo = new Logo(this);
    const navbar = new Navbar(this);
    this.childNodes = [logo, navbar];
  }
}
