import { TextNode } from 'type-dom.ts';
import { TypeForm } from '../../../../../../../type-form';
import { IOptionConfig } from '../../../../../../../core/control/type-control.interface';
import { PropertyRadio } from '../../property-item/radio/property-radio.abstract';
import { FieldProperty } from '../../field-property/field-property';
import { ControlProperty } from '../control-property';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';

const readonlyConfigs: IOptionConfig = {
  name: '只读' + Math.random(),
  resultValue: 'disable',
  options: [
    {
      label: '是',
      value: 'disabled',
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
export class ReadonlyProperty extends PropertyRadio {
  className: 'ReadonlyProperty';
  constructor(public parent: ControlProperty | FieldProperty) {
    super('只读', readonlyConfigs);
    // console.log('control title property constructor . ');
    this.className = 'ReadonlyProperty';
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
    const value = control?.configs.readonly;
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
      if (value === 'disabled') {
        TypeForm.selectedControl?.setDisabled();
      } else {
        TypeForm.selectedControl?.removeDisabled();
      }
      return;
    }
    // when select control
    console.log('this.styleObj.display is ', this.styleObj.display);
    // if (AppRoot.selectedTableDataCell?.control instanceof )
    if (this.styleObj.display === 'none') this.show();
    let disabled = TypeForm.selectedControl?.formItem.itemContent.attrObj.disabled as boolean;
    console.log('disabled is ', disabled);
    this.resetResultValue(disabled ? 'disabled' : '');
  }
  fieldPropertyReset(value?: string): void {
    if (!TypeForm.selectedTableDataCell) {
      console.error('AppRoot.selectedTableDataCell is null . ');
      return;
    }
    if (TypeForm.selectedTableDataCell?.control instanceof TextNode) {
      console.error('AppRoot.selectedTableDataCell?.control is not TypeControl . ');
      return;
    }
    if (value !== undefined) {
      if (value === 'disabled') {
        TypeForm.selectedTableDataCell?.control.setDisabled();
      } else {
        TypeForm.selectedTableDataCell?.control.removeDisabled();
      }
      return;
    }
    console.log('this.styleObj.display is ', this.styleObj.display);
    // if (AppRoot.selectedTableDataCell?.control instanceof )
    if (this.styleObj.display === 'none') this.show();
    // todo 字段属性栏中设置。
    let disabled = TypeForm.selectedTableDataCell.control.formItem.itemContent.attrObj.disabled as boolean;
    console.log('disabled is ', disabled);
    this.resetResultValue(disabled ? 'disabled' : '');
  }
}
