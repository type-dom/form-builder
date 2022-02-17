import { DivComponent } from '../../../../web-component/div-component/div-component.abstract';
import { BodyLeft } from '../left';
import { ControlWrapper } from './control-wrapper/control-wrapper';

export class LeftContents extends DivComponent {
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
