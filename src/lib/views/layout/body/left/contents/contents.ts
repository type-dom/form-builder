import { TypeDiv } from '@type-dom/framework';
import { BodyLeft } from '../left';
import { MenusWrapper } from './menus-wrapper/menus-wrapper';

export class LeftContents extends TypeDiv {
  className: 'LeftContents';
  childNodes: [MenusWrapper];
  TypeMenus: MenusWrapper;

  constructor(public parent: BodyLeft) {
    super();
    this.className = 'LeftContents';
    this.addAttrName('left-contents');
    this.TypeMenus = new MenusWrapper(this);
    this.childNodes = [this.TypeMenus];
  }

  get formBuilder() {
    return this.parent.formBuilder;
  }
}
