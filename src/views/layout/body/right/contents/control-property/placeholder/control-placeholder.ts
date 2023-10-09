import { Textarea, Input } from 'type-dom.ts';
import { TypeForm } from '../../../../../../../type-form';
import { SingleInputControl } from '../../../../../../../core/control/basic/single-input/single-input.class';
import { MultilineInputControl } from '../../../../../../../core/control/basic/multiline-input/multiline-input.class';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { ControlProperty } from '../control-property';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';

// 控件字段属性
export class ControlPlaceholderProperty extends PropertyInput {
  className: 'ControlPlaceholderProperty';

  constructor(public parent: ControlProperty | FieldProperty) {
    super('占位提示', '请输入占位提示');
    this.className = 'ControlPlaceholderProperty';
    this.addAttrName('control-placeholder-property');
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
    const value = control?.configs.placeholder as string;
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
      if (TypeForm.selectedControl instanceof SingleInputControl ||
        TypeForm.selectedControl instanceof MultilineInputControl) {
        TypeForm.selectedControl?.resetPlaceholder(this.content.dom.value);
      } else {
        throw Error('不是单行输入控件或者多行输入控件');
      }
      return;
    }
    if (TypeForm.selectedControl instanceof SingleInputControl ||
      TypeForm.selectedControl instanceof MultilineInputControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      if (TypeForm.selectedControl?.itemContent instanceof Input ||
        TypeForm.selectedControl?.itemContent instanceof Textarea) {
        // todo 表格中的控件和普通控件的placeholder取值不一样。普通控件能这样取，表格中控件却不行 ？？？
        const placeholder = TypeForm.selectedControl?.itemContent?.dom.placeholder;
        if (placeholder) {
          this.resetInputValue(placeholder);
        } else {
          this.resetInputValue('');
        }
      }
    } else {
      this.hide();
    }
  }
  fieldPropertyReset(value?: string): void {
    if (value !== undefined) {
      if (TypeForm.selectedTableDataCell?.control instanceof SingleInputControl ||
        TypeForm.selectedTableDataCell?.control instanceof MultilineInputControl) {
        TypeForm.selectedTableDataCell.control.resetPlaceholder(this.content.dom.value);
      } else {
        throw Error('不是单行输入控件或者多行输入控件');
      }
      return;
    }
    if (TypeForm.selectedTableDataCell?.control instanceof SingleInputControl ||
      TypeForm.selectedTableDataCell?.control instanceof MultilineInputControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      if (TypeForm.selectedTableDataCell.control.itemContent instanceof Input ||
        TypeForm.selectedTableDataCell.control.itemContent instanceof Textarea) {
        const placeholder = TypeForm.selectedTableDataCell.control.itemContent.attrObj.placeholder as string;
        if (placeholder) {
          this.resetInputValue(placeholder);
        } else {
          this.resetInputValue('');
        }
      }
      return;
    } else {
      this.hide();
    }
  }
}
