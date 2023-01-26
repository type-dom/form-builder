import { TimeSvg } from '../../../../components/svgs/time/time';
import { Span } from '../../../../web-element/web-html/span/span.class';
import { TimeControl } from '../../../controls/basic/time/time.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';

export class TimeMenu extends ControlMenu {
  className: 'TimeMenu';
  childNodes: [TimeSvg, Span];
  svg: TimeSvg;
  ControlClass: typeof TimeControl;

  constructor(public parent: BasicMenus) {
    super();
    this.className = 'TimeMenu';
    this.ControlClass = TimeControl;
    this.addAttrName('time-menu');
    this.svg = new TimeSvg(this);
    this.svg.reset(24, 24);
    this.textNode.setText('时间');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
