import { TextNode } from '../../../../text-node/text-node.class';
import { TypeHtml } from '../../../../type-element/type-html/type-html.abstract';
import { WebTableHead } from '../head/head.class';
import { IWebTableHeader } from './header.interface';

// 表格表头
export class WebTableHeader extends TypeHtml implements IWebTableHeader {
  nodeName: 'th';
  className: 'WebTableHeader';
  dom: HTMLElement;
  childNodes: TextNode[];

  constructor(public parent: WebTableHead) {
    super('th');
    this.nodeName = 'th';
    this.dom = document.createElement(this.nodeName);
    this.className = 'WebTableHeader';
    this.childNodes = [];
  }

  createInstance(thLiteral: IWebTableHeader): void {
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
