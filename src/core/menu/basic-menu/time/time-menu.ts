import { TdTimeSvg } from 'type-dom-svgs';
import { Span } from 'type-dom.ts';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import { TableDataCell } from '../../../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { WebPage } from '../../../page/web-page.class';
import { TimeControl } from '../../../control/basic/time/time.class';
import { TypeMenu } from '../../menu.abstract';
export class TimeMenu extends TypeMenu {
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
  createControl(parent: WebPage | TableDataCell): TimeControl {
    return new TimeControl(parent);
  }
}
