// 顺序会影响加载
// todo 如果SingleInputControl不在最前面的话，会报错。Uncaught ReferenceError: Cannot access 'BasicControl' before initialization
//    原因应该是在tableDataCell中创建了。
import { SingleInputControl } from './basic/single-input/single-input.class';
import { TableDataCell } from '../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { WebPage } from '../page/web-page.class';
import { AttachmentControl } from './basic/attachment/attachment.class';
import { CheckboxControl } from './basic/checkbox/checkbox.class';
import { ConnectionControl } from './complex/connection/connection.class';
import { DateControl } from './basic/date/date.class';
import { MultilineInputControl } from './basic/multiline-input/multiline-input.class';
import { NumericalControl } from './basic/numerical/numerical.class';
import { RadioControl } from './basic/radio/radio.class';
import { SelectControl } from './basic/select/select.class';
// import { SingleInputControl } from './basic/single-input/single-input.class';
import { TableControl } from './complex/table/table.class';
import { TextControl } from './basic/text/text.class';
import { TimeControl } from './basic/time/time.class';
export function createControl(className: string, parent: WebPage | TableDataCell) {
  switch (className) {
    case 'AttachmentControl':
      return new AttachmentControl(parent);
    case 'CheckboxControl':
      return new CheckboxControl(parent);
    case 'ConnectionControl':
      return new ConnectionControl(parent);
    case 'DateControl':
      return new DateControl(parent);
    case 'MultilineInputControl':
      return new MultilineInputControl(parent);
    case 'NumericalControl':
      return new NumericalControl(parent);
    case 'RadioControl':
      return new RadioControl(parent);
    case 'SelectControl':
      return new SelectControl(parent);
    case 'SingleInputControl':
      return new SingleInputControl(parent);
    case 'TableControl':
      if (parent instanceof WebPage) {
        return new TableControl(parent);
      } else {
        throw Error('parent is TableDataCell');
      }
    case 'TextControl':
      return new TextControl(parent);
    case 'TimeControl':
      return new TimeControl(parent);
    default:
      throw Error('there is no control has this classname .');
  }
}

