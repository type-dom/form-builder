import { Span } from 'type-dom.ts';
import { TdAttachmentSvg } from 'type-dom-svgs';
import { BasicMenus } from '../../../../views/layout/body/left/contents/menus-wrapper/basic-menus-wrapper/basic-menus';
import { TableDataCell } from '../../../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { AttachmentControl } from '../../../control/basic/attachment/attachment.class';
import { WebPage } from '../../../page/web-page.class';
import { TypeMenu } from '../../menu.abstract';

export class AttachmentMenu extends TypeMenu {
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
  createControl(parent: WebPage | TableDataCell): AttachmentControl {
    return new AttachmentControl(parent);
  }
}
