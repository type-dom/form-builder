import { TdTimeSvg } from 'type-dom-svgs';
import { Span } from 'type-dom.ts';
import { TimeControl } from '../../../controls/basic/time/time.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';
export class TimeMenu extends ControlMenu {
  className: 'TimeMenu';
  childNodes: [TdTimeSvg, Span];
  svg: TdTimeSvg;
  ControlClass: typeof TimeControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'TimeMenu';
    this.ControlClass = TimeControl;
    this.addAttrName('time-menu');
    this.svg = new TdTimeSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('时间');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
