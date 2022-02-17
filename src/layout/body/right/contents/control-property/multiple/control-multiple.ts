import { IOptionConfig } from '../../../../../../core/controls/web-control.interface';
import { AttachmentControl } from '../../../../../../core/controls/basic/attachment/attachment.class';
import { PropertyRadio } from '../../property-item/radio/property-radio.abstract';
import { FieldProperty } from '../../field-property/field-property';
import { ControlProperty } from '../control-property';

const requiredConfigs: IOptionConfig = {
  name: '可多选' + Math.random(),
  resultValue: 'required',
  options: [
    {
      label: '是',
      value: 'multiple',
      checked: false,
    },
    {
      label: '否',
      value: '',
      checked: true,
    },
  ]
};
// 附件控件，是否可多选文件控制属性。
export class MultipleProperty extends PropertyRadio {
  className: 'MultipleProperty';
  constructor(public parent: ControlProperty | FieldProperty) {
    super('可多选', requiredConfigs);
    // console.log('control title property constructor . ');
    this.className = 'MultipleProperty';
    this.addAttrName('multiple-property');
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
  controlPropertyReset(value?: string): void {
    if (value !== undefined) {
      if (this.editor.selectedControl instanceof AttachmentControl) {
        this.editor.selectedControl.itemContent.setAttribute('multiple', !!value);
      }
      return;
    }
    if (this.editor.selectedControl instanceof AttachmentControl) {
      if (this.styleObj.display === 'none') this.show();
      const multiple = !!this.editor.selectedControl?.formItem.itemContent.attrObj.multiple;
      this.resetResultValue(multiple ? 'multiple' : '');
    } else {
      this.hide();
    }
  }
  fieldPropertyReset(value?: string): void {
    if (value !== undefined) {
      if (this.editor.selectedTableDataCell?.control instanceof AttachmentControl) {
        this.editor.selectedTableDataCell.control.itemContent.setAttribute('multiple', !!value);
      } else {
        console.error('this.editor.selectedTableDataCell.control is not AttachmentControl . ');
      }
      return;
    }
    if (this.editor.selectedTableDataCell?.control instanceof AttachmentControl) {
      if (this.styleObj.display === 'none') this.show();
      const multiple = !!this.editor.selectedTableDataCell.control.formItem.itemContent.attrObj.multiple;
      this.resetResultValue(multiple ? 'multiple' : '');
      return;
    } else {
      this.hide();
    }
  }
}
