import { TextNode } from '../../../../text-node/text-node.class';
import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { TableHead } from '../head/head.class';
import { ITableHeader } from './header.interface';

// 表格表头
export class TableHeader extends TypeHtml implements ITableHeader {
  nodeName: 'th';
  className: 'TableHeader';
  dom: HTMLElement;
  childNodes: TextNode[];

  constructor(public parent: TableHead) {
    super('th');
    this.nodeName = 'th';
    this.dom = document.createElement(this.nodeName);
    this.className = 'TableHeader';
    this.childNodes = [];
  }

  createInstance(thLiteral: ITableHeader): void {
    if (thLiteral.propObj) {
      this.setPropObj(thLiteral.propObj);
    }
    thLiteral.childNodes.forEach((textNode, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].setText(textNode.nodeValue);
      } else {
        const textObj = new TextNode(this);
        textObj.setText(textNode.nodeValue);
        this.appendChild(textObj);
      }
    });
  }
}
