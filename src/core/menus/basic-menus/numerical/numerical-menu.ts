import { NumericalSvg } from '../../../../components/svgs/numerical/numerical';
import { Span } from '../../../../web-element/web-html/span/span.class';
import { NumericalControl } from '../../../controls/basic/numerical/numerical.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';

export class NumericalMenu extends ControlMenu {
  className: 'NumericalMenu';
  childNodes: [NumericalSvg, Span];
  svg: NumericalSvg;
  ControlClass: typeof NumericalControl;

  constructor(public parent: BasicMenus) {
    super();
    this.className = 'NumericalMenu';
    this.ControlClass = NumericalControl;
    this.addAttrName('numerical-menu');
    this.svg = new NumericalSvg(this);
    this.textNode.setText('数值');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
