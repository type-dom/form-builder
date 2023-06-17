import { ILabel } from '../../../../type-node/web-element/html-element/label/label.interface';
import { ISpan } from '../../../../type-node/web-element/html-element/span/span.interface';
import { ICheckboxGroup } from '../../../../components/checkbox-group/checkbox-group.interface';
import { IFormItem } from '../form-item.interface';

export interface ICheckboxItem extends IFormItem {
  className: 'CheckboxItem',
  childNodes: [ILabel, ICheckboxGroup, ISpan]
}
