import { RadioControl } from '../../../../../../../core/controls/basic/radio/radio.class';
import { CheckboxControl } from '../../../../../../../core/controls/basic/checkbox/checkbox.class';
import { SelectControl } from '../../../../../../../core/controls/basic/select/select.class';
import { AppRoot } from '../../../../../../../app-root';
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
      if (AppRoot.selectedControl instanceof RadioControl
        || AppRoot.selectedControl instanceof CheckboxControl
        || AppRoot.selectedControl instanceof SelectControl
      ) {
        AppRoot.selectedControl.setValue(value);
      }
      return;
    }
    //  根据选中的控件，设置选项。
    if (AppRoot.selectedControl instanceof RadioControl
      || AppRoot.selectedControl instanceof CheckboxControl
      || AppRoot.selectedControl instanceof SelectControl
    ) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      const config = AppRoot.selectedControl.optionConfig;
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
      if (AppRoot.selectedTableDataCell?.control instanceof RadioControl
        || AppRoot.selectedTableDataCell?.control instanceof CheckboxControl
        || AppRoot.selectedTableDataCell?.control instanceof SelectControl) {
        AppRoot.selectedTableDataCell.control.setValue(value);
      }
      return;
    }
    if (AppRoot.selectedTableDataCell?.control instanceof RadioControl
      || AppRoot.selectedTableDataCell?.control instanceof CheckboxControl
      || AppRoot.selectedTableDataCell?.control instanceof SelectControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      const config = AppRoot.selectedTableDataCell.control.optionConfig;
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
