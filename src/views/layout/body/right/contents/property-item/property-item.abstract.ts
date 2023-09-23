import { Division, Input, Label, Select, Span, Textarea, TextNode, TypeDiv } from 'type-dom.ts';
import { TdButton } from 'type-dom-ui';
import { labelStyle } from '../../../../../../core/control/type-control.const';
import { ControlProperty } from '../control-property/control-property';
import { FormProperty } from '../form-property/form-property';
import { FieldProperty } from '../field-property/field-property';

export abstract class PropertyItem extends TypeDiv {
  abstract className: string;
  abstract parent: ControlProperty | FormProperty | FieldProperty;
  abstract childNodes: [Label, ...(Span | Input | Textarea | Select | Division)[], TdButton];
  label: Label;
  button: TdButton;
  protected constructor(labelText: string) {
    super();
    this.nodeName = 'div';
    this.dom = document.createElement('div');
    this.addStyleObj({
      // border: '1px solid #1890ff',
      // background: '#f3f9ff',
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      marginBottom: '10px!important',
      fontSize: '14px',
    });

    this.label = new Label(this);
    const text = new TextNode(this.label, labelText);
    this.label.childNodes.push(text);
    this.label.propObj.styleObj = Object.assign({}, labelStyle);
    this.button = new TdButton(this, {
      type: 'primary',
      size: 'mini'
    });
    this.button.hide();
  }
  show(): void {
    this.setStyleObj({
      display: 'flex',
    });
  }
}
