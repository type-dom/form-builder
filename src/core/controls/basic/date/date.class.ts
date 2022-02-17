import { WebTableDataCell } from '../../../../web-element/table/data-cell/data-cell.class';
import { WebPage } from '../../../web-page/web-page.class';
import { InputItem } from '../../form-item/input-item/input-item.class';
import { WebBasicControl } from '../basic.abstract';
import { IDateControl } from './date.interface';

export class DateControl extends WebBasicControl implements IDateControl {
  className: 'DateControl';
  formItem: InputItem;
  childNodes: [InputItem]
  constructor(parent: WebPage | WebTableDataCell) {
    super(parent);
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'DateControl';
    this.propObj.attrObj.name = 'date-control';
    // this.createInputItem('数字输入', '请输入数字');
    this.formItem = new InputItem(this, '日期');
    this.formItem.itemContent.addAttrObj({
      type: 'date',
      placeholder: false,
    });
    this.childNodes = [this.formItem];
    // parent.controlObjMap.set(WebControl.maxCtrlId, this);
    this.initEvents();
  }
}
