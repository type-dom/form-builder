import { TypeDiv } from '../../../../../../type-node/type-element/type-html/div/div.abstract';
import { BodyLeft } from '../left';
import { ControlWrapper } from './control-wrapper/control-wrapper';

export class LeftContents extends TypeDiv {
  className: 'LeftContents';
  childNodes: [ControlWrapper];
  controlMenus: ControlWrapper;
  constructor(public parent: BodyLeft) {
    super();
    this.className = 'LeftContents';
    this.propObj = {
      styleObj: {},
      attrObj: {
        name: 'left-contents'
      }
    };
    this.controlMenus = new ControlWrapper(this);
    this.childNodes = [this.controlMenus];
  }
}