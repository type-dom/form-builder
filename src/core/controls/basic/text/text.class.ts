import { WebTableDataCell } from '../../../../type-node/web-element/html-element/table/data-cell/data-cell.class';
import { WebPage } from '../../../page/web-page.class';
import { InputItem } from '../../form-item/input-item/input-item.class';
import { WebBasicControl } from '../basic.abstract';
import { ITextControl } from './text.interface';

export class TextControl extends WebBasicControl implements ITextControl {
  className: 'TextControl';
  childNodes: [InputItem];
  formItem: InputItem;
  constructor(parent: WebPage | WebTableDataCell) {
    super(parent);
    this.className = 'TextControl';
    this.propObj.attrObj.name = 'text-control';
    this.formItem = new InputItem(this, '文本输入', '请输入文本');
    this.childNodes = [this.formItem];
    this.initEvents();
  }
}
