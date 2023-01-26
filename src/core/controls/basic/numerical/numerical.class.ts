import { WebTableDataCell } from '../../../../web-element/web-html/table/data-cell/data-cell.class';
import { WebPage } from '../../../page/web-page.class';
import { InputItem } from '../../form-item/input-item/input-item.class';
import { WebBasicControl } from '../basic.abstract';
import { INumericalControl } from './numerical.interface';

export class NumericalControl extends WebBasicControl implements INumericalControl {
  className: 'NumericalControl';
  formItem: InputItem;
  childNodes: [InputItem];
  minValue?: number;
  maxValue?: number;
  constructor(parent: WebPage | WebTableDataCell) {
    super(parent);
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'NumericalControl';
    this.propObj.attrObj.name = 'numerical-control';
    this.formItem = new InputItem(this, '数字输入');
    this.formItem.itemContent.addAttrObj({
      type: 'number',
    });
    this.formItem.itemContent.removeAttribute('placeholder'); // 不需要提示语
    this.formItem.itemContent.dom.value = '0'; // 默认为零。
    this.childNodes = [this.formItem];
    this.initEvents();
  }
}
