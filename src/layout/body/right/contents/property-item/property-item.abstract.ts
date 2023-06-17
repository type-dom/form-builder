import { Label } from '../../../../../type-node/web-element/html-element/label/label.class';
import { Input } from '../../../../../type-node/web-element/html-element/input/input.class';
import { Textarea } from '../../../../../type-node/web-element/html-element/textarea/textarea.class';
import { Division } from '../../../../../type-node/web-element/html-element/division/division.class';
import { Button } from '../../../../../type-node/web-element/html-element/button/button.class';
import { Select } from '../../../../../type-node/web-element/html-element/select/select.class';
import { Span } from '../../../../../type-node/web-element/html-element/span/span.class';
import { WebTextNode } from '../../../../../type-node/web-text-node/web-text-node.class';
import { TypeDiv } from '../../../../../type-node/type-element/type-html/div/div.abstract';
import { labelStyle } from '../../../../../core/controls/web-control.const';
import { ControlProperty } from '../control-property/control-property';
import { FormProperty } from '../form-property/form-property';
import { FieldProperty } from '../field-property/field-property';

export abstract class PropertyItem extends TypeDiv {
  abstract className: string;
  abstract parent: ControlProperty | FormProperty | FieldProperty;
  abstract childNodes: [Label, ...(Span | Input | Textarea | Select | Division)[], Button];

  label: Label;
  button: Button;
  protected constructor(labelText: string) {
    super();
    this.tagName = 'div';
    this.dom = document.createElement('div');
    this.propObj.styleObj = {
      // border: '1px solid #1890ff',
      // background: '#f3f9ff',
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      marginBottom: '10px!important',
      fontSize: '14px',
    };

    this.label = new Label(this);
    const text = new WebTextNode(this.label, labelText);
    this.label.childNodes.push(text);
    this.label.propObj.styleObj = Object.assign({}, labelStyle);
    this.button = new Button(this);
    this.button.hide();
  }

  show(): void {
    this.setStyleObj({
      display: 'flex',
    });
  }
}
