import { TypeHtml } from '../../../type-node/type-element/type-html/type-html.abstract';
import { TypeDiv } from '../../../type-node/type-element/type-html/div/div.abstract';
import { FormEditor } from '../../form-editor';
import template from './test.html';
export class Test extends TypeDiv {
  className: 'Test';
  parent: TypeHtml;
  constructor(public formEditor: FormEditor) {
    super();
    this.className = 'Test';
    this.parent = this;
    console.log('template is ', template);
  }
  showFun() {
    console.log('showFun . ');
  }
  submitFun() {
    console.log('submitFun . ');
  }
  template() {
    return template;
  }
}
