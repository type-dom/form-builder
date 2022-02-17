import { SelectSvg } from '../../../../components/svgs/select/select';
import { Span } from '../../../../web-element/span/span.class';
import { SelectControl } from '../../../controls/basic/select/select.class';
import { ControlMenu } from '../../control-menu.abstract';
import { BasicControlMenus } from '../basic-control-menus';
// import html from './select-menu.html';
export class SelectMenu extends ControlMenu {
  className: 'SelectMenu';
  childNodes: [SelectSvg, Span];
  svg: SelectSvg;
  ControlClass: typeof SelectControl;

  constructor(public parent: BasicControlMenus) {
    super();
    this.className = 'SelectMenu';
    this.ControlClass = SelectControl;
    this.addAttrName('select-menu');
    this.svg = new SelectSvg(this);
    this.textNode.setText('下拉选择');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
