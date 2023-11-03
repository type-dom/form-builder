import { Span } from 'type-dom.ts';
import { TdNumericalSvg } from 'type-dom-svgs';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import { TableDataCell } from '../../../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { WebPage } from '../../../page/web-page.class';
import { NumericalControl } from '../../../control/basic/numerical/numerical.class';
import { TypeMenu } from '../../menu.abstract';
export class NumericalMenu extends TypeMenu {
  className: 'NumericalMenu';
  childNodes: [TdNumericalSvg, Span];
  svg: TdNumericalSvg;
  ControlClass: typeof NumericalControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'NumericalMenu';
    this.ControlClass = NumericalControl;
    this.addAttrName('numerical-menu');
    this.svg = new TdNumericalSvg(this);
    this.textNode.setText('数值');
    this.childNodes = [this.svg, this.titleSpan];
  }
  createControl(parent: WebPage | TableDataCell): NumericalControl {
    return new NumericalControl(parent);
  }
}
