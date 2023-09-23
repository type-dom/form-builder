import { TypeDiv, Display } from 'type-dom.ts';
import { LeftContents } from '../contents';
import { BasicMenusWrapper } from './basic-menus-wrapper/basic-menus-wrapper';
import { ComplexMenusWrapper } from './complex-menus-wrapper/complex-menus-wrapper';
export class MenusWrapper extends TypeDiv {
  className: 'MenusWrapper';
  childNodes: [BasicMenusWrapper, ComplexMenusWrapper];
  formControlWrapper: BasicMenusWrapper;
  staticControlWrapper: ComplexMenusWrapper;
  constructor(public parent: LeftContents) {
    super();
    this.className = 'MenusWrapper';
    this.addStyleObj({
      display: Display.flex,
      flexDirection: 'column',
      // padding: '10px',
    });
    this.addAttrName('menus-wrapper');
    this.formControlWrapper = new BasicMenusWrapper(this);
    this.staticControlWrapper = new ComplexMenusWrapper(this);
    this.childNodes = [this.formControlWrapper, this.staticControlWrapper];
  }
}
