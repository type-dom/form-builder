import { IOptionConfig } from '../../../../../../../core/controls/web-control.interface';
import { Input } from '../../../../../../../../type-dom/element/html-element/input/input.class';
import { Textarea } from '../../../../../../../../type-dom/element/html-element/textarea/textarea.class';
import { TextNode } from '../../../../../../../../type-dom/text-node/text-node.class';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyRadio } from '../../property-item/radio/property-radio.abstract';
import { ControlProperty } from '../control-property';

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
  controlPropertyReset(value?: string): void {
    if (value !== undefined) {
      if (
        this.appRoot.selectedControl?.itemContent instanceof Input
        || this.appRoot.selectedControl?.itemContent instanceof Textarea
      ) {
        this.appRoot.selectedControl?.itemContent.setAttribute('required', !!value);
      }
      return;
    }
    // when select control
    console.log('this.styleObj.display is ', this.styleObj.display);
    if (this.styleObj.display === 'none') this.show();
    const required = !!this.appRoot.selectedControl?.formItem.itemContent.attrObj.required;
    console.log('required is ', required);
    this.resetResultValue(required ? 'required' : '');
  }
  fieldPropertyReset(value?: string): void {
    if (!this.appRoot.selectedTableDataCell) {
      console.error('this.appRoot.selectedTableDataCell is null . ');
      return;
    }
    if (this.appRoot.selectedTableDataCell.control instanceof TextNode) {
      console.error('this.appRoot.selectedTableDataCell.control is not WebControl . ');
      return;
    }
    if (value !== undefined) {
      if (
        this.appRoot.selectedTableDataCell.control.itemContent instanceof Input
        || this.appRoot.selectedTableDataCell.control.itemContent instanceof Textarea
      ) {
        this.appRoot.selectedTableDataCell.control.itemContent.setAttribute('required', !!value);
      }
      return;
    }
    // when select control
    console.log('this.styleObj.display is ', this.styleObj.display);
    if (this.styleObj.display === 'none') this.show();
    const required = !!this.appRoot.selectedTableDataCell.control.formItem.itemContent.attrObj.required;
    console.log('required is ', required);
    this.resetResultValue(required ? 'required' : '');
  }
}
