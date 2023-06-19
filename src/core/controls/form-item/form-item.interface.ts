import { Input } from '../../../../type-node/element/html-element/input/input.class';
import { IInput } from '../../../../type-node/element/html-element/input/input.interface';
import { Textarea } from '../../../../type-node/element/html-element/textarea/textarea.class';
import { ITextarea } from '../../../../type-node/element/html-element/textarea/textarea.interface';
import { WebTable } from '../../../../type-node/element/html-element/table/table.class';
import { IWebTable } from '../../../../type-node/element/html-element/table/table.interface';
import { Select } from '../../../../type-node/element/html-element/select/select.class';
import { ISelect } from '../../../../type-node/element/html-element/select/select.interface';
import { ILabel } from '../../../../type-node/element/html-element/label/label.interface';
import { ISpan } from '../../../../type-node/element/html-element/span/span.interface';
import { ITypeDiv } from '../../../../type-node/type-element/type-html/div/div.interface';
import { RadioGroup } from '../../../../type-node/components/radio-group/radio-group.class';
import { IRadioGroup } from '../../../../type-node/components/radio-group/radio-group.interface';
import { CheckboxGroup } from '../../../../type-node/components/checkbox-group/checkbox-group.class';
import { ICheckboxGroup } from '../../../../type-node/components/checkbox-group/checkbox-group.interface';

export type ItemContent = Input | Textarea | Select | RadioGroup | CheckboxGroup | WebTable;
export type IItemContent = IInput | ITextarea | ISelect | IRadioGroup | ICheckboxGroup | IWebTable;

export interface IFormItem extends ITypeDiv {
  className: string, // 'ButtonItem' | 'CheckboxItem' | 'ConfigItem' | 'InputItem' | 'RadioItem' | 'SelectItem' | 'TableItem' | 'TextareaItem',
  childNodes: [ILabel, IItemContent, ISpan],
}