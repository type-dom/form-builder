import { NumericalControl } from '../../../../../../../core/controls/basic/numerical/numerical.class';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { FieldProperty } from '../../field-property/field-property';
import { ControlProperty } from '../control-property';

// 最大值，只对数值控件有效
export class MinValueProperty extends PropertyInput {
  className: 'MinValueProperty';

  constructor(public parent: ControlProperty | FieldProperty) {
    super('最小值', '请输入最小值');
    this.content.addAttribute('type', 'number');
    this.className = 'MinValueProperty';
    this.addAttribute('name', 'control-min-value-property');
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
  controlPropertyReset(value?: string): void {
    if (value !== undefined) {
      if (this.editor.selectedControl instanceof NumericalControl) {
        this.editor.selectedControl.formItem.itemContent.setAttribute('min', value);
      } else {
        console.error('this.editor.selectedControl is not NumericalControl .');
      }
      return;
    }
    if (this.editor.selectedControl instanceof NumericalControl) {
      if (this.styleObj.display === 'none') this.show();
      const MinValue = this.editor.selectedControl.formItem.itemContent.propObj.attrObj.min as string;
      if (MinValue) {
        this.resetInputValue(MinValue);
      } else {
        this.resetInputValue(0);
      }
    } else {
      this.hide();
    }
  }
  fieldPropertyReset(value?: string): void {
    if (value !== undefined) {
      if (this.editor.selectedTableDataCell?.control instanceof NumericalControl) {
        this.editor.selectedTableDataCell.control.formItem.itemContent.setAttribute('min', value);
      } else {
        console.error('this.editor.selectedTableDataCell.control is not NumericalControl .');
      }
      return;
    }
    if (this.editor.selectedTableDataCell?.control instanceof NumericalControl) {
      if (this.styleObj.display === 'none') this.show();
      const MinValue = this.editor.selectedTableDataCell.control.formItem.itemContent.propObj.attrObj.min as string;
      if (MinValue) {
        this.resetInputValue(MinValue);
      } else {
        this.resetInputValue(0);
      }
    } else {
      this.hide();
    }
  }
}