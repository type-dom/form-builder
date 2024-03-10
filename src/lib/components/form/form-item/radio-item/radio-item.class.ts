import { Span, Label } from '@type-dom/framework';
import { TypeControl } from '../../../../core/control/type-control.abstract';
import { itemContentStyle } from '../../../../core/control/type-control.const';
import { RadioGroup } from '../../radio-group/radio-group.class';
import { ConfigItem } from '../config-item/config-item.class';
import { IRadioItem } from './radio-item.interface';

export class RadioItem extends ConfigItem implements IRadioItem {
  className: 'RadioItem';
  childNodes: [Label, RadioGroup, Span];
  itemContent: RadioGroup;

  constructor(parent: TypeControl, labelText = '单选') {
    super(parent, labelText);
    this.className = 'RadioItem';
    this.itemContent = new RadioGroup(this);
    this.itemContent.propObj.styleObj = Object.assign({}, itemContentStyle, {
      height: '100%',
    });
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
  }
}
