import { Span } from 'type-dom.ts';
import { TdRadioButtonSvg } from 'type-dom-svgs';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import {TableDataCell} from "../../../../components/form/form-item/table-item/table/data-cell/data-cell.class";
import {WebPage} from "../../../page/web-page.class";
import { RadioControl } from '../../../control/basic/radio/radio.class';
import { TypeMenu } from '../../menu.abstract';
export class RadioMenu extends TypeMenu {
  className: string;
  childNodes: [TdRadioButtonSvg, Span];
  svg: TdRadioButtonSvg;
  ControlClass: typeof RadioControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'RadioMenu';
    this.ControlClass = RadioControl;
    this.addAttrName('radio-menu');
    this.svg = new TdRadioButtonSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('单选');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
  createControl(parent: WebPage | TableDataCell): RadioControl {
    return new RadioControl(parent);
  }
}
