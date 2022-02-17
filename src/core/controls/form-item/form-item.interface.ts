import { Input } from '../../../web-element/input/input.class';
import { IInput } from '../../../web-element/input/input.interface';
import { Textarea } from '../../../web-element/textarea/textarea.class';
import { ITextarea } from '../../../web-element/textarea/textarea.interface';
import { WebTable } from '../../../web-element/table/table.class';
import { IWebTable } from '../../../web-element/table/table.interface';
import { Select } from '../../../web-element/select/select.class';
import { ISelect } from '../../../web-element/select/select.interface';
import { ILabel } from '../../../web-element/label/label.interface';
import { ISpan } from '../../../web-element/span/span.interface';
import { IDivComponent } from '../../../web-component/div-component/div-component.interface';
import { RadioGroup } from '../../../components/radio-group/radio-group.class';
import { IRadioGroup } from '../../../components/radio-group/radio-group.interface';
import { CheckboxGroup } from '../../../components/checkbox-group/checkbox-group.class';
import { ICheckboxGroup } from '../../../components/checkbox-group/checkbox-group.interface';

export type ItemContent = Input | Textarea | Select | RadioGroup | CheckboxGroup | WebTable;
export type IItemContent = IInput | ITextarea | ISelect | IRadioGroup | ICheckboxGroup | IWebTable;

export interface IFormItem extends IDivComponent {
  className: string, // 'ButtonItem' | 'CheckboxItem' | 'ConfigItem' | 'InputItem' | 'RadioItem' | 'SelectItem' | 'TableItem' | 'TextareaItem',
  childNodes: [ILabel, IItemContent, ISpan],
}
