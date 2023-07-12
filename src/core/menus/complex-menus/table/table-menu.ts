import { Span } from 'type-dom.ts';
import { TdTableSvg } from 'type-dom-svgs';
import { TableControl } from '../../../controls/complex/table/table.class';
import { ControlMenu } from '../../menu.abstract';
import { ComplexMenus } from '../complex-menus';
// import html from './table-menu.html';
export class TableMenu extends ControlMenu {
  className: 'TableMenu';
  childNodes: [TdTableSvg, Span];
  svg: TdTableSvg;
  ControlClass: typeof TableControl;

  constructor(public parent: ComplexMenus) {
    super();
    this.className = 'TableMenu';
    this.ControlClass = TableControl;
    this.addAttrName('table-menu');
    this.svg = new TdTableSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('表格');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
