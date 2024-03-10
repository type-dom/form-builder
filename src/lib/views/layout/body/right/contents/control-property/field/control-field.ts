import { IOptionConfig } from '../../../../../../../core/control/type-control.interface';
import { TableControl } from '../../../../../../../core/control/complex/table/table.class';
import { PropertyCascade } from '../../property-item/cascade/property-cascade.abstract';
import { FieldProperty } from '../../field-property/field-property';
import { ControlProperty } from '../control-property';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';

// 控件字段属性
export class ControlFieldProperty extends PropertyCascade {
  className: 'ControlFieldProperty';

  constructor(public parent: ControlProperty | FieldProperty) {
    super('控件字段');
    this.className = 'ControlFieldProperty';
    this.addAttribute('name', 'control-field');
  }

  get formBuilder() {
    return this.parent.formBuilder;
  }

  get fieldName(): string {
    return this.formBuilder.selectedControl?.configs.fieldName || '';
  }

  set fieldName(value: string) {
    // 是由二级下拉选择组装起来的，由 . 隔开，第1个是，第一级的值，第2个是第二级的值
    if (this.formBuilder.selectedControl) {
      this.formBuilder.selectedControl.fieldName = value;
    }
  }

  resetFieldConfig(config: IOptionConfig): void {
    this.fieldConfig = config;
  }

  reset(value?: string): void {
    console.log('value is ', value);
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(value);
    }
  }

  update(control: TypeControl | null) {
    const value = control?.configs.fieldName;
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(value);
    }
  }

  controlPropertyReset(value?: string): void {
    if (value !== undefined) {
      this.fieldName = value;
      return;
    }
    if (this.formBuilder.selectedControl instanceof TableControl) {
      this.hide();
      return;
    }
    if (this.styleObj.display === 'none') this.show();
    // todo 添加控件类型判断？？？？
    //    设置隐藏还是显示？？？？
    if (this.fieldName !== undefined) {
      if (this.fieldConfig) {
        // const firstStageValue = this.fieldName.split('.')[0];
        // const secondStageValue = this.fieldName.split('.')[1];
        this.fieldConfig = Object.assign(this.fieldConfig, {
          resultValue: this.fieldName,
        });
        // console.log('this.fieldConfig is ', this.fieldConfig);
        // if (!this.formBuilder.selectedControl) throw Error('请先选中某个控件');
        // this.resetFieldConfig(this.formBuilder.selectedControl, this.fieldConfig);
        this.resetCascadeConfig(this.fieldConfig);
      } else {
        console.error('this.fieldConfig is undefined . ');
        // throw Error('this.fieldConfig is undefined . ');
      }
    } else {
      // 初次加载时，该控件字段名就是没有的。预置位默认还是不做处理？ TODO
      // console.log('this.fieldName is undefined . ');
      if (this.fieldConfig) {
        this.fieldConfig = Object.assign(this.fieldConfig, { resultValue: 0 });
        // console.log('this.fieldConfig is ', this.fieldConfig);
        // this.secondStageSelectObj.resetOptions([{
        //   label: '请先选择上级',
        //   value: 0
        // }], 0);
        // if (!this.formBuilder.selectedControl) throw Error('请先选中某个控件');
        // this.resetFieldConfig(this.formBuilder.selectedControl, this.fieldConfig);
        // this.select.resetConfig(this.fieldConfig);
        this.resetCascadeConfig(this.fieldConfig);
      } else {
        console.error('this.fieldConfig is undefined . ');
        // throw Error('this.fieldConfig is undefined . ');
      }
    }
  }

  fieldPropertyReset(value?: string): void {
    // console.log('control field value is ', value);
    if (!this.formBuilder.selectedTableDataCell) {
      console.error('this.formBuilder.selectedTableDataCell is undefined . ');
      return;
    }
    // todo 二级下拉选择的值。二级下拉选中时触发。
    if (value !== undefined) {
      // if (this.select.childNodes.length === 0) {
      //   if (this.fieldConfig) {
      //     this.select.resetConfig(this.fieldConfig);
      //   }
      // }
      const table = this.formBuilder.selectedTableDataCell.parent.parent;
      const tableHeader = table.config?.tableHeader;
      const index = this.formBuilder.selectedTableDataCell.index;
      // console.log('tableHeader is ', tableHeader);
      // console.log('index is ', index);

      if (!tableHeader || index === undefined) return;
      tableHeader[index].name = value;
      //  todo 修改表头标签
      table.tableHead.childNodes[index].setAttribute('name', value);
      table.tableHead.childNodes[index].render();
      console.log('tableHeader is ', tableHeader);
      return;
    }
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    const tableHeader =
      this.formBuilder.selectedTableDataCell.parent.parent.config?.tableHeader;
    const index = this.formBuilder.selectedTableDataCell.index;
    // console.log('tableHeader is ', tableHeader);
    // console.log('index is ', index);

    if (!tableHeader || index === undefined) return;
    if (this.fieldConfig) {
      // console.log('tableHeader[index].label is ', tableHeader[index].label);
      this.fieldConfig = Object.assign(this.fieldConfig, {
        resultValue: tableHeader[index].name,
      });
      console.log('this.fieldConfig is ', this.fieldConfig);
      // if (!this.formBuilder.selectedControl) throw Error('请先选中某个控件');
      // this.resetFieldConfig(this.formBuilder.selectedControl, this.fieldConfig);
      this.resetCascadeConfig(this.fieldConfig);
    }
  }
}
