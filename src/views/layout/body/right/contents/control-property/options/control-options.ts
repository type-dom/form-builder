import { RadioControl } from '../../../../../../../core/controls/basic/radio/radio.class';
import { CheckboxControl } from '../../../../../../../core/controls/basic/checkbox/checkbox.class';
import { SelectControl } from '../../../../../../../core/controls/basic/select/select.class';
import { PropertyOptions } from '../../property-item/propoerty-options/property-options.abstract';
import { FieldProperty } from '../../field-property/field-property';
import { ControlProperty } from '../control-property';

// 控件选项列表
export class ControlOptionsProperty extends PropertyOptions {
  className: 'ControlOptionsProperty';

  constructor(public parent: ControlProperty | FieldProperty) {
    super('选项列表');
    this.className = 'ControlOptionsProperty';
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
  controlPropertyReset(value?: string | number | boolean): void {
    if (value !== undefined) {
      //  todo setValue
      if (this.editor.selectedControl instanceof RadioControl
        || this.editor.selectedControl instanceof CheckboxControl
        || this.editor.selectedControl instanceof SelectControl
      ) {
        this.editor.selectedControl.setValue(value);
      }
      return;
    }
    //  根据选中的控件，设置选项。
    if (this.editor.selectedControl instanceof RadioControl
      || this.editor.selectedControl instanceof CheckboxControl
      || this.editor.selectedControl instanceof SelectControl
    ) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      const config = this.editor.selectedControl.optionConfig;
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
      if (this.editor.selectedTableDataCell?.control instanceof RadioControl
        || this.editor.selectedTableDataCell?.control instanceof CheckboxControl
        || this.editor.selectedTableDataCell?.control instanceof SelectControl) {
        this.editor.selectedTableDataCell.control.setValue(value);
      }
      return;
    }
    if (this.editor.selectedTableDataCell?.control instanceof RadioControl
      || this.editor.selectedTableDataCell?.control instanceof CheckboxControl
      || this.editor.selectedTableDataCell?.control instanceof SelectControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      const config = this.editor.selectedTableDataCell.control.optionConfig;
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
