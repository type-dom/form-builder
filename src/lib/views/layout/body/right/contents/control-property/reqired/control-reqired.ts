import { Input, Textarea, TextNode } from '@type-dom/framework';
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
  ],
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
        this.formBuilder.selectedControl?.itemContent instanceof Input ||
        this.formBuilder.selectedControl?.itemContent instanceof Textarea
      ) {
        this.formBuilder.selectedControl?.itemContent.setAttribute(
          'required',
          !!value
        );
      }
      return;
    }
    // when select control
    console.log('this.styleObj.display is ', this.styleObj.display);
    if (this.styleObj.display === 'none') this.show();
    const required =
      !!this.formBuilder.selectedControl?.formItem.itemContent.attrObj.required;
    console.log('required is ', required);
    this.resetResultValue(required ? 'required' : '');
  }

  fieldPropertyReset(value?: string): void {
    if (!this.formBuilder.selectedTableDataCell) {
      console.error('this.formBuilder.selectedTableDataCell is null . ');
      return;
    }
    if (this.formBuilder.selectedTableDataCell.control instanceof TextNode) {
      console.error(
        'this.formBuilder.selectedTableDataCell.control is not TypeControl . '
      );
      return;
    }
    if (value !== undefined) {
      if (
        this.formBuilder.selectedTableDataCell.control.itemContent instanceof
          Input ||
        this.formBuilder.selectedTableDataCell.control.itemContent instanceof
          Textarea
      ) {
        this.formBuilder.selectedTableDataCell.control.itemContent.setAttribute(
          'required',
          !!value
        );
      }
      return;
    }
    // when select control
    console.log('this.styleObj.display is ', this.styleObj.display);
    if (this.styleObj.display === 'none') this.show();
    const required =
      !!this.formBuilder.selectedTableDataCell.control.formItem.itemContent
        .attrObj.required;
    console.log('required is ', required);
    this.resetResultValue(required ? 'required' : '');
  }
}
