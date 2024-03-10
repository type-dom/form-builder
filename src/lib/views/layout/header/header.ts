import { StyleDisplay, TypeHeader } from '@type-dom/framework';
import { LayoutWrapper } from '../layout';
import { Navbar } from './navbar/navbar';
import { FormBuilder } from '../../../form-builder';

// import { Logo } from './logo/logo';
export class HeaderWrapper extends TypeHeader {
  className: 'HeaderWrapper';
  childNodes: [Navbar];

  constructor(public parent: LayoutWrapper) {
    super();
    this.className = 'HeaderWrapper';
    this.addStyleObj({
      height: '60px',
      display: StyleDisplay.flex,
      justifyContent: 'flex-start',
      // paddingLeft: '10px',
    });
    this.addAttrName('layout-header');
    // const logo = new Logo(this);
    const navbar = new Navbar(this);
    this.childNodes = [navbar];
  }

  get formBuilder(): FormBuilder {
    return this.parent.formBuilder;
  }
}
