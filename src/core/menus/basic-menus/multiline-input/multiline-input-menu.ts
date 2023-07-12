import { Span } from 'type-dom.ts';
import { TdMultilineInputSvg } from 'type-dom-svgs';
import { MultilineInputControl } from '../../../controls/basic/multiline-input/multiline-input.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';
// import html from './multiline-input-menu.html';
export class MultilineInputMenu extends ControlMenu {
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
}
