import { MultilineInputSvg } from '../../../../components/svgs/multiline-input/multiline-input';
import { Span } from '../../../../web-element/span/span.class';
import { MultilineInputControl } from '../../../controls/basic/multiline-input/multiline-input.class';
import { ControlMenu } from '../../control-menu.abstract';
import { BasicControlMenus } from '../basic-control-menus';
// import html from './multiline-input-menu.html';
export class MultilineInputMenu extends ControlMenu {
  className: 'MultilineInputMenu';
  childNodes: [MultilineInputSvg, Span];
  svg: MultilineInputSvg;
  ControlClass: typeof MultilineInputControl;

  constructor(public parent: BasicControlMenus) {
    super();
    this.className = 'MultilineInputMenu';
    this.ControlClass = MultilineInputControl;
    this.addAttrName('multiline-input-menu');
    this.svg = new MultilineInputSvg(this);
    this.svg.reset(24, 24);
    this.textNode.setText('多行输入');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
