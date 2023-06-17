import { WebTableHead } from '../../../../../../../../type-node/web-element/html-element/table/head/head.class';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { ControlProperty } from '../control-property';

// 控件标题属性
export class ControlTitleProperty extends PropertyInput {
  className: 'ControlTitleProperty';

  constructor(public parent: ControlProperty | FieldProperty) {
    super('控件标题', '请输入控件标题');
    // console.log('control title property constructor . ');
    this.className = 'ControlTitleProperty';
    this.addAttrName('control-title-property');
    // console.log('this.dom is ', this.dom);
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
  // 选中控件时，重置控件属性 ---> 重置控件标题
  controlPropertyReset(value?: string): void {
    if (value !== undefined) {
      this.editor.selectedControl?.resetLabelText(this.content.dom.value);
      return;
    }
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    if (this.editor.selectedControl?.formItem.labelText?.text) {
      this.resetInputValue(this.editor.selectedControl.formItem.labelText.text);
    } else {
      this.resetInputValue('');
    }
  }

  fieldPropertyReset(value?: string): void {
    if (!this.editor.selectedTableDataCell) {
      console.error('this.editor.selectedTableDataCell is null .');
      return;
    }
    if (value !== undefined) {
      const table = this.editor.selectedTableDataCell.parent.parent;
      const tableHeader = this.editor.selectedTableDataCell.parent.parent.config?.tableHeader;
      const index = this.editor.selectedTableDataCell.index;
      if (tableHeader && index !== undefined) {
        tableHeader[index].label = value;
        // 修改表头标签
        (table.childNodes[0] as WebTableHead).childNodes[index].childNodes[0].setText(value);
        (table.childNodes[0] as WebTableHead).childNodes[index].render();
      }
      console.log('tableHeader is ', tableHeader);
      return;
    }
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    const tableHeader = this.editor.selectedTableDataCell?.parent.parent.config?.tableHeader;
    // console.log('tableHeader is ', tableHeader);
    const index = this.editor.selectedTableDataCell?.index;
    // console.log('index is ', index);
    if (tableHeader && index !== undefined) {
      // console.log('tableHeader[index].label is ', tableHeader[index].label);
      this.resetInputValue(tableHeader[index].label);
    } else {
      this.resetInputValue('');
    }
  }
}
