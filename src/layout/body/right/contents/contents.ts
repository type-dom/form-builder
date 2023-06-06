import { DivComponent } from '../../../../web-abstract/web-component/div-component/div-component.abstract';
import { BodyRight } from '../right';
import { ControlProperty } from './control-property/control-property';
import { FormProperty } from './form-property/form-property';
import { FieldProperty } from './field-property/field-property';

export class RightContents extends DivComponent {
  className: 'RightContents';
  childNodes: [FieldProperty, ControlProperty, FormProperty];

  fieldProperty: FieldProperty;
  controlProperty: ControlProperty;
  formProperty: FormProperty;

  constructor(public parent: BodyRight) {
    super();
    this.className = 'RightContents';
    this.propObj = {
      styleObj: {
        height: 'calc(' + this.editor.el.clientHeight + 'px - 100px)',
        overflowY: 'auto',
        margin: '0 5px 5px',
        border: '1px solid #ccc',
        borderTop: 'none',
      },
      attrObj: {
        name: 'body-right-contents'
      }
    };

    this.fieldProperty = new FieldProperty(this);
    this.controlProperty = new ControlProperty(this);
    this.formProperty = new FormProperty(this);
    this.childNodes = [this.fieldProperty, this.controlProperty, this.formProperty];
  }
}
