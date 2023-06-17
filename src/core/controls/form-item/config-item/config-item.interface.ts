import { ILabel } from '../../../../type-node/web-element/html-element/label/label.interface';
import { ISpan } from '../../../../type-node/web-element/html-element/span/span.interface';
import { ISelect } from '../../../../type-node/web-element/html-element/select/select.interface';
import { IRadioGroup } from '../../../../type-node/components/radio-group/radio-group.interface';
import { ICheckboxGroup } from '../../../../type-node/components/checkbox-group/checkbox-group.interface';
import { IFormItem } from '../form-item.interface';

export interface IConfigItem extends IFormItem {
  className: string,
  childNodes: [ILabel, ISelect | IRadioGroup | ICheckboxGroup, ISpan]
}
