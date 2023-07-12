import { Span } from 'type-dom.ts';
import { TdAttachmentSvg } from 'type-dom-svgs';
import { AttachmentControl } from '../../../controls/basic/attachment/attachment.class';
import { ControlMenu } from '../../menu.abstract';
import { BasicMenus } from '../basic-menus';

export class AttachmentMenu extends ControlMenu {
  className: 'AttachmentMenu';
  childNodes: [TdAttachmentSvg, Span];
  ControlClass: typeof AttachmentControl;
  svg: TdAttachmentSvg;
  constructor(public parent: BasicMenus) {
    super();
    this.className = 'AttachmentMenu';
    this.ControlClass = AttachmentControl;
    this.addAttrName('attachment-menu');
    this.svg = new TdAttachmentSvg(this);
    this.svg.resetSize(24, 24);
    this.textNode.setText('附件');
    this.childNodes = [this.svg, this.titleSpan];
    this.initEvents();
  }
}
