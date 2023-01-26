import { WebTextNode } from '../../../../web-text-node/web-text-node.class';
import { WebHtml } from '../../web-html.abstract';
import { WebTableHead } from '../head/head.class';
import { IWebTableHeader } from './header.interface';

// 表格表头
export class WebTableHeader extends WebHtml implements IWebTableHeader {
  tagName: 'th';
  className: 'WebTableHeader';
  dom: HTMLElement;
  childNodes: WebTextNode[];

  constructor(public parent: WebTableHead) {
    super();
    this.tagName = 'th';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebTableHeader';
    this.childNodes = [];
  }

  createInstance(thLiteral: IWebTableHeader): void {
    if (thLiteral.propObj) {
      this.setPropObj(thLiteral.propObj);
    }
    thLiteral.childNodes.forEach((textNode, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].setText(textNode.text);
      } else {
        const textObj = new WebTextNode(this);
        textObj.setText(textNode.text);
        this.appendChild(textObj);
      }
    });
  }
}
