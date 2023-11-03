import { CollapsibleBox } from 'type-dom-ui';
import { MenusWrapper } from '../menus-wrapper';
import { BasicMenus } from './basic-menus';
export class BasicMenusWrapper extends CollapsibleBox {
  className: 'BasicMenusWrapper';
  // childNodes: [ExpandHeading, BasicMenus];
  // basicTypeMenus = new BasicMenus(this);
  constructor(public parent: MenusWrapper) {
    super();
    this.className = 'BasicMenusWrapper';
    // this.addStyleObj({
    //   border: '1px solid #dddddd',
    //   borderRadius: '4px',
    //   listStyle: 'none',
    //   // padding-left: 0,
    //   padding: '6px',
    //   marginBottom: '5px',
    // });
    this.addAttrName('basic-menus-wrapper');
    this.heading.setTitle('基础控件');
    this.contents = new BasicMenus(this);
  }
}
