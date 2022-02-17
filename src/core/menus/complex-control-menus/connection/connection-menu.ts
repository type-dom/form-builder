import { Span } from '../../../../web-element/span/span.class';
import { ConnectionSvg } from '../../../../components/svgs/connetion/connection';
import { ConnectionControl } from '../../../controls/complex/connection/connection.class';
import { ControlMenu } from '../../control-menu.abstract';
import { ComplexControlMenus } from '../complex-control-menus';
// import html from './table-menu.html';
export class ConnectionMenu extends ControlMenu {
  className: 'ConnectionMenu';
  childNodes: [ConnectionSvg, Span];
  svg: ConnectionSvg;
  ControlClass: typeof ConnectionControl;

  constructor(public parent: ComplexControlMenus) {
    super();
    this.className = 'ConnectionMenu';
    this.ControlClass = ConnectionControl;
    this.addAttrName('connection-menu');
    this.svg = new ConnectionSvg(this);
    this.svg.reset(24, 24);
    this.textNode.setText('关联选项');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
