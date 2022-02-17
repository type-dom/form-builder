import { CheckboxSvg } from '../../../../components/svgs/checkbox/checkbox';
import { Span } from '../../../../web-element/span/span.class';
import { CheckboxControl } from '../../../controls/basic/checkbox/checkbox.class';
import { ControlMenu } from '../../control-menu.abstract';
import { BasicControlMenus } from '../basic-control-menus';
export class CheckboxMenu extends ControlMenu {
  className: 'CheckboxMenu';
  childNodes: [CheckboxSvg, Span];
  svg: CheckboxSvg;
  ControlClass: typeof CheckboxControl;

  constructor(public parent: BasicControlMenus) {
    super();
    this.className = 'CheckboxMenu';
    this.ControlClass = CheckboxControl;
    this.addAttrName('checkbox-menu');
    this.svg = new CheckboxSvg(this);
    this.svg.reset(24, 24);
    this.textNode.setText('复选');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
