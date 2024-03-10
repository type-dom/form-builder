import { Span } from '@type-dom/framework';
import { TdDateSvg } from '@type-dom/svgs';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import { TableDataCell } from '../../../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { WebPage } from '../../../page/web-page.class';
import { DateControl } from '../../../control/basic/date/date.class';
import { TypeMenu } from '../../menu.abstract';

// import html from './date-menu.html';

export class DateMenu extends TypeMenu {
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
  }

  createControl(parent: WebPage | TableDataCell): DateControl {
    return new DateControl(parent);
  }
}
