import { TypeDiv, Parser } from 'type-dom.ts';
import { TypeForm } from '../../type-form';
import template from './test.html';
export class Test extends TypeDiv {
  className: 'Test';
  constructor(public parent: TypeForm) {
    super();
    this.className = 'Test';
    // this.childNodes = this.createItems(this, [{
    //   TypeClass: Span,
    //   propObj: {
    //     attrObj: {
    //       name: 'spanTest'
    //     },
    //     styleObj: {
    //       backgroundColor: '#ddd',
    //     }
    //   },
    //   childNodes: [{
    //     TypeClass: TextNode,
    //     nodeValue: 'hello test . ',
    //   }]
    // }]);
    // console.log('this is ', this);
    console.log('template is ', template);
    const parser = new Parser({});
    const node = parser.parseFromString(template);
    const nodeJson = node?.toJSON();
    console.log('nodeJson is ', nodeJson);
    // node?.render();
    console.log('node is ', node);
    // if (node?.dom) {
    //   this.dom.appendChild(node?.dom);
    // }
    this.childNodes = [node!];
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
