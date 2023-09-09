import { Span } from 'type-dom.ts';
import { TdDateSvg } from 'type-dom-svgs';
import { DateControl } from '../../../controls/basic/date/date.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';
// import html from './date-menu.html';

export class DateMenu extends ControlMenu {
  className: 'DateMenu';
  childNodes: [TdDateSvg, Span];
  svg: TdDateSvg;
  ControlClass: typeof DateControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'DateMenu';
    this.ControlClass = DateControl;
    this.addAttrName('date-menu');
    this.svg = new TdDateSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('日期');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
