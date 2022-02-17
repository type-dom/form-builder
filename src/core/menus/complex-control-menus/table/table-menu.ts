import { TableSvg } from '../../../../components/svgs/table/table';
import { Span } from '../../../../web-element/span/span.class';
import { TableControl } from '../../../controls/complex/table/table.class';
import { ControlMenu } from '../../control-menu.abstract';
import { ComplexControlMenus } from '../complex-control-menus';
// import html from './table-menu.html';
export class TableMenu extends ControlMenu {
  className: 'TableMenu';
  childNodes: [TableSvg, Span];
  svg: TableSvg;
  ControlClass: typeof TableControl;

  constructor(public parent: ComplexControlMenus) {
    super();
    this.className = 'TableMenu';
    this.ControlClass = TableControl;
    this.addAttrName('table-menu');
    this.svg = new TableSvg(this);
    this.svg.reset(24, 24);
    this.textNode.setText('表格');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
