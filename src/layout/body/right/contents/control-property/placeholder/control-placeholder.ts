import { Textarea } from '../../../../../../web-element/html-element/textarea/textarea.class';
import { Input } from '../../../../../../web-element/html-element/input/input.class';
import { SingleInputControl } from '../../../../../../core/controls/basic/single-input/single-input.class';
import { MultilineInputControl } from '../../../../../../core/controls/basic/multiline-input/multiline-input.class';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { ControlProperty } from '../control-property';

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
  controlPropertyReset(value?: string): void {
    if (value !== undefined) {
      if (this.editor.selectedControl instanceof SingleInputControl ||
        this.editor.selectedControl instanceof MultilineInputControl) {
        this.editor.selectedControl?.resetPlaceholder(this.content.dom.value);
      } else {
        throw Error('不是单行输入控件或者多行输入控件');
      }
      return;
    }
    if (this.editor.selectedControl instanceof SingleInputControl ||
      this.editor.selectedControl instanceof MultilineInputControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      if (this.editor.selectedControl?.itemContent instanceof Input ||
        this.editor.selectedControl?.itemContent instanceof Textarea) {
        // todo 表格中的控件和普通控件的placeholder取值不一样。普通控件能这样取，表格中控件却不行 ？？？
        const placeholder = this.editor.selectedControl?.itemContent?.dom.placeholder;
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
      if (this.editor.selectedTableDataCell?.control instanceof SingleInputControl ||
        this.editor.selectedTableDataCell?.control instanceof MultilineInputControl) {
        this.editor.selectedTableDataCell.control.resetPlaceholder(this.content.dom.value);
      } else {
        throw Error('不是单行输入控件或者多行输入控件');
      }
      return;
    }
    if (this.editor.selectedTableDataCell?.control instanceof SingleInputControl ||
      this.editor.selectedTableDataCell?.control instanceof MultilineInputControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'block');
      if (this.editor.selectedTableDataCell.control.itemContent instanceof Input ||
        this.editor.selectedTableDataCell.control.itemContent instanceof Textarea) {
        const placeholder = this.editor.selectedTableDataCell.control.itemContent.attrObj.placeholder as string;
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
