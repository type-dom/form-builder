import { Span } from 'type-dom.ts';
import { TdMultilineInputSvg } from 'type-dom-svgs';
import {TableDataCell} from "../../../../components/form/form-item/table-item/table/data-cell/data-cell.class";
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import { MultilineInputControl } from '../../../control/basic/multiline-input/multiline-input.class';
import {WebPage} from "../../../page/web-page.class";
import { TypeMenu } from '../../menu.abstract';
// import html from './multiline-input-menu.html';
export class MultilineInputMenu extends TypeMenu {
  className: 'MultilineInputMenu';
  childNodes: [TdMultilineInputSvg, Span];
  svg: TdMultilineInputSvg;
  ControlClass: typeof MultilineInputControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'MultilineInputMenu';
    this.ControlClass = MultilineInputControl;
    this.addAttrName('multiline-input-menu');
    this.svg = new TdMultilineInputSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('多行输入');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
  createControl(parent: WebPage | TableDataCell): MultilineInputControl {
    return new MultilineInputControl(parent);
  }
}
