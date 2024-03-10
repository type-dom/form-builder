import { ILabel, ISpan } from '@type-dom/framework';
import { ISelect } from '../../../select/select.interface';
import { IRadioGroup } from '../../radio-group/radio-group.interface';
import { ICheckboxGroup } from '../../checkbox-group/checkbox-group.interface';
import { IFormItem } from '../form-item.interface';

export interface IConfigItem extends IFormItem {
  className: string;
  childNodes: [ILabel, ISelect | IRadioGroup | ICheckboxGroup, ISpan];
}
