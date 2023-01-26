import { SingleInputSvg } from '../../../../components/svgs/single-input/single-input';
import { Span } from '../../../../web-element/web-html/span/span.class';
import { SingleInputControl } from '../../../controls/basic/single-input/single-input.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';
// import html from './single-input-menu.html';
export class SingleInputMenu extends ControlMenu {
  className: 'SingleInputMenu';
  childNodes: [SingleInputSvg, Span];
  svg: SingleInputSvg;
  ControlClass: typeof SingleInputControl;

  constructor(public parent: BasicMenus) {
    super();
    this.className = 'SingleInputMenu';
    this.ControlClass = SingleInputControl;
    this.addAttrName('single-input-menu');
    this.svg = new SingleInputSvg(this);
    this.textNode.setText('单行输入');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
