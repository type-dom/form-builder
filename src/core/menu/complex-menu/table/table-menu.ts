import { Span } from 'type-dom.ts';
import { TdTable2Svg } from 'type-dom-svgs';
import { ComplexMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/complex-menus-wrapper/complex-menus';
import { TableControl } from '../../../control/complex/table/table.class';
import { WebPage } from '../../../page/web-page.class';
import { TypeMenu } from '../../menu.abstract';
// import html from './table-menu.html';
export class TableMenu extends TypeMenu {
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
  createControl(parent: WebPage): TableControl {
    return new TableControl(parent);
  }
}
