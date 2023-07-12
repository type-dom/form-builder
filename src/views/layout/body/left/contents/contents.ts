import { TypeDiv } from 'type-dom.ts';
import { BodyLeft } from '../left';
import { ControlWrapper } from './control-wrapper/control-wrapper';

export class LeftContents extends TypeDiv {
  className: 'LeftContents';
  childNodes: [ControlWrapper];
  controlMenus: ControlWrapper;
  constructor(public parent: BodyLeft) {
    super();
    this.className = 'LeftContents';
    this.addAttrName('left-contents');
    this.controlMenus = new ControlWrapper(this);
    this.childNodes = [this.controlMenus];
  }
}
