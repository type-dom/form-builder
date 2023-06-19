import { ILabel } from '../../../../../type-node/element/html-element/label/label.interface';
import { ISpan } from '../../../../../type-node/element/html-element/span/span.interface';
import { ICheckboxGroup } from '../../../../../type-node/components/checkbox-group/checkbox-group.interface';
import { IFormItem } from '../form-item.interface';

export interface ICheckboxItem extends IFormItem {
  className: 'CheckboxItem',
  childNodes: [ILabel, ICheckboxGroup, ISpan]
}
