import { WebTableDataCell } from '../../../../web-element/table/data-cell/data-cell.class';
import { WebPage } from '../../../web-page/web-page.class';
import { InputItem } from '../../form-item/input-item/input-item.class';
import { WebBasicControl } from '../basic.abstract';
import { ITimeControl } from './time.interface';

export class TimeControl extends WebBasicControl implements ITimeControl {
  className: 'TimeControl';
  formItem: InputItem;
  childNodes: [InputItem]
  constructor(parent: WebPage | WebTableDataCell) {
    super(parent);
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'TimeControl';
    this.propObj.attrObj.name = 'time-control';
    // this.createInputItem('数字输入', '请输入数字');
    this.formItem = new InputItem(this, '时间', '请选择时间');
    this.formItem.itemContent.addAttrObj({
      type: 'time',
    });
    this.childNodes = [this.formItem];
    this.initEvents();
  }
}
