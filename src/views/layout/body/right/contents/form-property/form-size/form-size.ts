import { IOptionConfig } from '../../../../../../../core/control/type-control.interface';
import { PropertyRadio } from '../../property-item/radio/property-radio.abstract';
import { FormProperty } from '../form-property';
const FormSizeConfig: IOptionConfig = {
  name: '表单尺寸',
  resultValue: 'large',
  options: [
    {
      label: '大',
      value: 'large',
      checked: true,
    },
    {
      label: '中',
      value: 'middle',
      checked: false,
    },
    {
      label: '小',
      value: 'small',
      checked: false,
    },
  ]
};
// 表单尺寸属性
export class FormSizeProperty extends PropertyRadio {
  className: 'FormSizeProperty';

  constructor(public parent: FormProperty) {
    super('表单尺寸', FormSizeConfig);
    // console.log('control title property constructor . ');
    this.className = 'FormSizeProperty';
    this.addAttrName('form-size-property');
    // console.log('this.dom is ', this.dom);
  }

  // todo 表单尺寸的样式
  reset(value: string): void {
    //
  }
  // todo 表单尺寸的样式
  update(value: string): void {
    //
  }
}
