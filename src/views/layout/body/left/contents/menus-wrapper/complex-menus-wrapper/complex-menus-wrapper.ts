import { CollapsibleBox } from 'type-dom-ui';
import { MenusWrapper } from '../menus-wrapper';
import { ComplexMenus } from './complex-menus';
export class ComplexMenusWrapper extends CollapsibleBox {
  className: 'ComplexMenusWrapper';
  constructor(public parent: MenusWrapper) {
    super();
    this.className = 'ComplexMenusWrapper';
    // this.addStyleObj({
    //   border: '1px solid #dddddd',
    //   borderRadius: '4px',
    //   listStyle: 'none',
    //   // padding-left: 0;
    //   padding: '6px',
    //   marginBottom: '5px'
    // });
    this.addAttrName('complex-menus-wrapper');

    this.heading.setTitle('高级控件');
    this.contents = new ComplexMenus(this);
  }

}
