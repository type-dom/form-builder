import { Span } from 'type-dom.ts';
import { TdNumericalSvg } from 'type-dom-svgs';
import { NumericalControl } from '../../../controls/basic/numerical/numerical.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';
export class NumericalMenu extends ControlMenu {
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
    this.initEvents();
  }
}
