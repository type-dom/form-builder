import { ILabel } from '../../../../web-element/label/label.interface';
import { ICheckboxGroup } from '../../../../components/checkbox-group/checkbox-group.interface';
import { ISpan } from '../../../../web-element/span/span.interface';
import { IFormItem } from '../form-item.interface';

export interface ICheckboxItem extends IFormItem {
  className: 'CheckboxItem',
  childNodes: [ILabel, ICheckboxGroup, ISpan]
}
