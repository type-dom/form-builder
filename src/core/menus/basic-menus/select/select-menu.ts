import { Span } from 'type-dom.ts';
import { TdSelectSvg } from 'type-dom-svgs';
import { SelectControl } from '../../../controls/basic/select/select.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';
// import html from './select-menu.html';
export class SelectMenu extends ControlMenu {
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
}
