import { AttachmentSvg } from '../../../../components/svgs/attachment/attachment';
import { Span } from '../../../../web-element/span/span.class';
import { AttachmentControl } from '../../../controls/basic/attachment/attachment.class';
import { ControlMenu } from '../../control-menu.abstract';
import { BasicControlMenus } from '../basic-control-menus';

export class AttachmentMenu extends ControlMenu {
  className: 'AttachmentMenu';
  childNodes: [AttachmentSvg, Span];
  ControlClass: typeof AttachmentControl;
  svg: AttachmentSvg;
  constructor(public parent: BasicControlMenus) {
    super();
    this.className = 'AttachmentMenu';
    this.ControlClass = AttachmentControl;
    this.addAttrName('attachment-menu');
    this.svg = new AttachmentSvg(this);
    this.svg.reset(24, 24);
    this.textNode.setText('附件');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
