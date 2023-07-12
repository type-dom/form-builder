import { Span } from 'type-dom.ts';
import { TdConnectionSvg } from 'type-dom-svgs';
import { ConnectionControl } from '../../../controls/complex/connection/connection.class';
import { ControlMenu } from '../../menu.abstract';
import { ComplexMenus } from '../complex-menus';

// import html from './table-menu.html';
export class ConnectionMenu extends ControlMenu {
  className: 'ConnectionMenu';
  childNodes: [TdConnectionSvg, Span];
  svg: TdConnectionSvg;
  ControlClass: typeof ConnectionControl;

  constructor(public parent: ComplexMenus) {
    super();
    this.className = 'ConnectionMenu';
    this.ControlClass = ConnectionControl;
    this.addAttrName('connection-menu');
    this.svg = new TdConnectionSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('关联选项');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
