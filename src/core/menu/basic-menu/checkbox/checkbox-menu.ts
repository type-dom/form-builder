import { Span } from 'type-dom.ts';
import { TdCheckboxSvg } from 'type-dom-svgs';
import { CheckboxControl } from '../../../control/basic/checkbox/checkbox.class';
import { TypeMenu } from '../../menu.abstract';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import { TableDataCell } from '../../../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { WebPage } from '../../../page/web-page.class';
export class CheckboxMenu extends TypeMenu {
  className: 'CheckboxMenu';
  childNodes: [TdCheckboxSvg, Span];
  svg: TdCheckboxSvg;
  ControlClass: typeof CheckboxControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'CheckboxMenu';
    this.ControlClass = CheckboxControl;
    this.addAttrName('checkbox-menu');
    this.svg = new TdCheckboxSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('复选');
    this.childNodes = [this.svg, this.titleSpan];
  }
  createControl(parent: WebPage | TableDataCell): CheckboxControl {
    return new CheckboxControl(parent);
  }
}
