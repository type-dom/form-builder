import {
  IInput,
  ILabel,
  Input,
  ISpan,
  ITextarea,
  ITypeDiv,
  Textarea,
} from '@type-dom/framework';
import { Select } from '../../select/select.class';
import { ISelect } from '../../select/select.interface';
import { RadioGroup } from '../radio-group/radio-group.class';
import { CheckboxGroup } from '../checkbox-group/checkbox-group.class';
import { IRadioGroup } from '../radio-group/radio-group.interface';
import { ICheckboxGroup } from '../checkbox-group/checkbox-group.interface';
import { Table } from './table-item/table/table.class';
import { ITable } from './table-item/table/table.interface';

export type ItemContent =
  | Input
  | Textarea
  | Select
  | RadioGroup
  | CheckboxGroup
  | Table;
export type IItemContent =
  | IInput
  | ITextarea
  | ISelect
  | IRadioGroup
  | ICheckboxGroup
  | ITable;

export interface IFormItem extends ITypeDiv {
  className: string; // 'ButtonItem' | 'CheckboxItem' | 'ConfigItem' | 'InputItem' | 'RadioItem' | 'SelectItem' | 'TableItem' | 'TextareaItem',
  childNodes: [ILabel, IItemContent, ISpan];
}
