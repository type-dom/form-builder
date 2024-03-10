import { Label, Span } from '@type-dom/framework';
import { TypeControl } from '../../../../core/control/type-control.abstract';
import { itemContentStyle } from '../../../../core/control/type-control.const';
import { CheckboxGroup } from '../../checkbox-group/checkbox-group.class';
import { ConfigItem } from '../config-item/config-item.class';
import { ICheckboxItem } from './checkbox-item.interface';

export class CheckboxItem extends ConfigItem implements ICheckboxItem {
  className: 'CheckboxItem';
  childNodes: [Label, CheckboxGroup, Span];
  itemContent: CheckboxGroup;

  constructor(parent: TypeControl, labelText = '复选') {
    super(parent, labelText);
    this.className = 'CheckboxItem';
    this.itemContent = new CheckboxGroup(this);
    this.itemContent.propObj.styleObj = Object.assign({}, itemContentStyle, {
      height: '100%',
    });
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
  }
}
