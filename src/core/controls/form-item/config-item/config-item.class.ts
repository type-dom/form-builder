import { Span } from '../../../../web-element/web-html/span/span.class';
import { Label } from '../../../../web-element/web-html/label/label.class';
import { Select } from '../../../../web-element/web-html/select/select.class';
import { RadioGroup } from '../../../../components/radio-group/radio-group.class';
import { CheckboxGroup } from '../../../../components/checkbox-group/checkbox-group.class';
import { FormItem } from '../form-item.abstract';
import { IConfigItem } from './config-item.interface';

// todo 现在没有什么用了
export abstract class ConfigItem extends FormItem implements IConfigItem {
  abstract childNodes: [Label, RadioGroup | CheckboxGroup | Select, Span];
  abstract itemContent: RadioGroup | CheckboxGroup | Select;
}
