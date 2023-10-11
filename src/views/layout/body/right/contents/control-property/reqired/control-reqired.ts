import { Input, Textarea, TextNode } from 'type-dom.ts';
import { TypeFormDesigner } from '../../../../../../../type-form-designer';
import { IOptionConfig } from '../../../../../../../core/control/type-control.interface';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyRadio } from '../../property-item/radio/property-radio.abstract';
import { ControlProperty } from '../control-property';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';
const requiredConfigs: IOptionConfig = {
  name: '必填' + Math.random(),
  resultValue: 'required',
  options: [
    {
      label: '是',
      value: 'required',
      checked: false,
    },
    {
      label: '否',
      value: '',
      checked: true,
    },
  ]
};
// 标题对齐属性
export class RequiredProperty extends PropertyRadio {
  className: 'RequiredProperty';
  constructor(public parent: ControlProperty | FieldProperty) {
    super('必填', requiredConfigs);
    // console.log('control title property constructor . ');
    this.className = 'RequiredProperty';
    this.addAttrName('require-property');
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
  update(control: TypeControl | null): void {
    const value = control?.configs.required;
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
      if (
        TypeFormDesigner.selectedControl?.itemContent instanceof Input
        || TypeFormDesigner.selectedControl?.itemContent instanceof Textarea
      ) {
        TypeFormDesigner.selectedControl?.itemContent.setAttribute('required', !!value);
      }
      return;
    }
    // when select control
    console.log('this.styleObj.display is ', this.styleObj.display);
    if (this.styleObj.display === 'none') this.show();
    const required = !!TypeFormDesigner.selectedControl?.formItem.itemContent.attrObj.required;
    console.log('required is ', required);
    this.resetResultValue(required ? 'required' : '');
  }
  fieldPropertyReset(value?: string): void {
    if (!TypeFormDesigner.selectedTableDataCell) {
      console.error('AppRoot.selectedTableDataCell is null . ');
      return;
    }
    if (TypeFormDesigner.selectedTableDataCell.control instanceof TextNode) {
      console.error('AppRoot.selectedTableDataCell.control is not TypeControl . ');
      return;
    }
    if (value !== undefined) {
      if (
        TypeFormDesigner.selectedTableDataCell.control.itemContent instanceof Input
        || TypeFormDesigner.selectedTableDataCell.control.itemContent instanceof Textarea
      ) {
        TypeFormDesigner.selectedTableDataCell.control.itemContent.setAttribute('required', !!value);
      }
      return;
    }
    // when select control
    console.log('this.styleObj.display is ', this.styleObj.display);
    if (this.styleObj.display === 'none') this.show();
    const required = !!TypeFormDesigner.selectedTableDataCell.control.formItem.itemContent.attrObj.required;
    console.log('required is ', required);
    this.resetResultValue(required ? 'required' : '');
  }
}
