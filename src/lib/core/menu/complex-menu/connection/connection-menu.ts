import { Span } from '@type-dom/framework';
import { TdConnectionSvg } from '@type-dom/svgs';
import { ComplexMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/complex-menus-wrapper/complex-menus';
import { TableDataCell } from '../../../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { ConnectionControl } from '../../../control/complex/connection/connection.class';
import { WebPage } from '../../../page/web-page.class';
import { TypeMenu } from '../../menu.abstract';

// import html from './table-menu.html';
export class ConnectionMenu extends TypeMenu {
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
  }

  createControl(parent: WebPage | TableDataCell): ConnectionControl {
    return new ConnectionControl(parent);
  }
}
