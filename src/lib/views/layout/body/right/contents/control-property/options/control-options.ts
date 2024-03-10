import { RadioControl } from '../../../../../../../core/control/basic/radio/radio.class';
import { CheckboxControl } from '../../../../../../../core/control/basic/checkbox/checkbox.class';
import { SelectControl } from '../../../../../../../core/control/basic/select/select.class';
import { PropertyOptions } from '../../property-item/propoerty-options/property-options.abstract';
import { FieldProperty } from '../../field-property/field-property';
import { ControlProperty } from '../control-property';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';

// 控件选项列表
export class ControlOptionsProperty extends PropertyOptions {
  className: 'ControlOptionsProperty';

  constructor(public parent: ControlProperty | FieldProperty) {
    super('选项列表');
    this.className = 'ControlOptionsProperty';
  }

  get formBuilder() {
    return this.parent.formBuilder;
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

  update(control: TypeControl | null): void {
    const value = control?.configs.optionConfig;
    console.log('value is ', value);
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(value);
    }
  }

  controlPropertyReset(value?: string | number | boolean): void {
    if (value !== undefined) {
      //  todo setValue
      if (
        this.formBuilder.selectedControl instanceof RadioControl ||
        this.formBuilder.selectedControl instanceof CheckboxControl ||
        this.formBuilder.selectedControl instanceof SelectControl
      ) {
        this.formBuilder.selectedControl.setValue(value);
      }
      return;
    }
    //  根据选中的控件，设置选项。
    if (
      this.formBuilder.selectedControl instanceof RadioControl ||
      this.formBuilder.selectedControl instanceof CheckboxControl ||
      this.formBuilder.selectedControl instanceof SelectControl
    ) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      const config = this.formBuilder.selectedControl.optionConfig;
      // console.log('config is ', config);
      if (config) {
        this.resetConfig(config);
      } else {
        console.error('config is undefined . ');
      }
    } else {
      this.hide();
    }
  }

  fieldPropertyReset(value?: string | number | boolean): void {
    if (value !== undefined) {
      //  todo setValue
      if (
        this.formBuilder.selectedTableDataCell?.control instanceof
          RadioControl ||
        this.formBuilder.selectedTableDataCell?.control instanceof
          CheckboxControl ||
        this.formBuilder.selectedTableDataCell?.control instanceof SelectControl
      ) {
        this.formBuilder.selectedTableDataCell.control.setValue(value);
      }
      return;
    }
    if (
      this.formBuilder.selectedTableDataCell?.control instanceof RadioControl ||
      this.formBuilder.selectedTableDataCell?.control instanceof
        CheckboxControl ||
      this.formBuilder.selectedTableDataCell?.control instanceof SelectControl
    ) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      const config =
        this.formBuilder.selectedTableDataCell.control.optionConfig;
      // console.log('config is ', config);
      if (config) {
        this.resetConfig(config);
      } else {
        console.error('config is undefined . ');
      }
      return;
    } else {
      this.hide();
    }
  }
}
