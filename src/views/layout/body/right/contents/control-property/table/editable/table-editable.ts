import {FormEditor} from '../../../../../../../../form-editor';
import { TableControl } from '../../../../../../../../core/control/complex/table/table.class';
import { IOptionConfig } from '../../../../../../../../core/control/type-control.interface';
import { PropertyRadio } from '../../../property-item/radio/property-radio.abstract';
import { ControlProperty } from '../../control-property';

const TableEditableConfig: IOptionConfig = {
  name: '表格可编辑',
  resultValue: 'editable',
  options: [
    {
      label: '可编辑',
      value: 'editable',
      checked: true,
    },
    {
      label: '不可编辑',
      value: 'disabled',
      checked: false,
    },
  ]
};
// 表单尺寸属性
export class TableEditableProperty extends PropertyRadio {
  className: 'TableEditableProperty';

  constructor(public parent: ControlProperty) {
    super('表格可编辑', TableEditableConfig);
    // console.log('control title property constructor . ');
    this.className = 'TableEditableProperty';
    this.addAttrName('table-editable-property');
    // console.log('this.dom is ', this.dom);
    this.initEvents();
  }

  // todo 只修改选中的表格
  reset(value: string): void {
    if (FormEditor.selectedControl instanceof TableControl) {
      const webTable = FormEditor.selectedControl.formItem.itemContent;
      if (webTable.config?.mode) {
        webTable.config.mode = value as 'editable' | 'disabled' | undefined;
        FormEditor.selectedControl.formItem.addSpan.setStyle('display', webTable.config.mode === 'editable' ? 'block' : 'none');
        webTable.setTable(webTable.config);
        console.log('webTable is ', webTable);
        webTable.render();
      }
    }
  }
}
