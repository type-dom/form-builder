import { TypeFormDesigner } from '../../../../../../../type-form-designer';
import { TableControl } from '../../../../../../../core/control/complex/table/table.class';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { ControlProperty } from '../control-property';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';
// 表格列数
export class TableColumnProperty extends PropertyInput {
  className: 'TableColumnProperty';
  constructor(public parent: ControlProperty) {
    super('表格列数', '请输入列数量');
    // console.log('control title property constructor . ');
    this.className = 'TableColumnProperty';
    this.addAttrName('table-column-property');
    this.content.addAttrObj({
      type: 'number',
      min: 1,
      max: 20,
    });
  }

  reset(value?: string): void {
    if (value !== undefined) {
      if (TypeFormDesigner.selectedControl instanceof TableControl) {
        const table = TypeFormDesigner.selectedControl.formItem.itemContent;
        table.changeColumnCount(Number(value));
      } else {
        console.error('不是表格控件');
      }
    } else {
      if (TypeFormDesigner.selectedControl instanceof TableControl) {
        if (this.styleObj.display === 'none') this.show();
        //  todo 根据表头数，设置现在的数量
        const table = TypeFormDesigner.selectedControl.formItem.itemContent;
        const tableHead = table.tableHead;
        const count = tableHead.length;
        const config = table.config;
        console.log('config', config);
        console.log('tableHeader is ', table.tableHeader);
        console.log('tableData is ', table.tableData);
        if (config) {
          config.tableHeader = table.tableHeader;
          config.tableData = table.tableData;
        }
        if (count) {
          this.resetInputValue(String(count));
        } else {
          // this.resetInputValue(0);
          throw Error('表头没有字段 . ');
        }
      } else {
        this.hide();
        this.resetInputValue('');
      }
    }
  }
  update(control: TypeControl | null): void {
    const value = control?.configs.tableColumnCount;
    if (value !== undefined) {
      if (TypeFormDesigner.selectedControl instanceof TableControl) {
        const table = TypeFormDesigner.selectedControl.formItem.itemContent;
        table.changeColumnCount(Number(value));
      } else {
        console.error('不是表格控件');
      }
    } else {
      if (TypeFormDesigner.selectedControl instanceof TableControl) {
        if (this.styleObj.display === 'none') this.show();
        //  todo 根据表头数，设置现在的数量
        const table = TypeFormDesigner.selectedControl.formItem.itemContent;
        const tableHead = table.tableHead;
        const count = tableHead.length;
        const config = table.config;
        console.log('config', config);
        console.log('tableHeader is ', table.tableHeader);
        console.log('tableData is ', table.tableData);
        if (config) {
          config.tableHeader = table.tableHeader;
          config.tableData = table.tableData;
        }
        if (count) {
          this.resetInputValue(String(count));
        } else {
          // this.resetInputValue(0);
          throw Error('表头没有字段 . ');
        }
      } else {
        this.hide();
        this.resetInputValue('');
      }
    }
  }
  fieldPropertyReset(value?: string): void {
  //  none
    console.log('value is ', value);
  }
}
