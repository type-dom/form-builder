import { ILabel } from '../../../../web-element/web-html/label/label.interface';
import { ISpan } from '../../../../web-element/web-html/span/span.interface';
import { ICheckboxGroup } from '../../../../components/checkbox-group/checkbox-group.interface';
import { IFormItem } from '../form-item.interface';

export interface ICheckboxItem extends IFormItem {
  className: 'CheckboxItem',
  childNodes: [ILabel, ICheckboxGroup, ISpan]
}
