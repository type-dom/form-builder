import { Label, Span } from 'type-dom.ts';
import { itemContentStyle } from '../../../../core/control/type-control.const';
import { TypeControl } from '../../../../core/control/type-control.abstract';
import { Select } from '../../../select/select.class';
import { ConfigItem } from '../config-item/config-item.class';
import { ISelectItem } from './select-item.interface';
export class SelectItem extends ConfigItem implements ISelectItem {
  className: 'SelectItem';
  childNodes: [Label, Select, Span];
  itemContent: Select;
  constructor(public parent: TypeControl, labelText = '下拉选择') {
    super(labelText);
    this.className = 'SelectItem';
    this.itemContent = new Select(this);
    this.itemContent.propObj.styleObj = Object.assign({}, itemContentStyle);
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
  }
}
