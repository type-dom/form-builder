import { TypeHtml } from '../../../type-node/type-element/type-html/type-html.abstract';
import { TypeDiv } from '../../../type-node/type-element/type-html/div/div.abstract';
import { Parser } from '../../../type-node/parser/parser.class';
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
    const parser = new Parser({});
    const node = parser.parseFromString(template);
    node?.render();
    console.log('node is ', node);
    if (node?.dom) {
      this.dom.appendChild(node?.dom);
    }
    // this.childNodes = [node];
    let buffer: string[] = [];
    node?.dump(buffer);
    console.log('buffer str is ', buffer.join(''));
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
