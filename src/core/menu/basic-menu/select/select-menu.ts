import { Span } from 'type-dom.ts';
import { TdSelectSvg } from 'type-dom-svgs';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import {TableDataCell} from "../../../../components/form/form-item/table-item/table/data-cell/data-cell.class";
import {WebPage} from "../../../page/web-page.class";
import { SelectControl } from '../../../control/basic/select/select.class';
import { TypeMenu } from '../../menu.abstract';
// import html from './select-menu.html';
export class SelectMenu extends TypeMenu {
  className: 'SelectMenu';
  childNodes: [TdSelectSvg, Span];
  svg: TdSelectSvg;
  ControlClass: typeof SelectControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'SelectMenu';
    this.ControlClass = SelectControl;
    this.addAttrName('select-menu');
    this.svg = new TdSelectSvg(this);
    this.textNode.setText('下拉选择');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
  createControl(parent: WebPage | TableDataCell): SelectControl {
    return new SelectControl(parent);
  }
}
