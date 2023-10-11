import { fromEvent } from 'rxjs';
import { TypeFormDesigner } from '../../../../../../../type-form-designer';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyTextarea } from '../../property-item/textarea/property-textarea.abstract';
import { ControlProperty } from '../control-property';

// 监听控件onChange
export class ControlOnChangeProperty extends PropertyTextarea {
  className: 'ControlOnChangeProperty';

  constructor(public parent: ControlProperty | FieldProperty) {
    super('onChange', '请输入监听函数');
    this.className = 'ControlOnChangeProperty';
    this.addAttrName('control-default-value-property');
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
    if (!control) {
      return;
    }
    // 显示属性项
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    const value = control?.configs.onChange;
    if (value) {
      this.resetInputValue(value);
    } else {
      this.resetInputValue('');
    }
  }
  controlPropertyReset(value?: string): void {
    if (value !== undefined) { // 输入值的操作
      // AppRoot.selectedControl?.addOnChange(this.input.dom.value);
      return;
    }
    // 选中控件
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    // if (AppRoot.selectedControl?.itemContent instanceof Input ||
    //   AppRoot.selectedControl?.itemContent instanceof Textarea) {
    const changeStr = TypeFormDesigner.selectedControl?.configs.onChange;
    if (changeStr) {
      this.resetInputValue(changeStr);
    } else {
      this.resetInputValue('');
    }
  }
  fieldPropertyReset(value?: string): void {
    if (value !== undefined) { // 输入值的操作
      // AppRoot.selectedControl?.addOnChange(this.input.dom.value);
      return;
    }
    // 选中控件
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    // if (AppRoot.selectedControl?.itemContent instanceof Input ||
    //   AppRoot.selectedControl?.itemContent instanceof Textarea) {
    if (TypeFormDesigner.selectedTableDataCell?.control instanceof TypeControl) {
      const changeStr = TypeFormDesigner.selectedTableDataCell?.control?.configs.onChange;
      if (changeStr) {
        this.resetInputValue(changeStr);
      } else {
        this.resetInputValue('');
      }
    }
  }
  addOnChange(value: string): void {
    if (this.parent instanceof ControlProperty) {
      if (value.trim()) { // 输入值的操作
        TypeFormDesigner.selectedControl?.addOnChange(this.content.dom.value);
        return;
      } else {
        TypeFormDesigner.selectedControl?.removeOnChange();
      }
    }
    if (this.parent instanceof FieldProperty) {
      if (TypeFormDesigner.selectedTableDataCell?.control instanceof TypeControl) {
        if (value.trim()) { // 输入值的操作
          TypeFormDesigner.selectedTableDataCell?.control?.addOnChange(this.content.dom.value);
          return;
        } else {
          TypeFormDesigner.selectedTableDataCell?.control?.removeOnChange();
        }
      } else {
        console.error('AppRoot.selectedTableDataCell?.control is not TypeControl . ');
      }
    }
  }
  initEvents(): void {
    // super.initEvents();
    this.events.push(
      fromEvent(this.button.dom, 'click').subscribe(() => {
        this.addOnChange(this.content.dom.value);
      })
    );
  }
}
