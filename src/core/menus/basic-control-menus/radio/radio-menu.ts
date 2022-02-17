import { RadioSvg } from '../../../../components/svgs/radio/radio';
import { Span } from '../../../../web-element/span/span.class';
import { RadioControl } from '../../../controls/basic/radio/radio.class';
import { ControlMenu } from '../../control-menu.abstract';
import { BasicControlMenus } from '../basic-control-menus';
export class RadioMenu extends ControlMenu {
  className: string;
  childNodes: [RadioSvg, Span];
  svg: RadioSvg;
  ControlClass: typeof RadioControl;

  constructor(public parent: BasicControlMenus) {
    super();
    this.className = 'RadioMenu';
    this.ControlClass = RadioControl;
    this.addAttrName('radio-menu');
    this.svg = new RadioSvg(this);
    this.svg.reset(24, 24);
    this.textNode.setText('单选');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
