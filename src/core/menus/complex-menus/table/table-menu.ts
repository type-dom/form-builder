import { Span } from 'type-dom.ts';
import { TdTable2Svg } from 'type-dom-svgs';
import { TableControl } from '../../../controls/complex/table/table.class';
import { ControlMenu } from '../../menu.abstract';
import { ComplexMenus } from '../complex-menus';
// import html from './table-menu.html';
export class TableMenu extends ControlMenu {
  className: 'TableMenu';
  childNodes: [TdTable2Svg, Span];
  svg: TdTable2Svg;
  ControlClass: typeof TableControl;

  constructor(public parent: ComplexMenus) {
    super();
    this.className = 'TableMenu';
    this.ControlClass = TableControl;
    this.addAttrName('table-menu');
    this.svg = new TdTable2Svg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('表格');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
