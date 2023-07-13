import { Label, Span } from 'type-dom.ts';
import { Select } from '../../../select/select.class';
import { RadioGroup } from '../../radio-group/radio-group.class';
import { CheckboxGroup } from '../../checkbox-group/checkbox-group.class';
import { FormItem } from '../form-item.abstract';
import { IConfigItem } from './config-item.interface';
// todo 现在没有什么用了
export abstract class ConfigItem extends FormItem implements IConfigItem {
  abstract childNodes: [Label, RadioGroup | CheckboxGroup | Select, Span];
  abstract itemContent: RadioGroup | CheckboxGroup | Select;
}
