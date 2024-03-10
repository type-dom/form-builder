import { ILabel, ISpan } from '@type-dom/framework';
import { ICheckboxGroup } from '../../checkbox-group/checkbox-group.interface';
import { IFormItem } from '../form-item.interface';

export interface ICheckboxItem extends IFormItem {
  className: 'CheckboxItem';
  childNodes: [ILabel, ICheckboxGroup, ISpan];
}
