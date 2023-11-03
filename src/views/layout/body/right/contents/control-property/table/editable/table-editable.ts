import { TypeFormDesigner } from '../../../../../../../../type-form-designer';
import { TableControl } from '../../../../../../../../core/control/complex/table/table.class';
import { IOptionConfig } from '../../../../../../../../core/control/type-control.interface';
import { TypeControl } from '../../../../../../../../core/control/type-control.abstract';
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
  }

  // todo 只修改选中的表格
  reset(value: string): void {
    if (TypeFormDesigner.selectedControl instanceof TableControl) {
      const webTable = TypeFormDesigner.selectedControl.formItem.itemContent;
      if (webTable.config?.mode) {
        webTable.config.mode = value as 'editable' | 'disabled' | undefined;
        TypeFormDesigner.selectedControl.formItem.addSpan.setStyle('display', webTable.config.mode === 'editable' ? 'block' : 'none');
        webTable.setTable(webTable.config);
        console.log('webTable is ', webTable);
        webTable.render();
      }
    }
  }
  // todo 只修改选中的表格
  update(control: TypeControl | null): void {
    const value = control?.configs.tableEditable;
    if (TypeFormDesigner.selectedControl instanceof TableControl) {
      const webTable = TypeFormDesigner.selectedControl.formItem.itemContent;
      if (webTable.config?.mode) {
        webTable.config.mode = value as 'editable' | 'disabled' | undefined;
        TypeFormDesigner.selectedControl.formItem.addSpan.setStyle('display', webTable.config.mode === 'editable' ? 'block' : 'none');
        webTable.setTable(webTable.config);
        console.log('webTable is ', webTable);
        webTable.render();
      }
    }
  }
}
