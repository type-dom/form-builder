import { TypeHtml } from '../../../type-dom/type-element/type-html/type-html.abstract';
import { TypeDiv } from '../../../type-dom/type-element/type-html/div/div.abstract';
// import { Parser } from '../../../type-dom/parser/parser.class';
import { FormEditor } from '../../form-editor';
import template from './test.html';
import { TextNode } from '../../../type-dom/text-node/text-node.class';
import { Span } from '../../../type-dom/element/html-element/span/span.class';
export class Test extends TypeDiv {
  className: 'Test';
  parent: TypeHtml;
  constructor(public formEditor: FormEditor) {
    super();
    this.className = 'Test';
    this.parent = this;
    this.childNodes = this.createItems(this, [{
      TypeClass: Span,
      childNodes: [{
        TypeClass: TextNode,
        nodeValue: 'hello test . ',
      }]
    }]);
    console.log('this is ', this);
    // console.log('template is ', template);
    // const parser = new Parser({});
    // const node = parser.parseFromString(template);
    // const nodeJson = node?.toJSON();
    // console.log('nodeJson is ', nodeJson);
    // node?.render();
    // console.log('node is ', node);
    // if (node?.dom) {
    //   this.dom.appendChild(node?.dom);
    // }
    // // this.childNodes = [node];
    // let buffer: string[] = [];
    // node?.dump(buffer);
    // console.log('buffer str is ', buffer.join(''));
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
