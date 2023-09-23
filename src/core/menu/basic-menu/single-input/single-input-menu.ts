import { Span } from 'type-dom.ts/dist';
import { TdSingleInputSvg } from 'type-dom-svgs/dist';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import {TableDataCell} from "../../../../components/form/form-item/table-item/table/data-cell/data-cell.class";
import {WebPage} from "../../../page/web-page.class";
import { SingleInputControl } from '../../../control/basic/single-input/single-input.class';
import { TypeMenu } from '../../menu.abstract';
// import html from './single-input-menu.html';
export class SingleInputMenu extends TypeMenu {
  className: 'SingleInputMenu';
  childNodes: [TdSingleInputSvg, Span];
  svg: TdSingleInputSvg;
  ControlClass: typeof SingleInputControl;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'SingleInputMenu';
    this.ControlClass = SingleInputControl;
    this.addAttrName('single-input-menu');
    this.svg = new TdSingleInputSvg(this);
    this.textNode.setText('单行输入');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
  createControl(parent: WebPage | TableDataCell): SingleInputControl {
    return new SingleInputControl(parent);
  }
}
